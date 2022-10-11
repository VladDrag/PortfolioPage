import './Header.css';
import { Link, Router, Switch, Route } from 'react-router-dom';

function Header({setPage}) {
	const handleClick = (page) => {
		setPage(page);
	}
	return (
		<div className="header">
			<div className="headerLinks">
				<ul className="navBar">
					<li onClick={() => handleClick("home")}>Home</li>
					<li onClick={() => handleClick("about")}>About</li>
					<li onClick={() => handleClick("projects")}>Projects</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;