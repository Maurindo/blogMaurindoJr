import "./App.css";
import Header from "./components/header/index.js";
import Header2 from "./components/header2/index.js";
import ExtruturaCorpo from "./components/extruturaCorpo/extruturaCorpo.js";
import Carrossel from "./components/carrosel/index.js";
function App() {
  return (
    <div className=".container">
      <Header />
      <Header2 />
      <Carrossel />
      <ExtruturaCorpo />
    </div>
  );
}

export default App;
