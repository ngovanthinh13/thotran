import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>

      <hr />
      <div className='container'>
        <Nav />
      </div>
      <Content />
      <div className='footer_main'>
        <div className='container'>
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
