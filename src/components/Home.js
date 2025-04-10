import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Varad Pensalwar</span>
            </div>
            <div className="des">
                {/* 30 */}
                A Programmer pursuing his B.Tech Major in Artificial Intelligence and Machine from the Sanjay Ghodawat University, Kolhapur. On top of that I am Web Development Enthusiast, who loves to code.
            </div>
            
            <a href="/Varad Pensalwar.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
    <div className="card">
        <img src="Me2.jpg" alt="" className="primary-image" />
        <img src="Me.jpg" alt="" className="secondary-image" />
        <div className="content">
            <h2>Varad Pensalwar</h2>
            <div className="social">
                <div className="item">
                    <div className="title">Web</div>
                    <div className="count">developer</div>
                </div>
                <div className="item">
                    <div className="title">Leetcode</div>
                    <div className="count">150 Days</div>
                </div>
                <div className="item">
                    <div className="title">Github</div>
                    <div className="count">200 Contribution</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
    )
}

export default Home
