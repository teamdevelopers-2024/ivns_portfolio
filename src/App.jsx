import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import WhyChooseUs from './pages/WhyChooseUs';
import Placements from './pages/Placements';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// import HomePreview from './pages/HomePreview';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="courses">
          <Courses />
        </section>
        {/* <section id="why-choose-us">
          <WhyChooseUs />
        </section> */}
        {/* <section id="placements">
          <Placements />
        </section> */}
        {/* <section id="gallery">
          <Gallery />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
