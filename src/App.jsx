import './App.css'

const menuSections = [
  {
    title: 'Special BAR.B.Q',
    note: 'Straight from the grill',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Smoky barbecue skewers fresh off the grill',
    items: [
      ['Chicken Tikka Chest', '380'],
      ['Chicken Tikka Leg', '330'],
      ['Chicken Malai Tikka', '450'],
      ['Chicken Behari Tikka', '420'],
      ['Chicken Malai Boti', '450'],
      ['Beef Seekh Kabab', '300'],
    ],
  },
  {
    title: 'Roll Items',
    note: 'Big flavour, wrapped up',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'A freshly made chicken wrap with crisp greens',
    items: [
      ['Zinger Roll', '200'],
      ['Zinger Mayo Garlic Roll', '230'],
      ['Chicken Cheese Roll', '230'],
      ['Chicken Chatni Roll', '150'],
      ['Beef Kabab Mayo Garlic Roll', '180'],
      ['Beef Kabab Cheese Roll', '180'],
    ],
  },
  {
    title: 'Burgers',
    note: 'Stacked and seriously juicy',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Juicy double cheeseburger with fresh lettuce',
    items: [
      ['Crispy Zinger Burger', '350'],
      ['Zinger Cheese Burger', '400'],
      ['DBL Daker Zinger', '540'],
      ['Chicken Burger', '300'],
      ['Chicken DBL Burger', '480'],
      ['Beef Cheese Burger', '350'],
    ],
  },
  {
    title: 'Sandwiches',
    note: 'Toasty, cheesy, satisfying',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Grilled sandwiches stacked on a wooden board',
    items: [
      ['Club Sandwich', '350'],
      ['Malai Club Sandwich', '400'],
      ['Chicken Sandwich', '300'],
      ['Chicken Cheese Sandwich', '400'],
      ['BBQ Sandwich', '300'],
      ['Crispy Club Cheese Sandwich', '450'],
    ],
  },
  {
    title: 'Broast & Fries',
    note: 'Crunch you can hear',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Crispy golden fried chicken pieces',
    items: [
      ['Crispy Qtr Broast (Chest)', '500'],
      ['Crispy Qtr Broast (Leg)', '450'],
      ['Masala Spicy Broast', '500'],
      ['Mayo Fries', '160'],
      ['Regular Fries', '120'],
      ['Mayo Fries Large', '200'],
    ],
  },
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function PinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.7" /></svg>
}

function App() {

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shoaibees Restaurant home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-copy"><strong>Shoaibees</strong><small>RESTAURANT</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">Our menu</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Find us</a>
        </nav>
        <a className="header-order" href="tel:+923458020010">Call to order <ArrowIcon /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BBQ & FAST FOOD <span /></p>
          <h1>Good food.<br /><em>Great fire.</em></h1>
          <p className="hero-tagline">A Taste You will Remember</p>
          <p className="hero-description">Smoky off the grill, stacked with flavour, and made to bring everyone to the table.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+923458020010">Order now <ArrowIcon /></a>
            <a className="text-link" href="#menu">Explore the menu <span>↓</span></a>
          </div>
          <div className="hero-footnote"><span className="live-dot" /> Fresh off the grill, every time</div>
        </div>
        <div className="hero-visual" aria-label="Freshly grilled barbecue and burgers">
          <div className="hero-image" />
          <div className="hero-stamp"><span>GOOD FOOD</span><strong>GOOD<br />MOOD</strong><i>✳</i></div>
          <div className="hero-caption"><span>01 / 05</span><span>THE GOOD STUFF STARTS HERE</span></div>
        </div>
        <div className="hero-vertical">MADE WITH FIRE · SERVED WITH LOVE</div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow eyebrow-dark">THE GOOD STUFF</p><h2>Made for <em>cravings.</em></h2></div>
          <p>From the first smoky bite to the last crispy fry, there’s a favourite waiting for you.</p>
        </div>
        <div className="menu-grid">
          {menuSections.map((section, index) => (
            <article className={`menu-card ${index === 0 ? 'menu-card-featured' : ''}`} key={section.title}>
              <div className="menu-card-image">
                <img src={section.image} alt={section.imageAlt} loading="lazy" />
                <span className="menu-index">0{index + 1}</span>
              </div>
              <div className="menu-card-content">
                <div className="menu-card-heading"><div><h3>{section.title}</h3><p>{section.note}</p></div><span className="menu-arrow"><ArrowIcon /></span></div>
                <ul>
                  {section.items.map(([item, price]) => (
                    <li key={item}><span>{item}</span><span className="menu-dots" /><strong>Rs. {price}</strong></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="delivery-section" id="delivery">
        <div className="delivery-image" role="img" aria-label="A feast of freshly prepared fast food" />
        <div className="delivery-copy">
          <p className="eyebrow">YOUR CRAVINGS, DELIVERED</p>
          <h2>Home delivery.<br /><em>Happiness included.</em></h2>
          <p>Good Food, Good Mood. Bring the grill-to-table goodness straight to your door.</p>
          <a className="button button-light" href="tel:+923458020010">Call for delivery <ArrowIcon /></a>
        </div>
        <div className="quality-badge"><span>QUALITY FOOD</span><strong>BEST<br />SERVICE</strong><i>✦ ✦ ✦</i></div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-copy"><strong>Shoaibees</strong><small>RESTAURANT</small></span></a><p>A Taste You will Remember</p></div>
          <div className="footer-contact"><h2>Call for delivery</h2><a href="tel:+923458020010"><span>Farhan Akhtar</span><strong>0345-8020010</strong></a><a href="tel:+923052320179"><span>Rana Shoaib</span><strong>0305-2320179</strong></a></div>
          <div className="footer-address"><h2>Come hungry</h2><p><PinIcon /> Gate # 3, House # R-130,<br />Block - A, Glushen E Millat,<br />Near Al Rehman Biryani.</p><a href="https://maps.google.com/?q=Gate+3+House+R-130+Block+A+Glushen+E+Millat" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Shoaibees Restaurant</span><span>BBQ & FAST FOOD <i>·</i> GOOD FOOD, GOOD MOOD</span></div>
      </footer>
    </main>
  )
}

export default App
