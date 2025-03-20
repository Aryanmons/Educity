import Navbar from './Components/Navbar/navbar'; // If folder is Navbar
import Hero from './Components/hero/hero';
import Programs from './Components/programs/programs';
import Title from './Components/Title/title';  // If folder is Title
import About from './Components/About/about';
import Campus from './Components/gallery/Campus'; // lowercase 'c' in import
import Testimonials from './Components/testimonials/testimonials';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Our Programs' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle = 'Gallery' title='Campus photos'/>
<Campus/>
<Title subTitle = 'Testimonials' title='what students says'/>
<Testimonials/>
<Title subTitle = 'Contact Us' title='Get in touch'/>
<Contact/>
<Footer/>
      </div>
    </div>
  )
}

export default App