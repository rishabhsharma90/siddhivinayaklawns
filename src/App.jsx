import { useEffect, useState } from "react";

const eventCategories = [
  {
    title: "Weddings",
    label: "Main Celebrations",
    description:
      "Wedding planning with decor styling, hospitality flow, dining layouts, and on-ground coordination.",
    image:
      "https://images.unsplash.com/photo-1764286954620-28029fbae9b6?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Haldi",
    label: "Pre-Wedding Ritual",
    description:
      "Bright floral styling, festive layouts, and elegant decor for vibrant haldi functions.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Mehndi",
    label: "Decor-Led Function",
    description:
      "Statement backdrops, lounge seating, and floral details for memorable mehndi celebrations.",
    image:
      "https://images.unsplash.com/photo-1770346279037-89853a3e8c60?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Sagai",
    label: "Engagement Events",
    description:
      "Curated styling, stage design, and premium hospitality for elegant engagement evenings.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Get Togethers",
    label: "Private Functions",
    description:
      "Family celebrations, anniversaries, and intimate events managed with warmth and structure.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Kitty Parties",
    label: "Social Gatherings",
    description:
      "Stylish daytime and evening kitty parties with curated decor, dining setup, and comfortable hosting.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Corporate Events",
    label: "Professional Hosting",
    description:
      "Launches, award nights, and annual functions delivered with polished presentation and efficient execution.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Birthday Parties",
    label: "Milestone Celebrations",
    description:
      "Stylish birthday setups with themed decor, entertainment zones, dining flow, and memorable guest experiences.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Baby Showers",
    label: "Family Celebrations",
    description:
      "Elegant baby shower planning with pastel styling, comfortable seating, catering coordination, and warm hosting details.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
];

const heroBackgrounds = [
  "https://images.unsplash.com/photo-1764286954620-28029fbae9b6?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1745573674471-e057af420757?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1770346279037-89853a3e8c60?auto=format&fit=crop&w=1800&q=80",
];

const marqueeImages = [
  {
    title: "Premium wedding reception",
    image:
      "https://images.unsplash.com/photo-1745573674471-e057af420757?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Grand dining presentation",
    image:
      "https://images.unsplash.com/photo-1745573674471-e057af420757?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Mehndi detail styling",
    image:
      "https://images.unsplash.com/photo-1770346279037-89853a3e8c60?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
  {
    title: "Mandap and floral decor",
    image:
      "https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=1600&q=80",
    position: "center center",
  },
];

const services = [
  {
    title: "Event Concept and Styling",
    description:
      "Theme planning, floral styling, stage design, and visual detailing for every event scale.",
  },
  {
    title: "Venue and Guest Coordination",
    description:
      "Guest seating, dining flow, hospitality support, and vendor coordination handled with care.",
  },
  {
    title: "Catering and Menu Planning",
    description:
      "Curated menus, buffet layouts, live counters, and food presentation designed for every function.",
  },
  {
    title: "Execution and Management",
    description:
      "Timeline control, vendor handling, and event-day supervision for smooth execution.",
  },
  {
    title: "Entertainment and Artist Booking",
    description:
      "DJs, live singers, dhol entries, anchors, and performance acts arranged to match the event mood and audience.",
  },
  {
    title: "Photography and Capture Planning",
    description:
      "Photo and video coverage planning with entry moments, family shots, decor highlights, and reel-friendly experiences in focus.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Share your event type, venue, guest count, date, and vision with our team.",
  },
  {
    step: "02",
    title: "Planning and Quote",
    description:
      "We prepare a tailored quote with decor direction and service coverage.",
  },
  {
    step: "03",
    title: "Execution Day",
    description:
      "We manage the event from setup to closing so hosts and guests can enjoy the celebration.",
  },
];

const contactOptions = [
  {
    title: "Booking Enquiries",
    text: "For wedding bookings, private functions, and corporate events, reach out for availability and planning support.",
    action: "Get Quote",
  },
  {
    title: "Planning Support",
    text: "Discuss decor, catering, guest count, venue planning, and service coverage with our event team.",
    action: "Enquire Now",
  },
  {
    title: "Event Consultation",
    text: "Schedule a conversation for requirement sharing, event flow discussion, and tailored planning guidance.",
    action: "Contact Team",
  },
];

const trustPoints = [
  "Weddings, pre-wedding functions, kitty parties, private celebrations, and corporate events",
  "Decor, catering, hospitality, and venue execution under one team",
  "Fast quote and enquiry support",
];

const stats = [
  { value: "300+", label: "Events managed" },
  { value: "4.9/5", label: "Client satisfaction" },
  { value: "24/7", label: "Planning support" },
];

const heroTitle = "Elegant event planning for weddings, celebrations, and corporate occasions.";

const imageFallback =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  eventType: "Weddings",
  guests: "",
  date: "",
  message: "",
};

function submitEnquiry(payload) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        success: true,
        reference: `GE-${Date.now().toString().slice(-6)}`,
        payload,
      });
    }, 700);
  });
}

