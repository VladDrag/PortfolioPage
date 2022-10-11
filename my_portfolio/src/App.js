import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import {useState} from 'react';

function App() {
	const [page, setPage] = useState("home");


	return (
	<div>
		<Header setPage={setPage}/>
		{page === "home" && <HomePage/>}
		{page === "about" && <About/>}
		{page === "projects" && <Projects/>}
		<Stack/>
	</div>
	);
}

export default App;
{/* <Switch>
<Route exact path="/dashboard" component={Dashboard} />
</Switch> */}