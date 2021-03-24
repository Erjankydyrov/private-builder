import "./App.css";
import DangoBuilder from "./components/DangoBuilder/DangoBuilder";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Dango-builder by Erjan Kydyrov</h1>
        <DangoBuilder />
      </Layout>
    </div>
  );
}

export default App;
