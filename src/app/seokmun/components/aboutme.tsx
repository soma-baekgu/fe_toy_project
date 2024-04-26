import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className="content1 clearfix wow fadeIn animated" data-wow-delay="100ms"
             style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeIn'}}>
      <div className="content1-left">
        <h2>About me</h2>
        <a href="sub.html" title="나만의 자기소개 보러가기" target="_blank">
          <p className="img">더 알아보기</p>
          <p className="link">CLICK HERE!</p>
        </a>
        <div className="about_bg"></div>
      </div>
      <div className="content1-right">
        {/* 프로필 및 태그 리스트 */}
      </div>
    </section>
  );
};

export default AboutMe;
