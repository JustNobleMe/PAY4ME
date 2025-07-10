import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Partners from './components/Partners';
import Support from './components/Support';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Mobile from './components/mobile';
import Loader from './components/Loader';

function App() {
   const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const handleLoad = () => {
            setIsLoaded(true);
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad);
        }
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!isLoaded) {
        return (
            <Loader />
        )
    }

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