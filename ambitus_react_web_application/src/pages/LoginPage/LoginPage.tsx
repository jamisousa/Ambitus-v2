import AccessNavbar from '../../components/AccessNavbar/AccessNavbar';
import styles from './LoginPage.module.css';

function LoginPage() {

    return (
      <div className={styles.mainsection}>
        <AccessNavbar/>
        <p>Ambitus Login</p>
      </div>
    )
  }
  
export default LoginPage
  