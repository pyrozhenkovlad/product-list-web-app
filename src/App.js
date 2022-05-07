import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from './pages/List';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<List/>}/>
      </Routes>
      <Routes>
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
