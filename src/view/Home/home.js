import './../../style/style.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>HOME</h1>
        <h3>Welcome to Home page</h3>
        <p>Routing done using library</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;