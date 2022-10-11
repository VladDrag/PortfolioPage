import './HomePage.css';
import image from '../images/pielated.me.png';



export default function HomePage() {
	return (
		<div className="homePage">
			<div className="homePageTitle">
				<h3>Hello. I am Vlad.</h3>
			</div>
			<div>
				<img src={image} alt="VD pixelated"/>
			</div>
			<div id="scroll-container">
				<div id="scroll-text">Want to get in touch? My details are below.</div>
			</div>
		</div>
	);
}