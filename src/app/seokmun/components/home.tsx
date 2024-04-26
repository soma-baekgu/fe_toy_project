import React from 'react';
import styles from '../css/home.module.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="content0">
      <div className={styles.background}>
        <div className={styles.container}>
          <p>CREATIVE HEO SEOKMUN</p>
          <p>PORTFOLIO<br />VOL.1</p>
          <h1 className={styles.h1Style}>BAEK END<br />DEVELOPER<br /><span className={styles.name}>허석문</span></h1>
        </div>
      </div>
    </section>
  );
};

export default Home;