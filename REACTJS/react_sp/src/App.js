import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar title = "TextUtils" contactText = "Contact Us"/>
    {/*<Navbar/>*/}
    {/*<div className="container my-3">
      <TextForm heading = "Enter Your text"/>
    </div>*/}
    <div className="container my-3">
      <About/>
    </div>
    </>
  );
}

export default App;
