"use client";
// Header.tsx 파일 예시
import React, {useState, useEffect} from 'react';
import styles from '../css/header.module.css'; // CSS 모듈 임포트

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isScrolled ? styles.fixed : styles.bottom}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a>HOME</a>
          <a>ABOUT ME</a>
          <a>SKILLS</a>
          <a>PORTFOLIO</a>
          <a>DESIGN</a>
          <a>CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;