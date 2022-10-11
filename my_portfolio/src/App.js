import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Stack from './components/Stack';

function App() {
  return (
	<div>
		<Header/>
		<HomePage/>
		<Stack/>
	</div>
  );
}

export default App;
{/* <Switch>
<Route exact path="/dashboard" component={Dashboard} />
</Switch> */}