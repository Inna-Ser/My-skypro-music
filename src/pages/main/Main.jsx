import { useEffect, useState } from "react";
import { Navigation } from "../../components/navigator/Navigator";
import {Centerblock} from "../../components/centerblock/Centerblock";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Audioplayer } from "../../components/audioplayer/Audioplayer";



export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main className="main">
        <Navigation />
        <Centerblock isLoading={isLoading} />
        <Sidebar isLoading={isLoading} />
      </main>
      <Audioplayer />
      <footer className="footer"></footer>
    </div>
  );
};
