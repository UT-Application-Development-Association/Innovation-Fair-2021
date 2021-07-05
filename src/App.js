// import logo from './assets/images/logo.svg';
import './styles/Style.css';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import faq from "./components/faq/faq";

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
      <section className="hosts-section container">hosts: leon</section>
      <section className="faq-section container">
        <faq />
      </section>
    </div>
  );
}

export default App;
