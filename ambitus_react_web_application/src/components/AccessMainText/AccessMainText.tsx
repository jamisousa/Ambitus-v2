import styles from './AccessMainText.module.css';
import image from '../../resources/img/ambitusName-compressed.svg';

const AccessMainText = () =>{

    return(
        <div className={`${styles.mainsection}`}>
            <img src={image}/>
            <h4>Tornando o mundo um lugar melhor hoje </h4>
        </div>
    )

}

export default AccessMainText;