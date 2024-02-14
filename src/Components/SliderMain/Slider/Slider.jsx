import { useEffect, useState} from "react"
import Wrapper from "./Wrapper"
import styles from '../Slider.module.css'
import Pagination from "./Pagination"


const Slider = (props) => {

    const [items, setItems] = useState([props.items])
    const [currentProduct, setProduct] = useState(0)


    let start = currentProduct
    let limit = 10

    const changeSlide = (index) => {
        setProduct(index)
    }

    useEffect(() => {
        let step = props.items.length
        if(currentProduct == -1){
            step = props.items.length - 1 
            setProduct(step)
        }
        if(currentProduct == props.items.length)
        {
            step = 0
            setProduct(step)
        }
    }, [currentProduct])


    return(
        <div className={styles.slider}>
            <Wrapper changeSlide={changeSlide} products={props.items} currentItem={currentProduct}/>
            <Pagination count={props.items.length} currentItem={currentProduct} changeSlide={changeSlide} />
        </div>
    )
}

export default Slider