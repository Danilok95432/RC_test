import Image from './Image'
import styles from '../Slider.module.css'

const Slide = (props) => {

    return(
        <div className={styles.slide}>
            <Image src={props.content}/>
        </div>
    )
}

export default Slide