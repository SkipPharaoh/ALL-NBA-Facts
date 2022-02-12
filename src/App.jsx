import './App.css';
import {Routes, Route} from 'react-router-dom'

// COMPONENTS IMPORT //
import Players from './components/Players';
import Teams from './components/Teams';
import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Different Pages/Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/players' element={<Players />} />
      </Routes>
    </div>
  );
}

export default App;
