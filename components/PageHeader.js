import styles from '/styles/PageHeader.module.scss';
import Image from 'next/image';

export const PageHeader = ({ title, category }) => {
  return (
    <div  className={styles.wrap}>
      <div  className={styles.container}>
        <div className={styles.contentWrap}>
          <div className={styles.imgWrap}>
            <Image src="/user-profile.svg" alt="" width={200} height={200}/>
          </div>
          <div>
            <h3>{category}</h3>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};