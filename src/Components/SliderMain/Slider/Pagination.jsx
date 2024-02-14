import styles from "../Slider.module.css"

const Pagination = (props) => {

    const dots = [];

    const createPagination = () => {
        if(props.count > 1)
            for (let i = 0; i < props.count; i++) {
                dots.push(
                    i == props.currentItem ?
                    <span className={`${styles.circle} ${styles.active}`} key={`dot-${i}`} number={i}></span>
                    :
                    <span onClick={() => props.changeSlide(i)} className={styles.circle} key={`dot-${i}`} number={i}></span>
                );
            }
        return dots;
    }


    return(
        <div className={styles.pagination}>
            {
                createPagination()
            }
        </div>
    )
}

export default Pagination