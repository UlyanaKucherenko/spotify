import Navbar from '@/components/Navbar';
import styles from '/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navbar/>
      </div>
    </header>
  );
};
export default Header;