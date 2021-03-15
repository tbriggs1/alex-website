import React from 'react';
import {scrollReveal} from '../components/Animations.js';
import {UseScroll} from '../components/Scroll.js';
import {motion} from 'framer-motion';

const FAQ = () => {
    const [element, controls] = UseScroll();
    return(
        <section className="FAQ-section">
            <motion.div className="FAQ" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
                <h1>FAQ</h1>
                <div className="titleline"></div>
                <div className="FAQ1" title="How Do I start?">
                        <h3><span>How Do I start?</span></h3>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                            </p>
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div class="FAQ2" title="How Do I start?">
                    <h3><span>How Do I start?</span></h3>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                            </p>
                    </div>
                    <div className="underline"></div>
                    </div>
                    <div class="FAQ3" title="How Do I start?">
                    <h3><span>How Do I start?</span></h3>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                            </p>
                    </div>
                    <div className="underline"></div>
                    </div>
                    <div class="FAQ4" title="How Do I start?">
                    <h3><span>How Do I start?</span></h3>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                            </p>
                    </div>
                    <div className="underline"></div>
                    </div>
            </motion.div>
        </section>
    )
};

export default FAQ;