import Script from "next/script";
import CallbackModal from "./components/CallbackModal";

const amenities = [
  { icon: "fa-solid fa-leaf",              label: "Terrace Garden",     benefit: "Relax amidst lush greenery above the city" },
  { icon: "fa-solid fa-champagne-glasses", label: "Party Area",         benefit: "Host memorable celebrations with loved ones" },
  { icon: "fa-solid fa-dumbbell",          label: "Fitness Centre",     benefit: "Stay fit with modern gym equipment daily" },
  { icon: "fa-solid fa-shield-halved",     label: "24/7 Security",      benefit: "Round-the-clock safety for your peace of mind" },
  { icon: "fa-solid fa-square-parking",    label: "Covered Parking",    benefit: "Hassle-free dedicated parking for every flat" },
  { icon: "fa-solid fa-person-swimming",   label: "Swimming Pool",      benefit: "Unwind in a pristine rooftop pool" },
  { icon: "fa-solid fa-child-reaching",    label: "Kids Play Area",     benefit: "Safe outdoor space for children to thrive" },
  { icon: "fa-solid fa-bolt",              label: "EV Charging Point",  benefit: "Future-ready charging for electric vehicles" },
  { icon: "fa-solid fa-people-roof",       label: "Multipurpose Hall",  benefit: "Flexible venue for events and gatherings" },
];

const interiorGallery = [
  { src: "/assets/images/gallery-nrp/g1.jpg",  alt: "Club House" },
  { src: "/assets/images/gallery-nrp/g2.jpg",  alt: "Entrance Lobby" },
  { src: "/assets/images/gallery-nrp/g10.jpg", alt: "Lounge" },
  { src: "/assets/images/gallery-nrp/g11.jpg", alt: "Lounge" },
  { src: "/assets/images/gallery-nrp/g12.jpg", alt: "Party Hall" },
  { src: "/assets/images/gallery-nrp/g13.jpg", alt: "Party Hall" },
  { src: "/assets/images/gallery-nrp/g3.jpg",  alt: "Gym" },
  { src: "/assets/images/gallery-nrp/g4.jpg",  alt: "Gym" },
  { src: "/assets/images/gallery-nrp/g5.jpg",  alt: "Gym" },
  { src: "/assets/images/gallery-nrp/g14.jpg", alt: "Swimming Pool" },
  { src: "/assets/images/gallery-nrp/g6.png",  alt: "Kids Play Area" },
  { src: "/assets/images/gallery-nrp/g7.png",  alt: "Kids Play Area" },
  { src: "/assets/images/gallery-nrp/g8.png",  alt: "Kids Play Area" },
  { src: "/assets/images/gallery-nrp/g9.png",  alt: "Kids Play Area" },
];

const exteriorGallery = [
  { src: "/assets/images/gallery-nrp/g16.jpg", alt: "Aerial Day View" },
  { src: "/assets/images/gallery-nrp/g15.jpg", alt: "Aerial Night View" },
];

const floorplanRows = [
  ["Apartment Type", "3 & 4 BHK"],
  ["Total Units",    "83 Units"],
  ["Plot Area",      "1661 – 2555 sq.ft"],
  ["Starting Price", "₹1.75 Cr Onwards"],
  ["Status",         "Ongoing"],
  ["RERA No.",       "K-RERA/PRJ/ERN/156/2025"],
  ["Location",       "Pathadipalam, Edappally"],
  ["Floors",         "G + 14 Floors"],
];

const testimonialVideos = [
  "https://nationalbuilders.in/wp-content/uploads/2025/08/2.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/3.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/4.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/5.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/06.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/7.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/8.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/0812.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/FInal-Rama-menon-.mp4",
];

