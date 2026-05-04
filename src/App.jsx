import './App.css'

const launchNotes = [
  'Registered company preparing official launch',
  'Electronics repair and refurbishment focus',
  'Full service details and catalog coming soon',
]

const navItems = ['Home', 'Services', 'Launch Info', 'Contact']

const previewCategories = [
  {
    title: 'Laptop Repair',
    text: 'Diagnostics, maintenance, and refurbishment details will be listed after launch.',
    icon: 'L',
  },
  {
    title: 'Phone Repair',
    text: 'Service scope, turnaround estimates, and inquiry options are coming soon.',
    icon: 'P',
  },
  {
    title: 'Refurbished Devices',
    text: 'Future catalog pages will go live once stock and verification workflows are ready.',
    icon: 'R',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="top-bar" aria-label="Announcement bar">
        <span><strong className="company-mark">Tech3a.com</strong> — official website launching soon</span>
      </div>

      <header className="store-header">
        <strong className="brand-name">Tech3a.com</strong>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <label className="search-shell" aria-label="Search preview">
            <span className="tool-icon">S</span>
            <input type="search" placeholder="Search services" />
          </label>
        </div>
      </header>

      <main className="launch-layout">
        <section className="hero-card" id="home">
          <div className="hero-copy-block">
            <p className="eyebrow">Launching Soon</p>
            <h1><span className="company-mark">Tech3a.com</span> is launching soon.</h1>
            <p className="hero-text">
              Newly registered electronics repair and refurbishment company. Service pages and product
              catalog will be published after launch.
            </p>
            <div className="hero-actions">
              <a href="#launch-info" className="secondary-link">View launch details</a>
            </div>
          </div>

          <aside className="hero-side-card">
            <p className="section-tag">Company details</p>
            <h2>Business profile</h2>
            <dl className="detail-list compact-detail-list">
              <div>
                <dt>Company</dt>
                <dd>Tech3a.com</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Launching soon</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>support@tech3a.com</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="launch-strip" aria-label="Launch details">
          {launchNotes.map((point) => (
            <div key={point}>
              <span>{point}</span>
            </div>
          ))}
        </section>

        <section className="category-preview" id="services">
          <div className="section-heading-row">
            <div>
              <p className="section-tag">Services</p>
              <h2>Planned service categories</h2>
            </div>
            <p className="section-supporting-text">
              These categories will go live once Tech3a.com operations begin.
            </p>
          </div>

          <div className="category-grid">
            {previewCategories.map((category) => (
              <article key={category.title} className="category-card">
                <div className="category-visual" aria-hidden="true">
                  <span className="category-icon">{category.icon}</span>
                  <div className="visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <p className="category-label">Coming soon</p>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="info-grid" id="launch-info">
          <article className="panel panel-accent">
            <p className="section-tag">Company profile</p>
            <h2>Registered and in setup mode.</h2>
            <p>
              Tech3a.com is preparing its public ecommerce and service website. This page is intentionally
              minimal until operations begin.
            </p>
          </article>

          <article className="panel panel-dark">
            <p className="section-tag">Vision</p>
            <p className="plain-copy">
              Build a credible technology company focused on extending the life of electronics through
              repair, refurbishment, and responsible service standards.
            </p>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-tag">Inquiry form</p>
            <h2>Leave your contact details for the official launch.</h2>
            <p>
              Starter form layout for inquiries. Not connected to a backend yet.
            </p>
          </div>

          <form className="contact-card inquiry-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="Tell us what you would like to know"></textarea>
            </label>
            <button type="submit" className="primary-button">Submit inquiry</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
