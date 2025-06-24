import Nav from './components/Nav';
import Header from './components/Header';
import Partners from './components/Partners';
import Support from './components/Support';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Mobile from './components/mobile';

function App() {
  return (
    <>
    <div className='hidden max-lg:block'>
      <Mobile />
    </div>
    <div className='max-md:hidden'>
      <Nav />
      <Header />
      <Partners />
      <Support />
      <FAQs />
      <Footer />
    </div>
    </>
  )
}

export default App