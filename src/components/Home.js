import React, { useRef } from 'react' 
import CustomHook from './CustomHook';

function Home() {
  const scrollTab = useRef();
  const divs = useRef([]);
  CustomHook(scrollTab, divs);

  return (
    <section ref={scrollTab} className='home'>
      <div className="content">
        <div className="name" ref={(el) => el && divs.current.push(el)}>
          MY NAME IS <span>Varad Pensalwar</span>
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
          A Programmer pursuing his B.Tech Major in Artificial Intelligence and Machine from the Sanjay Ghodawat University, Kolhapur. On top of that I am Web Development Enthusiast, who loves to code.
        </div>
        
        <a href="/Varad Pensalwar.pdf" target="_blank" rel="noopener noreferrer" className='animation active' ref={(el) => el && divs.current.push(el)}>
          Download My CV
        </a>
      </div>
      <div className="avatar" ref={(el) => el && divs.current.push(el)}>
        <div className="card">
          <img src="/avatar.jpg" alt="" />
          <div className="info">
            <div>Web Developer</div>
            <div>VietNamese</div>
            <div>03/12</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home