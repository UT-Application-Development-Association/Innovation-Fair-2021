// import logo from './assets/images/logo.svg';
import './styles/Style.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header url="https://www.google.com" />
      </header>
      <section className="sidebar-section">sidebar</section>
      <section className="announcement-section">announcement</section>
      <section className="intro-section">intro</section>
      <section className="themes-section">themes</section>
      <section className="timeline-section">timeline</section>
      <section className="hosts-section">hosts</section>
      <section className="faq-section">FAQ</section>
    </div>
  );
}

export default App;
