import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../styles/scroll-animations.css';

const navItems = [
  { name: 'masthead' },
  { name: 'tiles' },
  { name: 'text' },
  { name: 'two-columns' },
  { name: 'subscribe' },
];

const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, tenetur deserunt! Obcaecati eius aut, facere porro amet atque laborum eos, numquam asperiores minus accusantium et tempore repellat voluptatum natus corrupti?';

export default function ScrollAnimations() {
  const [burgerChecked, setBurgerChecked] = useState(false);

  return (
    <div className="scroll-animations-page">
      <header>
        <label className="menu" htmlFor="burger">
          <input
            id="burger"
            type="checkbox"
            checked={burgerChecked}
            onChange={(e) => setBurgerChecked(e.target.checked)}
          />
          <svg className="burger" viewBox="0 0 100 100" width="64">
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </label>

        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name}`}
                  title={item.name}
                  style={{
                    ['--an' as any]: `--${item.name}`,
                    ['--at' as any]: `--${item.name}-s`,
                  }}
                  onClick={() => setBurgerChecked(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Masthead Section */}
        <section
          id={navItems[0].name}
          style={{ ['--name' as any]: `--${navItems[0].name}-s` }}
        >
          <div className="flying-squares">
            {[1, 2, 3].map((i) => (
              <div key={i} className="square" />
            ))}
          </div>
          <div className="masthead">
            <h1>{navItems[0].name}</h1>
            <p>Press on the heart if you are also a CSS Developer 😃.</p>
          </div>
        </section>

        {/* Tiles Section */}
        <section
          id={navItems[1].name}
          style={{ ['--name' as any]: `--${navItems[1].name}-s` }}
        >
          <div className="tile-section">
            <div className="tile-container">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="tile" />
              ))}
            </div>
          </div>
        </section>

        {/* Text Section */}
        <section
          id={navItems[2].name}
          style={{ ['--name' as any]: `--${navItems[2].name}-s` }}
        >
          <div className="read">
            <div>Reading progress</div>
          </div>
          <div className="text">
            <h2>Smooth appearance of text when scrolling</h2>
            {Array.from({ length: 15 }).map((_, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>

        {/* Two Columns Section */}
        <section
          id={navItems[3].name}
          style={{ ['--name' as any]: `--${navItems[3].name}-s` }}
        >
          <div className="two-columns">
            <h2>Picture arrived on the right</h2>
            <div className="content">
              <div className="cards">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="card">
                    <h3 className="title">Card title</h3>
                    <div className="subtitle">Subtitle</div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="preview">
                <div className="img" />
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section
          id={navItems[4].name}
          style={{ ['--name' as any]: `--${navItems[4].name}-s` }}
        >
          <div className="subscribe">
            <h2>Subscribe now</h2>
            <p>{text}</p>
            <form action="" method="POST">
              <input type="email" placeholder="Enter your email" />
              <button className="btn" type="submit">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </section>

        <div className="scroll">
          <span>scroll</span>
          <div className="divider" />
          <span>down</span>
        </div>
      </main>

      <footer>
        <a
          href="https://twitter.com/intent/follow?screen_name=andrejsharapov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>X</span>
        </a>
      </footer>
    </div>
  );
}