import "./../../style/style.css"
import Navbar from './../../components/navbar/Navbar';
import Footer from "../../components/footer/footer";

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1>About Page</h1>
      <h3>Let Know About us</h3>
    </div>
    <Footer />
    
    </>
  );
};

export default AboutPage;