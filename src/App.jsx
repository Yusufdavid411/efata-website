import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  MapPinned,
  Menu,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';
import {
  faqs,
  navItems,
  quickLinks,
  services,
  stats,
  timeline,
  useCases,
  workflows,
} from './content';

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="EFATA home">
      <span className="logoMark">E</span>
      <span>
        <strong>EFATA</strong>
        <small>Logistics</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Logo />
        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="navCta" href="#contact">
          <span>Get a quote</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobileNav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroMedia" aria-hidden="true" />
      <div className="heroShade" />
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">
            <Truck size={17} aria-hidden="true" />
            Logistics control for growing businesses
          </span>
          <h1>Move every delivery with more control, speed, and trust.</h1>
          <p>
            EFATA gives customers, verified drivers, and fleet operators a clearer way to request,
            assign, track, and confirm truck, tipper, and tanker deliveries from one dependable logistics platform.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">
              <span>Start with EFATA</span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="secondaryButton" href="#platform">
              <span>Preview the platform</span>
              <ChevronRight size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="statRow" aria-label="EFATA launch highlights">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dispatchPanel" aria-label="EFATA dispatch preview">
          <div className="panelTop">
            <span>Dispatch board</span>
            <strong>Today</strong>
          </div>
          <div className="routePreview">
            <div className="routeLine" />
            <span className="pin pinA" />
            <span className="pin pinB" />
            <span className="pin pinC" />
          </div>
          <div className="jobList">
            {[
              ['Truck request', 'Ikeja to Lekki', 'In transit'],
              ['Tipper job', 'Apapa to Ajah', 'Assigning'],
              ['Petrol tanker', 'Oshodi route', 'Confirmed'],
            ].map(([name, meta, status]) => (
              <div className="jobItem" key={name}>
                <span className="jobIcon">
                  <PackageIcon />
                </span>
                <span>
                  <strong>{name}</strong>
                  <small>{meta}</small>
                </span>
                <em>{status}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Package">
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
      <path d="m4.6 8.8 7.4 4.1 7.4-4.1" />
      <path d="M12 13v6.5" />
    </svg>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionIntro">
          <span className="eyebrow dark">What EFATA should promise</span>
          <h2>A logistics website that feels useful before the app is complete.</h2>
          <p>
            The site positions EFATA around the problems customers already understand:
            finding the right vehicle, verifying drivers, tracking larger deliveries, and resolving payment or delivery disputes.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <service.icon size={28} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformPreview() {
  return (
    <section className="platformBand" id="platform">
      <div className="container platformGrid">
        <div>
          <span className="eyebrow">Platform preview</span>
          <h2>One place to see jobs, drivers, vehicles, routes, and delivery exceptions.</h2>
          <p>
            EFATA can launch publicly as a professional logistics brand now, then connect this
            website to the live app when the dispatch and customer modules are ready.
          </p>
          <div className="quickLinkGrid">
            {quickLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <link.icon size={18} aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="appMock" aria-label="EFATA platform screen preview">
          <div className="mockToolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="mockLayout">
            <aside>
              <strong>EFATA</strong>
                {['Overview', 'Requests', 'Drivers', 'Vehicles', 'Payouts'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </aside>
            <main>
              <div className="mockHeader">
                <span>
                  <small>Active vehicle jobs</small>
                  <strong>38</strong>
                </span>
                <span>
                  <small>On-time rate</small>
                  <strong>94%</strong>
                </span>
              </div>
              <div className="mapCard">
                <MapPinned size={34} aria-hidden="true" />
                <span className="mapPulse pulseOne" />
                <span className="mapPulse pulseTwo" />
                <span className="mapPulse pulseThree" />
              </div>
              <div className="mockRows">
                {['Truck: Ikeja pickup', 'Tipper: Ajah drop-off', 'Tanker: Ibadan route'].map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                    <strong>Live</strong>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionIntro compact">
          <span className="eyebrow dark">How it works</span>
          <h2>Simple delivery flow, built for real operations.</h2>
        </div>
        <div className="workflowGrid">
          {workflows.map((item) => (
            <article className="workflowItem" key={item.title}>
              <span className="step">{item.step}</span>
              <item.icon size={25} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="useCaseBand" id="use-cases">
      <div className="container">
        <div className="splitIntro">
          <div>
            <span className="eyebrow">Built for teams that move goods</span>
            <h2>EFATA can speak to multiple customer types without overpromising features.</h2>
          </div>
          <p>
            The website should make potential customers feel that EFATA understands the daily
            pressure of vehicle availability, driver approval, pickup windows, customer calls, and delivery proof.
          </p>
        </div>
        <div className="useCaseGrid">
          {useCases.map((item) => (
            <article key={item.title}>
              <item.icon size={26} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaunchPlan() {
  return (
    <section className="section" id="launch">
      <div className="container launchGrid">
        <div className="quoteBlock">
          <Quote size={36} aria-hidden="true" />
          <h2>Make the domain work now.</h2>
          <p>
            A logistics product does not need to be fully shipped before the public website starts
            doing valuable work. This site can validate demand, collect contacts, and explain EFATA
            in a polished way.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title}>
              <span>{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contactBand" id="contact">
      <div className="container contactGrid">
        <div>
          <span className="eyebrow">Lead capture</span>
          <h2>Collect delivery enquiries while the app is being completed.</h2>
          <p>
            This form is ready for frontend launch. Later, it can be connected to Firebase, a CRM,
            email notifications, or the EFATA app backend.
          </p>
          <div className="contactCards">
            <a href="mailto:hello@efata.ng">
              <Mail size={19} aria-hidden="true" />
              <span>hello@efata.ng</span>
            </a>
            <a href="tel:+2340000000000">
              <Phone size={19} aria-hidden="true" />
              <span>+234 000 000 0000</span>
            </a>
          </div>
        </div>
        <form className="leadForm" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Business email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Delivery need
            <select name="need" defaultValue="business">
              <option value="truck">Truck delivery request</option>
              <option value="tipper">Tipper job</option>
              <option value="tanker">Petrol tanker job</option>
              <option value="fleet">Fleet coordination</option>
              <option value="pilot">Pilot partnership</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us the vehicle you need, what you are moving, pickup point, and destination." />
          </label>
          <button className="primaryButton full" type="submit">
            <span>{submitted ? 'Request noted' : 'Send request'}</span>
            {submitted ? <Check size={19} aria-hidden="true" /> : <Send size={19} aria-hidden="true" />}
          </button>
          {submitted && (
            <p className="formNote" role="status">
              The form interaction is working. Backend delivery can be connected when the receiving
              email or database is confirmed.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faqSection" id="faq">
      <div className="container faqGrid">
        <div>
          <span className="eyebrow dark">FAQ</span>
          <h2>Clear answers for the current launch stage.</h2>
        </div>
        <div className="faqList">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronRight size={19} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <Logo />
        <div className="footerMeta">
          <span>
            <ShieldCheck size={17} aria-hidden="true" />
            Dispatch, tracking, proof, and fleet visibility
          </span>
          <span>
            <Clock3 size={17} aria-hidden="true" />
            Built for launch readiness
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PlatformPreview />
        <Workflow />
        <UseCases />
        <LaunchPlan />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
