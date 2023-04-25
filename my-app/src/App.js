import './App.css';
import { BooksProvider } from './Context/BooksContext';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Header from './Compenents/Header';
import Home from './Compenents/Home';
import Detail from './Compenents/Detail';
import Hata from './Compenents/Hata';


function App() {
  return (
    <BooksProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Hata />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
