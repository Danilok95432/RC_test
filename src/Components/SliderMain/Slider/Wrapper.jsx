import { useEffect, useState } from 'react'
import styles from '../Slider.module.css'
import Slide from '../Slide/Slide'

const Wrapper = (props) => {

    const [firstPoint, setFirstPoint] = useState(null)
    let step = props.currentItem

    const touchStart = (e) => {
        setFirstPoint(e.touches[0].clientX)
    }

    const touchEnd = (e) => {
        let endPoint = e.changedTouches[0].clientX
        let det = endPoint - firstPoint
        if(det > 0)
        {
            props.changeSlide(--step)
        }
        else{
            props.changeSlide(++step)
        }
    }

    return(
        <div className={styles.wrapper} 
        style={{ transform: `translateX(-${props.currentItem * 100}%)` }}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        >
            {
               props.products.length === 0 ?
               null
               :
               props.products.map( (product, index) => {
                return <Slide key={index} content={product} />
                })
            }
        </div>
    )
}

export default Wrapper