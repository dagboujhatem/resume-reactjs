import React, { useState } from 'react';
import logo from '../assets/img/logo.png';

const Footer = (props) => {
	const [fullYear, setFullYear] = useState(new Date().getFullYear());
    return (
        <footer className="footer_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="footer_top flex-column">
						<div className="footer_logo">
							<a href="#">
								<img src={logo} alt=""/>
							</a>
							<h4>Follow Me</h4>
						</div>
						<div className="footer_social">
							<a href="https://www.facebook.com/hatem.dag.7127" target="_blank"><i className="fa fa-facebook"></i></a>
							<a href="https://www.linkedin.com/in/dagbouj-hatem/" target="_blank"><i className="fa fa-linkedin"></i></a>
							<a href="https://github.com/dagboujhatem" target="_blank"><i className="fa fa-github"></i></a>
							<a href="https://gitlab.com/DagboujHatem" target="_blank"><i className="fa fa-gitlab"></i></a>
							<a href="https://gitlab.com/DagboujHatem" target="_blank"><i className="fa fa-google"></i></a>
							<a href="https://gitlab.com/DagboujHatem" target="_blank"><i className="fa fa-instagram"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row footer_bottom justify-content-center">
				<p className="col-12 footer-text">
					Copyright &copy; <span>{fullYear}</span> All rights reserved | This resume template is maded with React <i className="fa fa-heart-o" aria-hidden="true"></i> and developped by <a href="https://www.linkedin.com/in/dagbouj-hatem/" target="_blank"> DAGBOUJ Hatem</a>
				</p>
			</div>
		</div>
	</footer>
    );
}

export default Footer;