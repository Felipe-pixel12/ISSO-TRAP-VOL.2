import "./App.css";
import { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="app">
      <div className="grain"></div>

      {/* HEADER */}
      <div className="header">
        <span className="back">←</span>
        <span className="title">ISSO É TRAP VOL.2</span>
      </div>

      {/* CAPA */}
      <div className="cover">
        <img
          src="./public/isso é trap.jpg"
          alt="cover"
        />
      </div>

      {/* INFO */}
      <div className="info">
        <div>
          <h2>BUG NA MATRIX</h2>
          <p>Brandão85</p>
        </div>
        <span className="Curtir">♡</span>
      </div>

      {/* PROGRESS */}
      <div className="progress-container">
        <span className="time">1:48</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <span className="time">3:54</span>
      </div>

      {/* CONTROLES */}
      <div className="controls">
        <button>⟲</button>
        <button>⏮</button>

        <button className="play">⏸</button>

        <button>⏭</button>
        <button>🔀</button>
      </div>
    </div>
  );
}