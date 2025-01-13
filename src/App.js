import "./App.css";
import Header from "./components/header/index.js";
import Header2 from "./components/header2/index.js";
import ExtruturaCorpo from "./components/extruturaCorpo/extruturaCorpo.js";
function App() {
  return (
    <div className=".container">
      <Header />
      <Header2 />
      <ExtruturaCorpo />
    </div>
  );
}

export default App;