export default function HomePage() {
  return (
    <>
      <div id="wrapper" className="nrp-page">
        <div className="float-text show-on-scroll">
          <span><a href="#">Scroll to top</a></span>
        </div>
        <div className="scrollbar-v show-on-scroll" />

        {/* ── Header ── */}
        <header className="transparent header-light header-float">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-inner">
                  <div className="de-flex">
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="/">
                          <img className="logo-main"   src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "60px", width: "auto" }} />
                          <img className="logo-scroll" src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "50px", width: "auto" }} />
                          <img className="logo-mobile" src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "44px", width: "auto" }} />
                        </a>
                      </div>
                    </div>
                    <div className="de-flex-col">
                      <div className="de-flex-col header-col-mid">
                        <ul id="mainmenu">
                          <li><a className="menu-item" href="#">Home</a></li>
                          <li><a className="menu-item" href="#section-about">About</a></li>
                          <li><a className="menu-item" href="#section-amenities">Amenities</a></li>
                          <li><a className="menu-item" href="#section-gallery">Gallery</a></li>
                          <li><a className="menu-item" href="#section-floorplan">Floorplan</a></li>
                          <li><a className="menu-item" href="#section-testimonials">Reviews</a></li>
                          <li><a className="menu-item" href="#section-contact">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="de-flex-col">
                      <a className="btn-main fx-slide" href="#section-contact" data-callback-modal>
                        <span>Request a Callback</span>
                      </a>
                      <div className="menu_side_area">
                        <span id="menu-btn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── 1. Hero ── */}
        <section id="section-hero" className="no-top no-bottom nrp-hero-section" style={{ background: "#1C1428", minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div className="nrp-hero-orb nrp-hero-orb-1" />
          <div className="nrp-hero-orb nrp-hero-orb-2" />
          <div className="container" style={{ paddingTop: "110px", paddingBottom: "60px" }}>
            <div className="row align-items-center g-5">

              {/* Left: text */}
              <div className="col-lg-6 text-light" data-aos="fade-right">
                <div className="nrp-pill mb-3">National Royal Palace</div>
                <h1 className="mb-3 text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15, fontWeight: 700 }}>
                  Premium 3 &amp; 4 BHK<br />Apartments in Kochi
                </h1>
                <p className="mb-4" style={{ fontSize: "1.05rem", maxWidth: "480px", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                  Spacious homes in a prime location with world-class amenities at Pathadipalam, Edappally — where luxury meets lifestyle.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
                  {[
                    ["fa-solid fa-map-pin",              "Pathadipalam, Edappally"],
                    ["fa-solid fa-building",             "G + 14 Floors"],
                    ["fa-solid fa-indian-rupee-sign",    "From ₹1.75 Cr"],
                  ].map(([icon, text]) => (
                    <div key={text} className="nrp-hero-chip" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className={`${icon} id-color`} style={{ fontSize: "0.85rem", flexShrink: 0 }} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "2rem" }}>
                  <a className="btn-main fx-slide" href="#section-contact" data-callback-modal><span>Request a Callback</span></a>
                  <a className="btn-main btn-line fx-slide" href="#section-about"><span>Explore Property</span></a>
                </div>

                <div className="nrp-trust-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {[
                    ["fa-solid fa-star",         "4.8 Rating"],
                    ["fa-solid fa-shield-halved", "RERA Approved"],
                    ["fa-solid fa-users",         "10000+ Families"],
                  ].map(([icon, text]) => (
                    <span key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                      <i className={`${icon} id-color`} style={{ flexShrink: 0 }} />
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: building image */}
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="120">
                <div className="nrp-hero-visual" style={{ position: "relative" }}>
                  <img
                    src="/assets/images/gbp22-opt.jpg"
                    alt="National Royal Palace Exterior"
                    className="w-100"
                    fetchPriority="high"
                    style={{ borderRadius: "20px", objectFit: "cover", maxHeight: "560px", display: "block", boxShadow: "0 40px 90px rgba(0,0,0,0.55)" }}
                  />
                  {/* Floating metric */}
                  <div className="nrp-floating-metric">
                    <strong>G+14</strong>
                    <span>Floors of Luxury</span>
                  </div>
                  {/* RERA glass badge */}
                  <div className="nrp-glass-card" style={{ position: "absolute", bottom: "24px", left: "24px", padding: "10px 18px" }}>
                    <div style={{ fontSize: "0.7rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.07em", color: "#fff", marginBottom: "2px" }}>RERA Approved</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}>K-RERA/PRJ/ERN/156/2025</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. About ── */}
        <section id="section-about">
          <div className="container">

            {/* Stats */}
            <div className="row g-3 mb-5">
              {[
                ["40+",     "Years of Excellence"],
                ["1986",    "Since"],
                ["135+",    "Landmark Projects"],
                ["10,000+", "Happy Families"],
              ].map(([stat, label], i) => (
                <div key={label} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <div className="nrp-stat-card rounded-3 p-4 text-center h-100">
                    <h2 className="id-color mb-1" style={{ fontSize: "1.8rem", fontWeight: 800 }}>{stat}</h2>
                    <p className="mb-0 fs-14 opacity-75">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-5 align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="subtitle mb-2">About Us</div>
                <h2 className="mb-3">Building Dreams with Trust &amp; Quality Since 1986</h2>
                <p style={{ color: "rgba(32,24,40,0.72)", lineHeight: 1.8 }} className="mb-4">
                  National Builders is a leading real estate developer with 135+ landmark projects across Navi Mumbai and Kerala. Our commitment to quality construction, timely delivery, and customer satisfaction has made us a trusted name in premium real estate.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "1.5rem" }}>
                  {[
                    ["fa-solid fa-clock",     "On-Time Delivery",            "We honour every deadline — your dream home, delivered as promised."],
                    ["fa-solid fa-medal",     "Premium Construction Quality", "Superior materials and meticulous craftsmanship in every detail."],
                    ["fa-solid fa-handshake", "Customer-First Approach",      "Transparent dealings and after-sales support you can count on."],
                  ].map(([icon, title, desc]) => (
                    <div key={title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div className="nrp-icon-box rounded-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, flexShrink: 0, color: "#fff", fontSize: "1rem" }}>
                        <i className={icon} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h6 className="mb-1 fw-600">{title}</h6>
                        <p className="mb-0 fs-14 " style={{ color: "rgba(32,24,40,0.65)" }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a className="btn-main fx-slide" href="#section-contact" data-callback-modal><span>Request a Callback</span></a>
              </div>

              <div className="col-lg-7" data-aos="fade-left" data-aos-delay="100">
                <div style={{ position: "relative" }}>
                  <img
                    src="/assets/images/gallery-nrp/g16.jpg"
                    alt="National Royal Palace Aerial View"
                    className="w-100"
                    loading="lazy"
                    style={{ borderRadius: "20px", objectFit: "cover", height: "480px", display: "block", boxShadow: "0 24px 60px rgba(32,24,40,0.18)" }}
                  />
                  {/* Floating stat pill */}
                  <div style={{ position: "absolute", bottom: "24px", right: "24px", background: "rgba(28,20,40,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "14px", padding: "14px 22px", color: "#fff", textAlign: "center" }}>
                    <div className="id-color fw-800" style={{ fontSize: "1.6rem", lineHeight: 1 }}>83</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>Premium Units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Amenities ── */}
        <section id="section-amenities" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3" data-aos="fade-up">What We Offer</div>
                <h2 data-aos="fade-up" data-aos-delay="80">World-Class Amenities</h2>
                <p className="mt-2" style={{ color: "rgba(255,255,255,0.6)" }} data-aos="fade-up" data-aos-delay="140">
                  Every detail at National Royal Palace is curated for comfort, leisure, and modern living.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {amenities.map((a, i) => (
                <div key={a.label} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(i % 3) * 80}`}>
                  <div className="nrp-dark-card rounded-3 p-4 h-100" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div className="nrp-icon-box rounded-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, flexShrink: 0, color: "#fff", fontSize: "1.25rem" }}>
                      <i className={a.icon} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h5 className="mb-1 fw-600" style={{ fontSize: "1rem" }}>{a.label}</h5>
                      <p className="mb-0 fs-14" style={{ color: "rgba(255,255,255,0.6)" }}>{a.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Gallery ── */}
        <section id="section-gallery">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3" data-aos="fade-up">Project Gallery</div>
                <h2 data-aos="fade-up" data-aos-delay="80">A Glimpse of Royal Living</h2>
              </div>
            </div>

            {/* Interior section label */}
            <div className="mb-3" data-aos="fade-up">
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.45 }}>
                <i className="fa-solid fa-circle id-color me-2" style={{ fontSize: "0.5rem", verticalAlign: "middle" }} />
                Interior Views
              </span>
            </div>

            <div className="row g-3 mb-4">
              {/* Two featured interior images */}
              {interiorGallery.slice(0, 2).map((img, i) => (
                <div key={img.src} className="col-md-6" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <a href={img.src} className="image-popup d-block nrp-gallery-card hover" style={{ position: "relative", overflow: "hidden", borderRadius: "14px", display: "block" }}>
                    <div className="absolute start-0 w-100 h-100 overlay-dark-7 hover-op-1" style={{ zIndex: 2 }} />
                    <div className="nrp-gallery-caption hover-op-1" style={{ zIndex: 3 }}>
                      <i className="fa-solid fa-magnifying-glass-plus me-2" />{img.alt}
                    </div>
                    <img src={img.src} className="w-100 hover-scale-1-2" alt={img.alt}
                      loading="lazy" decoding="async" style={{ height: "300px", objectFit: "cover", display: "block" }} />
                  </a>
                </div>
              ))}
              {/* Remaining interior */}
              {interiorGallery.slice(2).map((img, i) => (
                <div key={img.src} className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={`${(i % 3) * 60}`}>
                  <a href={img.src} className="image-popup d-block nrp-gallery-card hover" style={{ position: "relative", overflow: "hidden", borderRadius: "14px", display: "block" }}>
                    <div className="absolute start-0 w-100 h-100 overlay-dark-7 hover-op-1" style={{ zIndex: 2 }} />
                    <div className="nrp-gallery-caption hover-op-1" style={{ zIndex: 3 }}>
                      <i className="fa-solid fa-magnifying-glass-plus me-2" />{img.alt}
                    </div>
                    <img src={img.src} className="w-100 hover-scale-1-2" alt={img.alt}
                      loading="lazy" decoding="async" style={{ height: "230px", objectFit: "cover", display: "block" }} />
                  </a>
                </div>
              ))}
            </div>

            {/* Exterior section label */}
            <div className="mb-3 mt-3" data-aos="fade-up">
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.45 }}>
                <i className="fa-solid fa-circle id-color me-2" style={{ fontSize: "0.5rem", verticalAlign: "middle" }} />
                Exterior Views
              </span>
            </div>
            <div className="row g-3 mb-5">
              {exteriorGallery.map((img, i) => (
                <div key={img.src} className="col-md-6" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <a href={img.src} className="image-popup d-block nrp-gallery-card hover" style={{ position: "relative", overflow: "hidden", borderRadius: "14px", display: "block" }}>
                    <div className="absolute start-0 w-100 h-100 overlay-dark-7 hover-op-1" style={{ zIndex: 2 }} />
                    <div className="nrp-gallery-caption hover-op-1" style={{ zIndex: 3 }}>
                      <i className="fa-solid fa-magnifying-glass-plus me-2" />{img.alt}
                    </div>
                    <img src={img.src} className="w-100 hover-scale-1-2" alt={img.alt}
                      loading="lazy" decoding="async" style={{ height: "320px", objectFit: "cover", display: "block" }} />
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center" data-aos="fade-up">
              <p className="mb-3" style={{ color: "rgba(32,24,40,0.6)" }}>Experience the project in person — schedule a free site visit today.</p>
              <a className="btn-main fx-slide" href="#section-contact" data-callback-modal><span>Schedule a Site Visit</span></a>
            </div>
          </div>
        </section>

        {/* ── 5. Floor Plan ── */}
        <section id="section-floorplan" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle mb-3" data-aos="fade-up">Discover</div>
                <h2 data-aos="fade-up" data-aos-delay="80">Home Floorplans</h2>
              </div>
            </div>

            <div className="row g-4 align-items-start">
              {/* Info panel */}
              <div className="col-lg-4" data-aos="fade-right">
                <div className="nrp-floorplan-panel rounded-3 p-4 mb-4">
                  <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }} className="mb-4">
                    National Royal Palace offers premium 3 &amp; 4 BHK luxury apartments at Pathadipalam, Edappally — thoughtfully crafted with contemporary design and superior construction quality.
                  </p>
                  <div className="rounded-3 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                    {floorplanRows.map(([label, value], index) => (
                      <div key={label} style={{ display: "flex", alignItems: "flex-start", padding: "12px 16px", background: index % 2 === 0 ? "rgba(255,255,255,0.05)" : "transparent", borderBottom: index < floorplanRows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none", gap: "8px" }}>
                        <div style={{ flex: "0 0 44%", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{label}</div>
                        <div style={{ flex: "1 1 0", minWidth: 0, fontSize: "0.82rem", fontWeight: 700, color: "var(--primary-color,#c9a75c)", wordBreak: "break-all", overflowWrap: "anywhere", lineHeight: 1.5 }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <a className="btn-main fx-slide" href="#section-contact" data-callback-modal><span>Enquire Now</span></a>
              </div>

              {/* Swiper carousel */}
              <div className="col-lg-8" data-aos="fade-left" data-aos-delay="100">
                <div className="nrp-floorplan-carousel swiper-fp rounded-3" style={{ position: "relative", boxShadow: "0 24px 70px rgba(0,0,0,0.45)", overflow: "hidden" }}>
                  <div className="swiper-wrapper">
                    {[
                      ["BASEMENT-FLOOR-PLAN-scaled.jpg",       "Basement Floor Plan"],
                      ["GROUND-FLOOR-PLAN-2-scaled.jpg",       "Ground Floor Plan"],
                      ["FIRST-FLOOR-LAYOUT-1-scaled.jpg",      "First Floor Layout"],
                      ["TYPICAL-LAYOUT-scaled.jpg",            "Typical Layout"],
                      ["14TH-FLOOR-PLAN-scaled.jpg",           "14th Floor Plan"],
                      ["TERRACE-FLOOR-PLAN-scaled.jpg",        "Terrace Floor Plan"],
                      ["SWIMMING-POOL-LEVEL-PLAN-2-scaled.jpg","Swimming Pool Level"],
                      ["FLAT-A-1-1-scaled.jpg",                "Flat A-1"],
                      ["FLAT-A-2-scaled.jpg",                  "Flat A-2"],
                      ["FLAT-B1-scaled.jpg",                   "Flat B-1"],
                      ["FLAT-B-2-scaled.jpg",                  "Flat B-2"],
                      ["FLAT-C1-scaled.jpg",                   "Flat C-1"],
                      ["FLAT-C-2-scaled.jpg",                  "Flat C-2"],
                      ["FLAT-D1-scaled.jpg",                   "Flat D-1"],
                      ["FLAT-D-2-scaled.jpg",                  "Flat D-2"],
                      ["FLAT-E-2-scaled.jpg",                  "Flat E"],
                      ["FLAT-F-2-scaled.jpg",                  "Flat F"],
                    ].map(([file, label]) => (
                      <div key={file} className="swiper-slide" style={{ position: "relative" }}>
                        <img src={`/assets/images/floorplans/${file}`} className="w-100" alt={label}
                          loading="lazy" decoding="async"
                          style={{ display: "block", height: "480px", objectFit: "contain", background: "#f9f7f4" }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)", padding: "36px 20px 16px" }}>
                          <h6 className="mb-0 text-white fw-600">{label}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="fp-next" className="swiper-button-next" style={{ color: "#fff" }} />
                  <div id="fp-prev" className="swiper-button-prev" style={{ color: "#fff" }} />
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>

            <div className="spacer-double" />

            {/* Key specs */}
            <div className="row g-3">
              {[
                ["fa-solid fa-vector-square", "Plot Area",   "1661 – 2555 sqft"],
                ["fa-solid fa-bed",           "Bedrooms",    "3 – 4 BHK"],
                ["fa-solid fa-building",      "Total Units", "83 Units"],
                ["fa-solid fa-car",           "Parking",     "1 Per Unit"],
              ].map(([icon, title, value], i) => (
                <div key={title} className="col-md-3 col-6" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <div className="nrp-dark-card rounded-3 py-4 px-3 text-center">
                    <i className={`${icon} id-color mb-3 d-block`} style={{ fontSize: "1.6rem" }} />
                    <p className="mb-1 fs-14" style={{ color: "rgba(255,255,255,0.6)" }}>{title}</p>
                    <h5 className="mb-0 fw-700">{value}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Nearby Places ── */}
        <section>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3" data-aos="fade-up">Location Advantage</div>
                <h2 data-aos="fade-up" data-aos-delay="80">Highlights Nearby</h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                ["LuLu Mall, Edappally",                "2 km",  "/assets/images/nearby/lulu-mall.jpg"],
                ["Amrita Institute of Medical Sciences", "3 km",  "/assets/images/nearby/aims-kochi.jpg"],
                ["Amrita Vishwa Vidyapeetham",           "3 km",  "/assets/images/nearby/amrita-campus.jpg"],
                ["Edappally Metro Station",              "1 km",  "/assets/images/nearby/edappally-metro.jpg"],
              ].map(([label, distance, image], i) => (
                <div key={label} className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <div className="nrp-nearby-card overflow-hidden rounded-3" style={{ height: "290px", position: "relative", boxShadow: "0 12px 36px rgba(32,24,40,0.14)" }}>
                    <img src={image} alt={label} loading="lazy" decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px" }}>
                      <span className="d-inline-block mb-2 px-2 py-1 rounded-1 fw-700" style={{ background: "var(--primary-color)", fontSize: "0.72rem", color: "#fff", letterSpacing: "0.04em" }}>{distance}</span>
                      <h5 className="mb-0 text-white lh-sm" style={{ fontSize: "0.98rem" }}>{label}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Testimonials ── */}
        <section id="section-testimonials" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3" data-aos="fade-up">Happy Home Owners</div>
                <h2 data-aos="fade-up" data-aos-delay="80">Words from Our Customers</h2>
                <p className="mt-2" style={{ color: "rgba(255,255,255,0.55)" }} data-aos="fade-up" data-aos-delay="140">
                  Real stories from real families who chose National Builders for their dream home.
                </p>
              </div>
            </div>

            <div className="row g-4" id="testimonials-grid">
              {testimonialVideos.map((src, i) => (
                <div key={src} className={`col-lg-4 col-md-6${i >= 3 ? " nrp-testi-extra" : ""}`}
                  data-aos="fade-up" data-aos-delay={`${(i % 3) * 100}`}
                  style={i >= 3 ? { display: "none" } : {}}>
                  <div className="nrp-dark-card rounded-3 overflow-hidden" style={{ background: "#000" }}>
                    <video
                      src={src}
                      controls
                      preload="none"
                      playsInline
                      style={{ width: "100%", display: "block", maxHeight: "340px", objectFit: "cover", background: "#111" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5" id="load-more-wrap">
              <button id="load-more-btn" className="btn-main fx-slide" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer" }}>
                <span>Load More Reviews</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── 8. Contact ── */}
        <section id="section-contact" style={{ background: "#1C1428" }} className="text-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3" style={{ color: "var(--primary-color)" }}>Get in Touch</div>
                <h2 className="text-white">Request a Callback</h2>
                <p style={{ color: "rgba(255,255,255,0.55)" }}>Our team will reach out to you within 24 hours.</p>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {/* Agent card */}
              <div className="col-md-4 col-lg-3">
                <div className="nrp-contact-info text-center p-4 rounded-3 h-100"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <img src="/images/agents/1.webp" className="rounded-2 mb-3" alt="National Builders" loading="lazy" decoding="async"
                    style={{ width: "100%", maxWidth: "180px", height: "180px", objectFit: "cover" }} />
                  <h5 className="mb-3 text-white">National Builders</h5>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                    {[
                      ["+91 98475 33355", "tel:+919847533355"],
                      ["+91 98475 44222", "tel:+919847544222"],
                      ["+91 98477 17771", "tel:+919847717771"],
                    ].map(([num, href]) => (
                      <a key={num} href={href} className="fw-600 text-decoration-none"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "var(--primary-color)", fontSize: "0.9rem" }}>
                        <i className="fa-solid fa-phone" style={{ fontSize: "0.78rem", flexShrink: 0 }} />{num}
                      </a>
                    ))}
                  </div>
                  <a href="https://wa.me/919847533355" target="_blank" rel="noopener noreferrer"
                    className="btn-main d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                    style={{ background: "#25d366", borderColor: "#25d366" }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.1rem" }} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="col-md-7 col-lg-5">
                <div className="nrp-contact-form p-4 p-lg-5 rounded-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h5 className="text-white mb-1">Fill in Your Details</h5>
                  <p className="mb-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>We'll call you back — no spam, ever.</p>
                  <form name="callbackForm" id="callback_form" method="post" action="#">
                    <div className="row g-3">
                      <div className="col-12">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name *" required />
                      </div>
                      <div className="col-12">
                        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Phone Number *" required />
                      </div>
                      <div className="col-12">
                        <select name="bhk" id="bhk" className="form-control" defaultValue="">
                          <option value="" disabled>Preferred BHK</option>
                          <option value="3bhk">3 BHK</option>
                          <option value="4bhk">4 BHK</option>
                          <option value="any">Any</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div id="submit">
                          <input type="submit" id="send_message" value="Send Message" className="btn-main w-100" />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="success_message_col" className="success mt-3">Your message has been sent successfully.</div>
                  <div id="error_message" className="error mt-3">Sorry there was an error sending your form.</div>
                  <p className="text-center mt-4 mb-0"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.8rem", color: "rgba(255,255,255,0.38)" }}>
                    <i className="fa-solid fa-lock" style={{ flexShrink: 0 }} /> 100% Confidential — We never share your details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="section-dark" style={{ background: "#1C1428", color: "rgba(255,255,255,0.85)" }}>
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-md-6 col-lg-4">
              <img src="/assets/images/national-royal-palace-logo.png" className="mb-4"
                alt="National Royal Palace" style={{ maxWidth: "160px", width: "100%", height: "auto" }} />
              <p className="fs-15 mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                National Builders — a leading real estate developer with 135+ landmark projects across Navi Mumbai and Kerala, committed to quality and excellence since 1986.
              </p>
              <a href="https://wa.me/919847533355" target="_blank" rel="noopener noreferrer"
                className="d-inline-flex align-items-center gap-2 btn-main mb-3 text-decoration-none"
                style={{ background: "#25d366", borderColor: "#25d366", fontSize: "0.85rem" }}>
                <i className="fa-brands fa-whatsapp" /> WhatsApp Us
              </a>
              <div className="social-icons d-block mt-1">
                <a href="#"><i className="fa-brands fa-instagram" /></a>
                <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                <a href="#"><i className="fa-brands fa-youtube" /></a>
                <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="mb-3 mb-lg-4">Quick Links</h5>
              <ul className="list-unstyled mb-0" style={{ lineHeight: "2.4" }}>
                {[
                  ["#",                   "Home"],
                  ["#section-about",      "About Us"],
                  ["#section-amenities",  "Amenities"],
                  ["#section-gallery",    "Gallery"],
                  ["#section-floorplan",  "Floorplan"],
                  ["#section-testimonials","Reviews"],
                  ["#section-contact",    "Contact"],
                  ["#",                   "Privacy Policy"],
                ].map(([href, label]) => (
                  <li key={label}><a href={href} className="text-white opacity-75 text-decoration-none">{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3 mb-lg-4">Kochi Office</h5>
              <p className="fs-15 mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                National Pearl Star, 5th Floor,<br />
                High School Junction, Edappally,<br />
                Kochi, Kerala – 682024
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  ["+91 98475 33355", "tel:+919847533355"],
                  ["+91 98475 44222", "tel:+919847544222"],
                  ["+91 98477 17771", "tel:+919847717771"],
                ].map(([num, href]) => (
                  <p key={num} className="fs-15 mb-0">
                    <i className="fa-solid fa-phone me-2 id-color" />
                    <a href={href} className="text-white opacity-75 text-decoration-none">{num}</a>
                  </p>
                ))}
                <p className="fs-15 mt-2 mb-0">
                  <i className="fa-solid fa-envelope me-2 id-color" />
                  <a href="mailto:marketingkochi@nationalbuilders.in" className="text-white opacity-75 text-decoration-none" style={{ wordBreak: "break-all" }}>
                    marketingkochi@nationalbuilders.in
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3 mb-lg-4">Navi Mumbai Office</h5>
              <p className="fs-15 mb-0" style={{ color: "rgba(255,255,255,0.6)" }}>
                Sea Queen Heritage Building,<br />
                1st Floor, Plot 6, Sector 18,<br />
                Palm Beach Service Road, Sanpada,<br />
                Navi Mumbai – 400705
              </p>
            </div>
          </div>
        </div>

        <div className="subfooter mt-4 mt-lg-5">
          <div className="container">
            <div className="row align-items-center g-2">
              <div className="col-12 col-md-6 text-center text-md-start">
                Copyright &copy; 2025 National Builders. All Rights Reserved.
              </div>
              <div className="col-12 col-md-6 text-center text-md-end opacity-75 fs-14">
                Developed by <a href="https://web.mantrainfotechs.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">mits</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Mobile sticky CTA bar ── */}
      <div className="nrp-mobile-cta">
        <a href="tel:+919847533355" className="nrp-mobile-cta-link nrp-mobile-cta-secondary text-decoration-none" aria-label="Call Now">
          <i className="fa-solid fa-phone" style={{ fontSize: "1.2rem" }} />
        </a>
        <a href="https://wa.me/919847533355" target="_blank" rel="noopener noreferrer"
          className="nrp-mobile-cta-link text-decoration-none" style={{ background: "#25d366" }} aria-label="WhatsApp">
          <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.3rem" }} />
        </a>
        <a href="#section-contact" className="nrp-mobile-cta-link text-decoration-none" data-callback-modal aria-label="Request Callback">
          <i className="fa-solid fa-phone-volume" style={{ fontSize: "1.2rem" }} />
        </a>
      </div>

      <CallbackModal />
      <Script src="/assets/js/vendors.js" strategy="afterInteractive" />
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />
      <Script src="/assets/js/validation-booking.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom-swiper-2.js" strategy="afterInteractive" />
      <Script id="template-load-fix" strategy="afterInteractive">{`
        window.setTimeout(function () {
          try { window.dispatchEvent(new Event("load")); } catch(e) {}
          var f = document.querySelector("footer");
          if (f) {
            f.style.setProperty("background", "#1C1428", "important");
            f.style.setProperty("visibility", "visible", "important");
            f.style.setProperty("opacity", "1", "important");
            f.style.setProperty("display", "block", "important");
          }
          var sc = document.getElementById("section-contact");
          if (sc) {
            sc.style.setProperty("visibility", "visible", "important");
            sc.style.setProperty("opacity", "1", "important");
          }
          document.body.style.setProperty("overflow-y", "auto", "important");
          document.body.style.setProperty("overflow-x", "hidden", "important");
        }, 150);
      `}</Script>
      <Script id="floorplan-swiper-init" strategy="afterInteractive">{`
        (function() {
          function initFpSwiper() {
            if (typeof Swiper === "undefined") { setTimeout(initFpSwiper, 100); return; }
            new Swiper(".swiper-fp", {
              slidesPerView: 1,
              loop: true,
              speed: 600,
              navigation: { nextEl: "#fp-next", prevEl: "#fp-prev" },
              pagination: { el: ".swiper-fp .swiper-pagination", clickable: true }
            });
          }
          initFpSwiper();
        })();
      `}</Script>
      <Script id="load-more-init" strategy="afterInteractive">{`
        (function() {
          var btn = document.getElementById("load-more-btn");
          if (!btn) return;
          btn.addEventListener("click", function() {
            var extras = document.querySelectorAll(".nrp-testi-extra");
            extras.forEach(function(el) { el.style.display = ""; });
            document.getElementById("load-more-wrap").style.display = "none";
          });
        })();
      `}</Script>
      <Script id="aos-init" strategy="afterInteractive">{`
        (function() {
          var link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
          document.head.appendChild(link);
          var script = document.createElement("script");
          script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
          script.onload = function() {
            AOS.init({ duration: 750, once: true, offset: 50, easing: "ease-out-cubic" });
          };
          document.body.appendChild(script);
        })();
      `}</Script>
    </>
  );
}
