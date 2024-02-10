import { useEffect } from 'react'
import styles from './Footer.module.css'
import { useInView } from 'react-intersection-observer'

const Footer = (props) => {

    const {ref, inView} = useInView({
        threshold: 0.8,
    })

    console.log(inView)

    useEffect(() => {
        if(inView){
            console.log('load')
            props.setLoadMore(true)
        }
    }, [inView])

    return(
        <div className={styles.footer} ref={ref}>
            <span>nonameshop©2024</span>
            <div className={styles.vector_footer}></div>
            <div className={styles.made}>
                <div className={styles.logo}></div>
                <span>made in red collar</span>
            </div>
        </div>
    )
}

export default Footer