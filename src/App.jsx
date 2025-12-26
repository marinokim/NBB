import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Network from './pages/Network';
import Contact from './pages/Contact';
import Support from './pages/Support';

import SteelProducts from './pages/SteelProducts';
import KProducts from './pages/KProducts';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1, marginTop: 'var(--header-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/business/steel" element={<SteelProducts />} />
            <Route path="/business/k-product" element={<KProducts />} />
            <Route path="/network" element={<Network />} />
            <Route path="/contact" element={<Contact />} />
            {/* Hidden Route */}
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
