import React from 'react';
import Link from "next/link";
import styles from '../css/aboutme.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className="content1 clearfix wow fadeIn animated" data-wow-delay="100ms"
             style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeIn'}}>
      <div>
        <h2>About me</h2>
        <div className={styles.left}>
          <Link href="/seokmun/aboutme" title="나만의 자기소개 보러가기" target="_blank">
            <p className={styles.img}>더 알아보기</p>
            <p className="link">CLICK HERE!</p>
          </Link>
        </div>
        <div className={styles.right}>
          <h3>허석문</h3>
          <p>안녕하세요. 저는 허석문입니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
          <p>저는 백엔드 개발자로 일하고 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
