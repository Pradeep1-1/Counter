import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const themeName = isDark ? 'Dark' : 'Light';

  return (
    <main className={`app-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Counter App home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Counter<span className="brand-light">App</span></span>
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsDark((current) => !current)}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <span className="toggle-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
          <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
        </button>
      </header>

      <section className="content" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR DAILY TOOL</div>
          <h1>Counter <span>App</span></h1>
          <p>Manage your count with ease</p>
        </div>

        <section className="counter-card" aria-label="Counter controls">
          <div className="card-topline">
            <div>
              <p className="card-kicker">CURRENT COUNT</p>
              <p className="card-caption">Your number, at a glance.</p>
            </div>
            <div className="live-pill"><span /> LIVE</div>
          </div>

          <div className="count-display" aria-live="polite" aria-atomic="true">
            <span className="count-value">{count}</span>
          </div>

          <div className="controls" aria-label="Adjust counter">
            <button className="control-button decrement" type="button" onClick={() => setCount((value) => value - 1)} aria-label="Decrement counter">
              <span aria-hidden="true">−</span><span className="button-label">Decrease</span>
            </button>
            <button className="control-button increment" type="button" onClick={() => setCount((value) => value + 1)} aria-label="Increment counter">
              <span aria-hidden="true">+</span><span className="button-label">Increase</span>
            </button>
          </div>

          <div className="card-divider" />
          <div className="card-footer">
            <div className="theme-status"><span className="status-icon" aria-hidden="true">{isDark ? '◐' : '◑'}</span><span>Appearance</span><strong>{themeName} mode</strong></div>
            <button className="reset-button" type="button" onClick={() => setCount(0)}>
              <span aria-hidden="true">↺</span> Reset count
            </button>
          </div>
        </section>
        <p className="helper-text">Use the controls to adjust your count. There are no limits.</p>
      </section>

      <footer className="page-footer"><span>Simple by design.</span><span className="footer-separator">·</span><span>Ready when you are.</span></footer>
    </main>
  );
}

export default App;
