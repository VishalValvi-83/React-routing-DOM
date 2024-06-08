import './../../style/style.css';
import Navbar from './../../components/navbar/Navbar';
import Footer from "../../components/footer/footer";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contact Page</h1>
        <h3>Get in Touch With Us</h3>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;