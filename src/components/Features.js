import React from 'react';
import s1 from '../assets/img/services/s1.png';
import s2 from '../assets/img/services/s2.png';
import s3 from '../assets/img/services/s3.png';
import s4 from '../assets/img/services/s4.png';

const Features = (props) => {
    return (
        <section className="features_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                            <h2>service offers </h2>
                            <p>
                                Is give may shall likeness made yielding spirit a itself togeth created
							after sea <br /> is in beast beginning signs open god you're gathering ithe
						</p>
                        </div>
                    </div>
                </div>
                <div className="row feature_inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={s1} alt="" />
                            <h4>Wp developing</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={s2} alt="" />
                            <h4>UI/ux design</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={s3} alt="" />
                            <h4>Web design</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={s4} alt="" />
                            <h4>seo optimize</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;