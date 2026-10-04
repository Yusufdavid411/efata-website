import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  PackageOpen,
  Send,
  Weight,
  X,
} from 'lucide-react';
import {
  faqs,
  navItems,
  operatingStandards,
  processSteps,
  serviceLines,
  vehicles,
} from './content';

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="EFATA Logistics home">
      <img src="/images/efata-mark.png" alt="" />
      <span className="logoType">
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
        <a className="navCta" href="#request">
          Request a vehicle
          <ArrowRight size={17} aria-hidden="true" />
        </a>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#request" onClick={() => setOpen(false)}>
            Request a vehicle
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroMedia" aria-hidden="true" />
      <div className="heroShade" aria-hidden="true" />
      <div className="container heroLayout">
        <div className="heroCopy">
          <div className="vehicleLine" aria-label="Available vehicle categories">
            <span>Truck</span>
            <span>Tipper</span>
            <span>Petrol tanker</span>
          </div>
          <h1>Commercial vehicle logistics, coordinated end to end.</h1>
          <p>
            EFATA arranges trucks, tippers, and petrol tankers for business deliveries,
            construction haulage, fuel movement, and recurring routes. From vehicle matching to
            delivery confirmation, one dispatch team keeps the job clear.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#request">
              Request a vehicle
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="textButton" href="#vehicles">
              Explore vehicle options
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="requestGuide" aria-label="Details needed for a vehicle request">
          <div className="guideHeading">
            <span>Start a trip request</span>
            <strong>Four details</strong>
          </div>
          <ul>
            <li>
              <PackageOpen size={20} aria-hidden="true" />
              <span>
                <small>Load</small>
                What is moving
              </span>
            </li>
            <li>
              <MapPin size={20} aria-hidden="true" />
              <span>
                <small>Route</small>
                Pickup and destination
              </span>
            </li>
            <li>
              <Weight size={20} aria-hidden="true" />
              <span>
                <small>Size</small>
                Quantity or estimated weight
              </span>
            </li>
            <li>
              <CalendarDays size={20} aria-hidden="true" />
              <span>
                <small>Timing</small>
                Preferred pickup date
              </span>
            </li>
          </ul>
          <a href="#request">
            Send trip details
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </aside>
      </div>
      <div className="serviceRail">
        <div className="container railInner">
          <span>Vehicle matched to the load</span>
          <span>Driver and plate details before pickup</span>
          <span>Updates through delivery</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section servicesSection" id="services">
      <div className="container">
        <div className="sectionHeading splitHeading">
          <div>
            <span className="eyebrow">What we move</span>
            <h2>Vehicle-based logistics for serious commercial work.</h2>
          </div>
          <p>
            Every request starts with the cargo and route. EFATA then coordinates the suitable
            vehicle, driver information, pickup window, and delivery handover.
          </p>
        </div>
        <div className="serviceGrid">
          {serviceLines.map((service) => (
            <article className="serviceItem" key={service.title}>
              <span className="iconBox">
                <service.icon size={24} aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  const [activeId, setActiveId] = useState(vehicles[0].id);
  const activeVehicle = vehicles.find((vehicle) => vehicle.id === activeId) ?? vehicles[0];

  return (
    <section className="vehicleBand" id="vehicles">
      <div className="container vehicleLayout">
        <div className="vehicleIntro">
          <span className="eyebrow light">Our vehicle categories</span>
          <h2>Choose around the load, not guesswork.</h2>
          <p>
            Select a category to see where it fits. Final vehicle capacity and configuration are
            confirmed against the actual trip details.
          </p>
          <div className="vehicleTabs" role="tablist" aria-label="Vehicle categories">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                type="button"
                role="tab"
                aria-selected={activeVehicle.id === vehicle.id}
                className={activeVehicle.id === vehicle.id ? 'active' : ''}
                onClick={() => setActiveId(vehicle.id)}
              >
                <vehicle.icon size={19} aria-hidden="true" />
                {vehicle.name}
              </button>
            ))}
          </div>
        </div>

        <div className="vehicleDetail" role="tabpanel">
          <div className="vehicleTitle">
            <span className="vehicleIcon">
              <activeVehicle.icon size={32} aria-hidden="true" />
            </span>
            <div>
              <small>{activeVehicle.label}</small>
              <h3>{activeVehicle.name}</h3>
            </div>
          </div>
          <p className="vehicleDescription">{activeVehicle.description}</p>
          <div className="bestFor">
            <span>Suitable for</span>
            <ul>
              {activeVehicle.suitableFor.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="dispatchNote">
            <strong>For an accurate quote</strong>
            <p>{activeVehicle.dispatchNote}</p>
          </div>
          <a className="inlineLink" href="#request">
            Request this vehicle
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="section standardsSection">
      <div className="container standardsLayout">
        <div className="standardsCopy">
          <span className="eyebrow">The EFATA standard</span>
          <h2>Clear information at every handoff.</h2>
          <p>
            Heavy-vehicle logistics becomes expensive when the details are scattered. EFATA keeps
            the request, assignment, trip communication, and delivery status together.
          </p>
          <div className="routeStrip" aria-label="Trip status sequence">
            <span>Request received</span>
            <ChevronRight size={17} aria-hidden="true" />
            <span>Vehicle assigned</span>
            <ChevronRight size={17} aria-hidden="true" />
            <span>In transit</span>
            <ChevronRight size={17} aria-hidden="true" />
            <span>Delivered</span>
          </div>
        </div>
        <div className="standardsList">
          {operatingStandards.map((item) => (
            <article key={item.title}>
              <item.icon size={22} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="processBand" id="process">
      <div className="container">
        <div className="sectionHeading processHeading">
          <span className="eyebrow light">How a trip works</span>
          <h2>From request to delivery in four clear steps.</h2>
        </div>
        <div className="processGrid">
          {processSteps.map((item) => (
            <article key={item.title}>
              <span className="stepNumber">{item.step}</span>
              <item.icon size={23} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `EFATA vehicle request: ${form.get('vehicle')}`;
    const body = [
      `Name: ${form.get('name')}`,
      `Business: ${form.get('business') || 'Not provided'}`,
      `Phone: ${form.get('phone')}`,
      `Vehicle: ${form.get('vehicle')}`,
      `Pickup: ${form.get('pickup')}`,
      `Destination: ${form.get('destination')}`,
      `Preferred date: ${form.get('date') || 'Flexible'}`,
      '',
      'Load details:',
      form.get('load'),
    ].join('\n');

    setPrepared(true);
    window.location.href = `mailto:hello@efata.ng?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="requestSection" id="request">
      <div className="container requestLayout">
        <div className="requestCopy">
          <span className="eyebrow light">Request a vehicle</span>
          <h2>Tell dispatch what needs to move.</h2>
          <p>
            Share the trip details below. Your email app will open with a complete request ready to
            send to EFATA.
          </p>
          <a href="mailto:hello@efata.ng" className="emailLink">
            <Mail size={18} aria-hidden="true" />
            hello@efata.ng
          </a>
          <div className="requestPromise">
            <strong>Include as much detail as possible</strong>
            <span>Load type and quantity</span>
            <span>Pickup and receiving contacts</span>
            <span>Site access or loading restrictions</span>
          </div>
        </div>

        <form className="requestForm" onSubmit={handleSubmit}>
          <div className="fieldPair">
            <label>
              Full name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Business name
              <input name="business" type="text" autoComplete="organization" />
            </label>
          </div>
          <div className="fieldPair">
            <label>
              Phone number
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label>
              Vehicle type
              <select name="vehicle" defaultValue="Truck">
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.name}>
                    {vehicle.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="fieldPair">
            <label>
              Pickup location
              <input name="pickup" type="text" required />
            </label>
            <label>
              Destination
              <input name="destination" type="text" required />
            </label>
          </div>
          <label>
            Preferred pickup date
            <input name="date" type="date" />
          </label>
          <label>
            Load details
            <textarea
              name="load"
              placeholder="What is moving? Include quantity, estimated weight, and any loading instructions."
              required
            />
          </label>
          <button className="formButton" type="submit">
            Prepare request email
            <Send size={18} aria-hidden="true" />
          </button>
          {prepared && (
            <p className="formStatus" role="status">
              Your email app has been opened with the trip details. Send the email to reach dispatch.
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
      <div className="container faqLayout">
        <div className="faqHeading">
          <span className="eyebrow">Before you book</span>
          <h2>Practical answers about EFATA trips.</h2>
          <p>For route-specific questions, send the trip details and dispatch will respond directly.</p>
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
      <div className="container footerTop">
        <Logo />
        <p>Truck, tipper, and petrol tanker logistics for commercial movement.</p>
        <a href="#request">
          Request a vehicle
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} EFATA Logistics</span>
        <span>Dispatch with clarity.</span>
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
        <Vehicles />
        <Standards />
        <Process />
        <RequestForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
