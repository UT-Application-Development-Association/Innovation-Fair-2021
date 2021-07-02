// import logo from './assets/images/logo.svg';
import './styles/Style.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="header">
      steph
        <Header url="https://www.google.com" />
      </header>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
      <section className="intro-section">intro: steph</section>
      <section className="themes-section">themes: fancy</section>
      <section className="timeline-section">timeline: leon</section>
      <section className="hosts-section">hosts: leon</section>
      <section className="faq-section">FAQ: fancy https://getbootstrap.com/docs/5.0/components/accordion/</section>
    </div>
  );
}

export default App;
