import Header from "./components/Header";
import Footer from "./components/Footer";
import Secciones from "./components/Secciones";
import { useState } from "react";
import Datos from "./components/Datos/Datos";

function App() {
  const [section, setSection] = useState("");
  return (
    <div className="App">
      <Header />
      <main>
        <Secciones setSection={setSection} />
        {section === "datos" && <Datos />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
