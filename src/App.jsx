import "./App.css";
import { Navigation } from "./components/navigator/Navigator";
import { Audioplayer } from "./components/audioplayer/Audioplayer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Centerblock } from "./components/centerblock/Centerblock";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <Centerblock />
          <Sidebar />
        </main>
        <Audioplayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
