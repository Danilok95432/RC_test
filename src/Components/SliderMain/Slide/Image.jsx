import styles from '../Slider.module.css'

const Image = (props) => {
    return(
        props.src ?
        <img className={styles.img} src={props.src} alt="" />
        :
        <span>wait</span>
    )
}

export default Image