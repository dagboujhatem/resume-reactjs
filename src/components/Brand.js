import React from 'react';
import logo1 from '../assets/img/brands/logo1.png';
import logo2 from '../assets/img/brands/logo2.png';
import logo3 from '../assets/img/brands/logo3.png';
import logo4 from '../assets/img/brands/logo4.png';
import logo5 from '../assets/img/brands/logo5.png';
import logo6 from '../assets/img/brands/logo6.png';
import logo7 from '../assets/img/brands/logo7.png';
import logo8 from '../assets/img/brands/logo8.png';
import logo9 from '../assets/img/brands/logo9.png';

const Brand = (props) => {
    return (
        <section className="brand_area section_gap_bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo6} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo7} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo8} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell text-center">
                                        <img src={logo9} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-2 col-lg-4 col-md-6">
                        <div className="client-info">
                            <div className="d-flex mb-50">
                                <span className="lage">10</span>
                                <span className="smll">Years Experience Working</span>
                            </div>
                            <div className="call-now d-flex">
                                <div>
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="ml-15">
                                    <p>call us now</p>
                                    <h3>(+1)-800-555-6789</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brand;