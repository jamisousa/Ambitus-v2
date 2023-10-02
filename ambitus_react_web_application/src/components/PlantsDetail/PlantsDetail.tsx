import styles from './PlantsDetail.module.css'
import rightplant from '../../resources/img/rightplant.svg';
import leftplant from '../../resources/img/leftplant.svg';

const PlantsDetail = () => {

    return(
        <div className={styles.mainsection}>
              <div className={styles.leftplant}>
                <img src={leftplant}/>
              </div>
            
              <div className={styles.rightplant}>
                <img src={rightplant}/>
              </div>
        </div>
    );

}

export default PlantsDetail;