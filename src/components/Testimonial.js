import React from 'react';
import t1 from '../assets/img/testimonials/t1.jpg';
import t2 from '../assets/img/testimonials/t2.jpg';

const Testimonial = (props) => {
    return (
        <div className="testimonial_area section_gap_bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                            <h2>client say about me</h2>
                            <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br />
							 beginning signs open god you're gathering ithe</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="testi_slider owl-carousel">
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t1} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Elite Martin</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t2} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Davil Saden</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t1} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Elite Martin</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t2} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Davil Saden</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t1} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Elite Martin</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testi_item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={t2} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="testi_text">
                                        <h4>Davil Saden</h4>
                                        <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;