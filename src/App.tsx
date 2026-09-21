import { useState } from "react";

type Movie = { title: string; image: string };

const movies: Movie[] = [
  { title: "عصابة الماكس", image: "/images/WhatsApp Image 2026-09-20 at 11.58.30 PM (2).jpeg" },
  { title: "الهوى سلطان", image: "/images/WhatsApp Image 2026-09-20 at 11.58.30 PM (1).jpeg" },
  { title: "المشروع X", image: "/images/WhatsApp Image 2026-09-20 at 11.57.59 PM.jpeg" },
  { title: "Graveyard", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM (5).jpeg" },
  { title: "الهامس", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM (4).jpeg" },
  { title: "الحريفة", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM (3).jpeg" },
  { title: "Power", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM.jpeg" },
  { title: "Cargo", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM (2).jpeg" },
  { title: "Extraction", image: "/images/WhatsApp Image 2026-09-20 at 11.57.58 PM (1).jpeg" },
  { title: "The Gray Man", image: "/images/WhatsApp Image 2026-09-20 at 11.57.57 PM (1).jpeg" },
];
function App() {
  const [page, setPage] = useState<"home" | "login">("home");

  if (page === "login") {
    return (
      <div className="login-page">
        <header className="login-header">
          <h1 className="logo" onClick={() => setPage("home")}>
            NETFLIX
          </h1>
        </header>

        <main className="login-box">
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Email or mobile number"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>Sign In</button>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <span>Need help?</span>
          </div>

          <p className="signup-text">
            New to Netflix?{" "}
            <button
              className="link-button"
              onClick={() => setPage("home")}
            >
              Sign up now.
            </button>
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">NETFLIX</h1>

        <div className="nav-right">
          <select>
            <option>English</option>
            <option>العربية</option>
          </select>

          <button onClick={() => setPage("login")}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h2>Endless entertainment starts here.</h2>

          <p>
            Starts at EGP 110. Cancel anytime.

          </p>

          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="email-form">
            <input
              type="email"
              placeholder="Email address"
            />

            <button onClick={() => setPage("login")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="section">
        <h2>Trending Now</h2>

        <div className="movies">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <span>{index + 1}</span>

              <img
                src={movie.image}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section className="section">
        <h2>More Reasons to Join</h2>

        <div className="reasons">
          <div className="reason">
            <h3>Enjoy on your TV</h3>
            <p>
              Watch on Smart TVs, PlayStation, Xbox, Chromecast,
              Apple TV, Blu-ray players and more.
            </p>
          </div>

          <div className="reason">
            <h3>Download your shows to watch offline</h3>
            <p>
              Save your favourites easily and always have something
              to watch.
            </p>
          </div>

          <div className="reason">
            <h3>Watch everywhere</h3>
            <p>
              Stream unlimited movies and TV shows on your phone,
              tablet, laptop and TV.
            </p>
          </div>

          <div className="reason">
            <h3>Create profiles for kids</h3>
            <p>
              Send kids on adventures with their favourite characters
              in a space made just for them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <h2>Frequently Asked Questions</h2>

        <FAQ question="What is Netflix?" />
        <FAQ question="How much does Netflix cost?" />
        <FAQ question="Where can I watch?" />
        <FAQ question="How do I cancel?" />
        <FAQ question="What can I watch on Netflix?" />
        <FAQ question="Is Netflix good for kids?" />
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <p>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className="email-form">
          <input
            type="email"
            placeholder="Email address"
          />

          <button onClick={() => setPage("login")}>
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Questions? Contact us.</p>

        <div className="footer-links">
          <span>FAQ</span>
          <span>Help Center</span>
          <span>Account</span>
          <span>Media Center</span>
          <span>Jobs</span>
          <span>Ways to Watch</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
          <span>Corporate Information</span>
          <span>Contact Us</span>
        </div>

        <select>
          <option>English</option>
        </select>

        <p>Netflix Egypt</p>
      </footer>
    </div>
  );
}

function FAQ({ question }: { question: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq">
      <button onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span>{open ? "×" : "+"}</span>
      </button>

      {open && (
        <p>
          Netflix is a streaming service that offers movies,
          TV shows, documentaries and more.
        </p>
      )}
    </div>
  );
}

export default App;