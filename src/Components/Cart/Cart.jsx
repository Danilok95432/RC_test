import { useState } from 'react'
import styles from './Cart.module.css'

const Cart = (props) => {

    const handleCloseBtn = () => {
        props.switchModalMode(false)
    }

    const handleChangeQuantity = (product, changes) => {
        props.changeQuantity(product, changes)
    }

    const handleDeleteProduct = (product) => {
        props.removeItem(product)
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
                                <div className={styles.item_cart} key={product.item.id}>
                                    <div className={styles.item_cont}>
                                        <img className={styles.item_img} src={product.item.images[0]} alt="" />
                                        <div className={styles.item_desc}>
                                            <div className={styles.item_name}>
                                                <span>{product.item.brand}</span>
                                                <span>{product.item.title}</span>
                                            </div>
                                            <div className={styles.counter}>
                                                <button id={styles.minus_btn} onClick={() => handleChangeQuantity(product, -1)}>
                                                    <div className={styles.minus_vector}></div>
                                                </button>
                                                <div className={styles.item_number}>{product.quantity}</div>
                                                <button id={styles.plus_btn} onClick={() => handleChangeQuantity(product, 1)}>
                                                    <div className={styles.plus_vector}></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={styles.price}>${product.item.price * product.quantity}</span>
                                    <button id={styles.delete_product} onClick={() => handleDeleteProduct(product)}>
                                        <div className={styles.delete_vector}></div>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    props.cart.length != 0 ?
                    <div className={styles.info_order}>
                        <span>{props.counterItems} positions</span>
                        <h2>${props.controlSum}</h2>
                    </div>
                    :
                    null
                }
                <button className={styles.next_btn} onClick={handleCloseBtn}>
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