export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="J.R. Corvane home">
          <span>J.R.</span> Corvane
        </a>
        <nav aria-label="Main navigation">
          <a href="#novel">The novel</a>
          <a href="#dispatches">Dispatches</a>
          <a href="#author">The author</a>
        </nav>
        <a className="seal" href="#dispatches" aria-label="Join the inner circle">C</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Book one of The Sundering Bloodlines</p>
          <h1>The bond was forged.<br /><em>The storm remembers.</em></h1>
          <p className="lede">
            An ancient power. A world split at its foundations. Enter the storm-lashed realm of
            <i> Blood of the Bound</i>, the forthcoming epic fantasy debut from J.R. Corvane.
          </p>
          <div className="signup" id="dispatches">
            <div className="ml-embedded" data-form="5t5HRQ" />
          </div>
          <p className="privacy">Rare dispatches from beyond the veil. No clutter. No broken oaths.</p>
        </div>

        <div className="book-stage" id="novel">
          <div className="storm-beam" aria-hidden="true" />
          <div className="book-shadow" aria-hidden="true" />
          <img src="/blood-of-the-bound-cover.png" alt="Cover of Blood of the Bound by J.R. Corvane" />
          <p><span>The Sundering Bloodlines · Book One</span> Currently in edits</p>
        </div>

        <aside className="codex" aria-label="Book details">
          <p className="vertical">The Sundering Bloodlines · Book I</p>
          <div className="codex-note">
            <span>01</span>
            <h2>The Bound are nearly revealed.</h2>
            <p>A sweeping epic of ancient magic, divided loyalties, and the power buried beneath a broken world.</p>
          </div>
        </aside>
      </section>

      <section className="author" id="author">
        <p className="eyebrow"><span /> Behind the veil</p>
        <h2>J.R. Corvane writes epic fantasy about the oaths that bind us—and what awakens when they break.</h2>
        <p><i>Blood of the Bound</i> begins <strong>The Sundering Bloodlines</strong>. More from the series is coming as the novel moves through edits.</p>
      </section>
    </main>
  );
}
