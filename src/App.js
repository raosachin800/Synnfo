import './App.css';
import Nav from './components/nav'
import Banner from './components/banner'
import About from './components/about'
import Services from './components/services'
import Process from './components/process'
import Model from './components/model'
import Colaborate from './components/colaborate'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav/>

      {/* Hero Section */}
      <Banner/>

      {/* About Us */}
      <About/>

      {/* Services We Provide */}
      <Services/>

      {/* Process */}
      <Process/>

      {/* Model Page */}
      <Model/>

      {/* Collaboration */}
      <Colaborate/>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

export default App;
