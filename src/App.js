// import logo from './assets/images/logo.svg';
import './styles/Style.css';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import faq from "./components/faq/faq";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <div className="header-section">
        <Header/>
      </div>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
      <section className="intro-section container">
        <Intro/>
      </section>
      <section className="themes-section container">themes: fancy</section>
      <section className="timeline-section container" id="timeline">
        <Timeline/>
      </section>
      <section className="hosts-section container">hosts: leon</section>
      <section className="faq-section container">
        <faq />
      </section>
    </div>
  );
}

export default App;
