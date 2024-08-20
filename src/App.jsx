import Header from "./components/Header";
import Solutions from "./sections/Solutions";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Testimonial from "./sections/Testimonial";
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
    <header><Header/></header>
    <section>
    <Hero/>
    </section>
    <section>
      <Products/>
    </section>
    <section>
      <Solutions/>
    </section>
    <section>
      <Testimonial/>
    </section>
    <footer>
      <Footer/>
    </footer>
 

     </>
        
  )
}

export default App;