function App() {
  const [formMode, setFormMode] = useState("quote");
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroBackgrounds.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const formTitle =
    formMode === "quote" ? "Request a Quote" : "Enquire About Your Event";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await submitEnquiry({
        ...formData,
        requestType: formMode,
      });

      setStatus({
        type: "success",
        message: `${formMode === "quote" ? "Quote request" : "Enquiry"} submitted successfully. Reference: ${result.reference}`,
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToEnquiry = (mode, eventType) => {
    setFormMode(mode);
    if (eventType) {
      setFormData((current) => ({ ...current, eventType }));
    }
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      return;
    }

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = imageFallback;
  };

  const marqueeItems = [...marqueeImages, ...marqueeImages];

  return (
    <div className="site-shell">
      <header className="hero-section">
        <div className="hero-backgrounds" aria-hidden="true">
          {heroBackgrounds.map((image, index) => (
            <div
              key={image}
              className={index === activeHeroImage ? "hero-background-slide active" : "hero-background-slide"}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">GE</span>
            <div>
              <p>Gaurang Events</p>
              <span>Indian event management for weddings, celebrations, and corporate functions</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#events">Events</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#enquiry">Enquiry</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="section-chip">Gaurang Events</span>
            <h1 className="hero-title">{heroTitle}</h1>
            <p>
              We design and manage weddings, haldi, mehndi, sagai, get togethers, kitty parties,
              and corporate events with refined styling and smooth coordination.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => scrollToEnquiry("quote")}>
                Get Quote
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={() => scrollToEnquiry("enquiry")}
              >
                Enquire Now
              </button>
            </div>

            <div className="trust-list">
              {trustPoints.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-showcase">
          <article className="hero-feature hero-feature-main">
            <img
              src="https://images.unsplash.com/photo-1745573674471-e057af420757?auto=format&fit=crop&w=1800&q=80"
              alt="Indian event celebration setup"
              onError={handleImageError}
              style={{ objectPosition: "center center" }}
            />
            <div className="hero-overlay">
              <span>Featured Experience</span>
              <strong>Reception styling with floral stage design, ambient lighting, and premium hospitality flow</strong>
            </div>
          </article>

          <article className="hero-feature hero-feature-side">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80"
              alt="Family function event"
              onError={handleImageError}
              style={{ objectPosition: "center center" }}
            />
          </article>

          <article className="hero-feature hero-feature-side">
            <img
              src="https://images.unsplash.com/photo-1770346279037-89853a3e8c60?auto=format&fit=crop&w=1600&q=80"
              alt="Wedding reception styling"
              onError={handleImageError}
              style={{ objectPosition: "center center" }}
            />
          </article>

          <div className="stats-strip">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="page-flow">
        <section className="section-block section-intro">
          <div className="section-head">
            <div className="section-copy-stack">
              <span className="section-chip">Brand Presentation</span>
              <h2>A premium event website designed to look polished and feel easy to explore.</h2>
              <p>
                A cleaner structure, stronger visuals, and a direct path to enquiry help visitors
                understand the brand quickly.
              </p>
            </div>
          </div>

          <div className="marquee-window">
            <div className="marquee-row">
              {marqueeItems.map((item, index) => (
                <article className="marquee-card" key={`${item.title}-${index}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={handleImageError}
                    style={{ objectPosition: item.position }}
                  />
                  <div className="marquee-caption">{item.title}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="events">
          <div className="section-head">
            <div className="section-copy-stack">
              <span className="section-chip">Event Categories</span>
              <h2>Event experiences curated for weddings, private celebrations, and corporate occasions.</h2>
              <p>
                Each category highlights the style, service support, and event experience available.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            {eventCategories.map((eventItem) => (
              <article className="event-card" key={eventItem.title}>
                <div className="event-image">
                  <img
                    src={eventItem.image}
                    alt={eventItem.title}
                    onError={handleImageError}
                    style={{ objectPosition: eventItem.position }}
                  />
                </div>
                <div className="event-content">
                  <span className="mini-chip">{eventItem.label}</span>
                  <h3>{eventItem.title}</h3>
                  <p>{eventItem.description}</p>
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => scrollToEnquiry("quote", eventItem.title)}
                  >
                    Request quote
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-layout" id="services">
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=1800&q=80"
              alt="Event decor and styling"
              onError={handleImageError}
              style={{ objectPosition: "center center" }}
            />
          </div>

          <div className="split-copy">
            <span className="section-chip">Services</span>
            <h2>Full-service event planning covering decor, catering, hospitality, and execution.</h2>
            <p>
              Everything is managed under one team so your event feels polished, organised, and guest-ready.
            </p>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="process">
          <div className="section-head">
            <div className="section-copy-stack">
              <span className="section-chip">Our Process</span>
              <h2>A simple planning journey from first conversation to final celebration.</h2>
              <p>
                We keep every step clear so clients always know what happens next.
              </p>
            </div>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <article className="process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block enquiry-layout" id="enquiry">
          <div className="enquiry-copy">
              <span className="section-chip">Get Quote / Enquire Now</span>
              <h2>{formTitle}</h2>
              <p>
              Share your event type, date, guest count, venue, and service requirements. We will
              review the brief and get back with the right next step.
              </p>

            <div className="mode-switch">
              <button
                type="button"
                className={formMode === "quote" ? "mode-button active" : "mode-button"}
                onClick={() => setFormMode("quote")}
              >
                Get Quote
              </button>
              <button
                type="button"
                className={formMode === "enquiry" ? "mode-button active" : "mode-button"}
                onClick={() => setFormMode("enquiry")}
              >
                Enquire Now
              </button>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Full Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                Event Type
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                  {eventCategories.map((item) => (
                    <option key={item.title} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Guest Count
                <input
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Approximate guest count"
                />
              </label>
              <label>
                Event Date
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
              </label>
            </div>

            <label>
              Event Requirement
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share venue details, decor preferences, budget range, timing, or any special requirement"
                rows="5"
              />
            </label>

            <button type="submit" className="primary-button full-width" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : formMode === "quote" ? "Request Quote" : "Send Enquiry"}
            </button>

            {status.message ? (
              <p className={status.type === "success" ? "status success" : "status error"}>
                {status.message}
              </p>
            ) : null}
          </form>
        </section>

        <section className="section-block" id="contact">
          <div className="section-head">
            <div className="section-copy-stack">
              <span className="section-chip">Contact Us</span>
              <h2>Connect with Gaurang Events for bookings, planning, and event discussions.</h2>
              <p>
                Whether you are planning a wedding, corporate event, kitty party, or private
                celebration, our team is ready to guide you with the right next step.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            {contactOptions.map((item) => (
              <article className="contact-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button
                  type="button"
                  className="text-button"
                  onClick={() => scrollToEnquiry(item.action === "Get Quote" ? "quote" : "enquiry")}
                >
                  {item.action}
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Gaurang Events</strong>
          <p>Premium event planning and management for weddings, celebrations, and corporate functions.</p>
        </div>
        <div className="footer-links">
          <a href="#events">Events</a>
          <a href="#services">Services</a>
          <a href="#enquiry">Enquiry</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
