import { useEffect, useRef, useState } from 'react'
import styles from './Products.module.css'
import axios from "axios"

const Products = (props) => {

    const [limit, setLimit] = useState(10)

    useEffect(() => {
        if(props.activeCategory == 'all')
            axios.get(`https://dummyjson.com/products?limit=10&skip=0`)
            .then(res => {
                props.setProducts(res.data.products)
            })
        else
            axios.get(`https://dummyjson.com/products/category/${props.activeCategory}`)
                .then(res => {
                    props.setProducts(res.data.products)
                })
    }, [props.activeCategory])

    useEffect(() => {
        if(props.activeCategory == 'all')
        {
            let nextLimit = limit + 10
            axios.get(`https://dummyjson.com/products?limit=${nextLimit}&skip=0`)
                .then(res => {
                    props.setProducts(res.data.products)
                })
            props.setLoadMore(false)
            setLimit(nextLimit)
        }
        else{
            let nextLimit = 10
            setLimit(nextLimit)
        }
    }, [props.loadMore])

    const handleBuyBtn = (product) => {
        console.log(product)
        props.addToCart(product)
    }

    return(
        <main style={props.products.length == 0 ? {height: "100vh"} : null}>
        <div className={styles.products}>
            {
                props.products.length != 0 ?
                props.products.map(product => {
                    return(
                        <div className={styles.product} key={product.id}>
                            <div className={styles.sales}>
                                <span className={styles.procent}>{product.discountPercentage}%</span>
                                <span>off sale</span>
                            </div>
                            <img src={product.images[0]} alt="" />
                            <div className={styles.product_container}>
                                <div className={styles.rating}>
                                    <div className={styles.rating_vector}></div>
                                    <span>{product.rating}</span>
                                </div>
                                <div className={styles.title}>
                                    <span>{product.brand}</span>
                                    <span>{product.title}</span>
                                </div>
                                <div className={styles.description}>
                                    <span>{product.description}</span>
                                    <button>Read more</button>
                                </div>
                                <div className={styles.buy} onClick={() => handleBuyBtn(product)}>
                                    <button id={styles.buy_btn}>
                                        <div id={styles.cart}></div>
                                        <span>${product.price}</span>
                                    </button>
                                    <span className={styles.old_price}>${Math.ceil(product.price * (1 + product.discountPercentage / 100))}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <div className={styles.skeleton}>
                    {
                        props.searchText == '' ?
                        <div className={styles.vector_skeleton}></div>
                        :
                        <>
                            <div className={styles.vector_preloader}></div>
                            <h2>Ничего не найдено. 
                                Попробуйте изменить поисковый запрос</h2>
                        </>
                    }
                </div>
            }
        </div>
        {
                props.loadMore == true && props.activeCategory == 'all' ?
                <div className={styles.preloader}>
                    <div className={styles.vector_preloader}></div>
                    <span>loading</span>
                </div>
                :
                null
            }
        </main>
    )
}

export default Products