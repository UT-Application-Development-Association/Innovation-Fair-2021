import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import './styles/Style.css';

import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Themes from './components/Themes';
import Hosts from "./components/Hosts";
import FAQ from "./components/faq/FAQ";
import Intro from "./components/Intro";

function App() {
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
        <section className="hosts-section" id="hosts">
          <Hosts/>
        </section>
        <section className="faq-section" id="FAQ">
          <FAQ />
        </section>
      </main>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
      
    </div>
  );
}

export default App;
