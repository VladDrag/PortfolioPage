import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<div className="footer">
			<div>
				<p className="footer__text">Made with React</p>
			</div>
			<div className="footer__links">
				<a href="https://github.com/VladDrag" className="footer__link">GitHub</a>
				<a href="https://www.linkedin.com/in/vdra/" className="footer__link">LinkedIn</a>
				<a href="mailto:vdragomir@protonmail.com" className="footer__link">Email</a>
			</div>
		</div>
	);
}