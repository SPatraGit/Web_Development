import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Bubai" contactText = "Contact Us"/>
    {/*<Navbar/>*/}
    <TextForm/>
    </>
  );
}

export default App;
