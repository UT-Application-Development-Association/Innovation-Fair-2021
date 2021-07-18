/* eslint-disable react/react-in-jsx-scope */
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./styles/Style.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Hosts from "./components/Hosts";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/Footer";


function App() {
  console.log("Developed by Yuxuan Liu, Stephanie Chen, Fancy Mao.");
  return (
    <div className="App">
      <div className="header-section">
        <Header/>
      </div>
      <main>
        <section className="intro-section" id="introduction">
          <Intro/>
        </section>
        <section className="themes-section">
          <Themes />
        </section>
        <section className="timeline-section" id="timeline">
          <Timeline/>
        </section>
        <section className="hosts-section" id="guests">
          <Hosts/>
        </section>
        <section className="sponsors-section" id="sponsors">
          <Sponsors/>
        </section>
        <section className="faq-section" id="FAQ">
          <FAQ />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
      
    </div>
  );
}

export default App;
