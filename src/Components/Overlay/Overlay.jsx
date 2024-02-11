import { useEffect } from 'react'
import styles from './Overlay.module.css'

const Overlay = (props) => {

    useEffect(() => {
        if(props.isActiveModal)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "visible";
    }, [props.isActiveModal])

    return(
        <>
        {
            props.isActiveModal ?
            <div className={styles.overlay} onClick={() => props.switchModalMode(false)}>
                
            </div>
            :
            null
        }
        </>
    )
}

export default Overlay