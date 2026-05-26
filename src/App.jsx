import { useState } from "react";
import "./App.css";

const DEV_PASSWORD = "rqstudio2026";

const products = [
  {
    name: "Studio Heavy Tee",
    type: "Screen Printed Cotton Tee",
    price: "AED 180",
    tag: "DROP 01",
  },
  {
    name: "Identity Hoodie",
    type: "Heavyweight Printed Hoodie",
    price: "AED 320",
    tag: "LIMITED",
  },
  {
    name: "Custom Tufted Rug",
    type: "Made-to-Order Textile Piece",
    price: "FROM AED 250",
    tag: "CUSTOM",
  },
];

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [developerMode, setDeveloperMode] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const unlockDeveloperMode = (e) => {
    e.preventDefault();

    if (password === DEV_PASSWORD) {
      setDeveloperMode(true);
      setPasswordOpen(false);
      setPassword("");
      setPasswordError("");
    } else {
      setPasswordError("Wrong password. Try again.");
    }
  };

  if (!developerMode) {
    return (
      <main className="coming-soon-page">
        <div className="coming-top-bar">
          <a
            className="instagram-link"
            href="https://www.instagram.com/mors.v/"
            target="_blank"
            rel="noreferrer"
            aria-label="RQSTUDIO Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <p>RQSTUDIO — SCREEN PRINTING / CLOTHING BRANDING / TUFTING</p>

          <button
            className="developer-login-button"
            onClick={() => setPasswordOpen(true)}
          >
            DEVELOPER
          </button>
        </div>

        <section className="coming-soon-hero">
          <p className="coming-eyebrow">RQSTUDIO</p>
          <h1>COMING SOON</h1>
          <p>
            A screen-printing based clothing and tufting studio creating custom
            pieces, bold textures, and wearable identity.
          </p>

          <div className="coming-tags">
            <span>SCREEN PRINTING</span>
            <span>CLOTHING BRANDING</span>
            <span>TUFTING</span>
          </div>
        </section>

        {passwordOpen && (
          <div className="password-overlay">
            <button
              className="close-password"
              onClick={() => {
                setPasswordOpen(false);
                setPassword("");
                setPasswordError("");
              }}
            >
              CLOSE
            </button>

            <form className="password-box" onSubmit={unlockDeveloperMode}>
              <p className="coming-eyebrow">DEVELOPER ACCESS</p>
              <h2>Enter Password</h2>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />

              {passwordError && <p className="password-error">{passwordError}</p>}

              <button type="submit">ENTER SITE</button>
            </form>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="site">
      <div className="announcement">
        <a
          className="instagram-link"
          href="https://www.instagram.com/mors.v/"
          target="_blank"
          rel="noreferrer"
          aria-label="RQSTUDIO Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <p>RQSTUDIO — DEVELOPER PREVIEW</p>

        <button
          className="developer-login-button"
          onClick={() => setDeveloperMode(false)}
        >
          LOCK
        </button>
      </div>

      <header className="header">
        <button
          className="icon-button"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          SEARCH
        </button>

        <div className="center-header">
          <a href="#home" className="logo">
            RQSTUDIO
          </a>

          <nav className="nav">
            <a href="#home">HOME</a>
            <a href="#drop">DROP 01</a>
            <a href="#shop">SHOP ALL</a>
            <a href="#story">OUR STORY</a>
            <a href="#work">WORK WITH US</a>
          </nav>
        </div>

        <button className="icon-button" aria-label="Cart">
          CART
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PRINT / THREAD / IDENTITY</p>
          <h1>MADE WITH SURFACE, TEXTURE, AND PURPOSE.</h1>
          <p>
            RQSTUDIO creates screen-printed clothing, custom brand pieces, and
            tufted textile work with a clean studio identity.
          </p>
          <a href="#shop" className="text-link">
            SHOP NOW
          </a>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <div className="garment-shape">
              <span>RQ</span>
            </div>
          </div>
        </div>
      </section>

      <section id="drop" className="drop-intro">
        <p className="eyebrow">DROP 01</p>
        <h2>Not just clothing. A studio language printed on fabric.</h2>
      </section>

      <section id="shop" className="shop-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">SHOP ALL</p>
            <h2>Current Pieces</h2>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-media">
                <span>{product.tag}</span>
              </div>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.type}</p>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="story-section">
        <div>
          <p className="eyebrow">OUR STORY</p>
          <h2>
            RQSTUDIO is built for people who want their clothing and space to
            carry identity.
          </h2>
        </div>

        <p>
          The studio combines screen printing, clothing branding, and tufting to
          create custom pieces that feel personal, limited, and intentional.
          Every piece starts with a visual idea and becomes something physical
          through print, fabric, and texture.
        </p>
      </section>

      <section id="work" className="work-section">
        <p className="eyebrow">WORK WITH US</p>
        <h2>Start a custom project.</h2>
        <p>
          Brand uniforms, event shirts, personal drops, logo rugs, and textile
          pieces.
        </p>
        <a href="mailto:hello@rqstudio.com" className="outline-link">
          CONTACT RQSTUDIO
        </a>
      </section>

      {searchOpen && (
        <div className="search-overlay">
          <button className="close-search" onClick={() => setSearchOpen(false)}>
            CLOSE
          </button>

          <div className="search-box">
            <p className="eyebrow">SEARCH RQSTUDIO</p>

            <input
              type="text"
              placeholder="Search hoodies, tees, tufting..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />

            <p className="search-result">
              {searchText
                ? `Searching for: ${searchText}`
                : "Start typing to search the store."}
            </p>
          </div>
        </div>
      )}

      <footer className="footer">
        <span>© 2026 RQSTUDIO</span>
        <span>SCREEN PRINTING / CLOTHING / TUFTING</span>
      </footer>
    </main>
  );
}

export default App;