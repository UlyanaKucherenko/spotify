import styles from '/styles/PageHeader.module.scss';
import Image from 'next/image';

export const PageHeader = ({ title, category, imgUrl }) => {
  return (
    <div  className={styles.wrap}>
      <div  className={styles.container}>
        <div className={styles.contentWrap}>
          <div className={styles.imgWrap}>
            <Image src="/user-profile.svg" alt="" width={200} height={200}/>
            {/*<Image src={imgUrl} alt={title} width={200} height={200}/>*/}
            {/*"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2996285463810071&height=300&width=300&ext=1686822463&hash=AeS8cmRwD923LqXj4T8"*/}
          </div>
          <div>
            <h3 className="text-3xl font-bold">{category}</h3>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};