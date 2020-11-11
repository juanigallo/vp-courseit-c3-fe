import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Title value="Propuesta de valor" />
      <div className="vpContainer">
        <Card
          image="https://courseit.io/static/vp-online.svg"
          title="Cursa como quieras"
          desc="Tenemos propuestas presenciales, 100% remotas o mixtas."
        />
        <Card
          image="https://courseit.io/static/vp-play.svg"
          title="Plataforma interactiva"
          desc="Poné a prueba tu conocimiento o practicá con las distintas actividades que te proponemos."
        />
        <Card
          image="https://courseit.io/static/vp-mentorship.svg"
          title="Te acompañamos"
          desc="Un equipo de trabajo especializado te acompaña durante toda la cursada"
        />
      </div>
    </>
  );
}

export default App;
