import { useEffect, useRef } from 'react'
import styles from './Header.module.css'
import axios from 'axios'
import { useState } from 'react'

const Header = (props) => {

    const [active, setActive] = useState('all')
    const [search, setSearch] = useState(false)
    let searchRef = useRef('')

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
             .then(res => {
                let categories = ['all']
                res.data.map(elem => {
                    categories.push(elem)
                })
                props.setCategories(categories)
             })
    }, [])

    const handleActiveCategory = (category) => {
        props.setLoadMore(false)
        props.setActiveCategory(category)
        setActive(category)
    }

    const handleCartButton = () => {
        props.switchModalMode(true)
    }

    const handleSeachClick = () => {
        setSearch(true)
    }

    const handleClearBtn = () => {
        props.setSearchText("")
    }

    const handleChangeSearch = () => {
        props.setSearchText(searchRef.current.value)
        if(searchRef.current.value.length >= 3){
            axios.get(`https://dummyjson.com/products/search?q=${searchRef.current.value}&limit=10`)
                 .then(res => {
                    props.setProducts(res.data.products)
                 })
        }
    }

    return(
        <header onMouseLeave={() => setSearch(false)} >
            <div className={ search ? styles.search_active : styles.search_cont} onClick={() => handleSeachClick()}>
                <div className={styles.search}></div>
                <input className={styles.search_input} style={search ? {display: "flex"} : {display: "none"}}
                ref={searchRef}
                type="text" 
                placeholder='Search...'
                onChange={handleChangeSearch} 
                value={props.searchText}
                />
                <button id={styles.close_btn} onClick={() => handleClearBtn()} style={search ? {display: "flex"} : {display: "none"}}>
                     <div className={styles.close_vector}></div>
                </button>
            </div>
            <nav className={styles.categories} style={search ? {display: "none"} : {display: "flex"}}>
                <ul>
                    {
                        props.categories.length != 0 ?
                        props.categories.map(element => {
                            return <li 
                            className={element == active ? styles.categories_element_active : styles.categories_element} 
                            key={element}
                            onClick={() => handleActiveCategory(element)}>
                                {
                                    element == active ?
                                    <div className={styles.choosed}></div>
                                    :
                                    null
                                }
                                <span>{element}</span>
                            </li>
                        })
                        :
                        null
                    }
                </ul>
            </nav>
            <button id={props.counterItems != 0 ? styles.cart_not_empty : styles.cart} onClick={() => handleCartButton()}>
                <div className={props.counterItems != 0 ? styles.vector_not_empty_cart : styles.vector_cart}></div>
                <span>cart</span>
                {
                    props.counterItems != 0 ?
                    <div className={styles.counter}> 
                        <span>{props.counterItems}</span>
                    </div>
                    :
                    null
                }
            </button>
        </header>
    )
}

export default Header