// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Mainsection from './components/Mainsection';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
      <Header />
      <Mainsection/>
      <Footer/>
    </>
  );
}
