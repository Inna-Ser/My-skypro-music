import "./App.css";
import { Navigation } from "./components/navigator/Navigator";
import { Audioplayer } from "./components/audioplayer/Audioplayer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Centerblock } from "./components/centerblock/Centerblock";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <Centerblock isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </main>
        <Audioplayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
