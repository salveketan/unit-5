
import './App.css';
import { ProductPage } from './ProductPage/ProductPage';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
       <ProductPage/>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
