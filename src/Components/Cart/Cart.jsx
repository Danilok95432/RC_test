import { useState } from 'react'
import styles from './Cart.module.css'

const Cart = (props) => {

    console.log(props.cart)

    const handleCloseBtn = () => {
        props.switchModalMode(false)
    }

    return(
        <>
        {
            props.isActiveModal ?
            <div className={styles.cart} style={{right: '0%'}}>
                <header id={styles.cart_header}>
                    <div id={styles.cart_logo}>
                        <div className={styles.vector_cart}></div>
                        <span>cart</span>
                    </div>
                    <button id={styles.close_btn} onClick={() => handleCloseBtn()}>
                        <div className={styles.close_vector}></div>
                    </button>
                </header>
                <div className={styles.products_cart}>
                    {
                        props.cart.length == 0 ?
                        <span>cart is empty :(</span>
                        :
                        props.cart.map(product => {
                            return(
                                <div className={styles.item_cart} key={product.id}>
                                    <div className={styles.item_cont}>
                                        <img className={styles.item_img} src={product.images[0]} alt="" />
                                        <div className={styles.item_desc}>
                                            <div className={styles.item_name}>
                                                <span>{product.brand}</span>
                                                <span>{product.title}</span>
                                            </div>
                                            <div className={styles.counter}>
                                                <button id={styles.minus_btn}></button>
                                                <div className={styles.item_number}>1</div>
                                                <button id={styles.plus_btn}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={styles.price}>${product.price}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button className={styles.next_btn}>
                    {
                        props.cart.length == 0 ?
                        <span>back to products</span>
                        :
                        <span>place an order</span>
                    }
                </button>
            </div>
            :
            null
        }
        </>
    )
}

export default Cart