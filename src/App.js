import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import './styles/Style.css';

import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Hosts from "./components/Hosts";

function App() {
  return (
    <div className="App">
      <header className="header">
      steph
        <Header url="https://www.google.com" />
      </header>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
      <section className="intro-section container">intro: steph</section>
      <section className="themes-section container">themes: fancy</section>
      <section className="timeline-section container">
        <Timeline/>
      </section>
      <section className="hosts-section container">
        <Hosts/>
      </section>
      <section className="faq-section container">FAQ: fancy https://getbootstrap.com/docs/5.0/components/accordion/</section>
    </div>
  );
}

export default App;
