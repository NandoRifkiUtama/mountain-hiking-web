import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mountain from './components/Mountain'
import Book from './components/Book'
import Detail from './components/Detail'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Book />
      <Mountain />
      <Footer />
    </div>
  );
}

export default App;
