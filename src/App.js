import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Publications from './components/Publications';
import Portfolio from './components/Portfolio';
import Career from './components/Career';
import Contact from './components/Contact';
import Photography from './components/Photography';
import Dashboard from './components/Dashboard';
// import Game from './components/Game';


function App() {
  return (
    <Routes>

      <Route path='/' element={ <Layout /> }>

        <Route index element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/career' element={ <Career /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/photography' element={ <Photography /> } />
        <Route path='/publications' element={ <Publications /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        {/* <Route path='/game' element={ <Game /> } /> */}
        

      </Route>

    </Routes>
    
  );
}

export default App;
