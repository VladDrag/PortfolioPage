import './Header.css';
function Header() {
	return (
	<div className="header">
		<div className="headerTitle">
			<h3>Vlad Dragomir</h3>
		</div>
		<div className="headerLinks">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Portfolio</li>
			</ul>
		</div>
	</div>
	);
}

export default Header;