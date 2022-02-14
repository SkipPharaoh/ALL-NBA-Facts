import './App.css';
import {Routes, Route} from 'react-router-dom'

// COMPONENTS IMPORT //
import Players from './components/Players';
import Teams from './components/Teams';
import Home from './components/Home';
import Header from './components/Header';
import TeamsDetail from './components/TeamsDetail';
import SearchContainer from './components/SearchContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Different Pages/Routes */}
      <main className='Routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/teams/:id' element={<TeamsDetail />} />
          <Route path='/players' element={<Players />} />
          <Route path='/search' element={<SearchContainer />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className='Foot'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
