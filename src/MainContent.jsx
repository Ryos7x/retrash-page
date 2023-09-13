import imgFondo from "./assets/fondo.png";
import "./MainContent.css";

function MainContent() {
  return (
    <main className="main">
      <section className="main-section">
        <div className="main-texts">
          <h1 className="main-title">Tacho de basura inteligente</h1>
          <p className="main-subtitle">
            Separa la basura reciclable y no reciclable automáticamente
          </p>
          <a href="#" className="main-button">
            VER TACHO
          </a>
        </div>
        <img src={imgFondo} alt="Imagen de Fondo" className="main-image" />
      </section>
    </main>
  );
}

export default MainContent;
