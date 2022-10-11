import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
	<div className="header">
		<div className="headerLinks">
			<ul className="navBar">
				<li>Home</li>
				<li>About</li>
				<li>Portfolio</li>
				<li>Tools</li>
			</ul>
		</div>
	</div>
	);
}

export default Header;