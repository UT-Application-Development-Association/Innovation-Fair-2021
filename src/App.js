// import logo from './assets/images/logo.svg';
import './styles/Style.css';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Faq from "./components/faq/faq";
import Themes from './components/Themes';

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
      <section className="themes-section container">
        <Themes />
      </section>
      <section className="timeline-section container">
        <Timeline/>
      </section>
      <section className="hosts-section container">hosts: leon</section>
      <section className="faq-section container">
      <Faq />
      </section>
    </div>
  );
}

export default App;
