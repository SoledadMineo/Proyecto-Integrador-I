
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListVajillaComponents from './components/ListVajillaComponent';
import AddVajillaComponent from './components/AddVajillaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListVajillaComponents/>}></Route>
            <Route path='/vajillas' element={<ListVajillaComponents/>}></Route>
            <Route path='/add-vajilla' element={<AddVajillaComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
