import React from 'react';
import styles from '../css/home.module.css'; // CSS 모듈 임포트

const Home: React.FC = () => {
  return (
    <section id="home" className="content0">
      <div className={styles.container}>
        <p>CREATIVE HEO SEOKMUN</p>
        <p>PORTFOLIO<br />VOL.1</p>
        <h1>BAEK END<br />DEVELOPER<br /><span className="name">허석문</span></h1>
      </div>
    </section>
  );
};

export default Home;