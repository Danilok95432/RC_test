import { useEffect } from 'react'
import styles from './Header.module.css'
import axios from 'axios'
import { useState } from 'react'

const Header = (props) => {

    const [active, setActive] = useState('all')

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
        props.setActiveCategory(category)
        setActive(category)
    }

    const handleCartButton = () => {
        props.switchModalMode(true)
    }

    return(
        <header>
            <button id={styles.search}></button>
            <nav className={styles.categories}>
                <ul>
                    {
                        props.categories.length != 0 ?
                        props.categories.map(element => {
                            return <li 
                            className={element == active? styles.categories_element_active : styles.categories_element} 
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
            <button id={styles.cart} onClick={() => handleCartButton()}>
                <div className={styles.vector_cart}></div>
                <span>cart</span>
            </button>
        </header>
    )
}

export default Header