import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="content2 wow fadeIn animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeIn' }}>
      <h2>I can do</h2>
      <ol className="skill clearfix">
        {/* 기술 목록 */}
      </ol>
      <h2>and I can do too</h2>
      <ol className="tool clearfix">
        {/* 도구 목록 */}
      </ol>
    </section>
  );
};

export default Skills;
