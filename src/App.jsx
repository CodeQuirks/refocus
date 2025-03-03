import Cards from './components/Cards'
import Footer from './components/Footer'
import Marquees from './components/Marquees'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Stripes from './components/Stripes'
import Work from './components/Work'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full  bg-zinc-900 text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App