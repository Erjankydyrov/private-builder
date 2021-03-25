import "./App.css";
import BunsBuilder from "./components/BunsBuilder/BunsBuilder";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Dango-builder by Erjan Kydyrov</h1>
        <BunsBuilder />
      </Layout>
    </div>
  );
}

export default App;
