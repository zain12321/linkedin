import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import RightBar from './components/RightBar';
import Mobile from './components/Mobile';
import MainComponents from './components/MainComponents';
import Profile from './pages/Profile';
// import Newpage from './pages/Newpage';
// import Home from './pages/Home';
// import Items from './pages/Items';

function App() {
	return (
		<div className="App bg-gray-100  ">
			<MainComponents/>

			{/* <Router>
				<Header />
				<Navbar />
				<Mobile />
				<div className="flex bg-gray-100 pt-12 w-[580px] 
       2xl:ml-[200px]
       sm:w-[740px] md:w-[580p] lg:w-[1350px] xl:w-[1345px]">
					<Sidebar />
					<Section />
					<RightBar />
				</div>
				<Switch />
			</Router> */}
		</div>
	);
}

export default App;
