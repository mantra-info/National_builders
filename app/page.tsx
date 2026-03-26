import Script from "next/script";

const roomTabs = [
  {
    name: "Living Room",
    area: "20 m²",
    image: "/images/discover-rooms/l1.webp",
    description:
      "A spacious and elegant living area designed for comfort and style. Perfect for relaxing moments and welcoming guests with a modern touch."
  },
  {
    name: "Dinning Room",
    area: "15 m²",
    image: "/images/discover-rooms/l2.webp",
    description:
      "A well-planned dining space that brings families together. Designed for comfort, warmth, and memorable dining experiences."
  },
  {
    name: "Kitchen",
    area: "15 m²",
    image: "/images/discover-rooms/l3.webp",
    description:
      "A modern kitchen with smart layout and quality finishes. Built for convenience, functionality, and everyday ease."
  },
  {
    name: "Master Bedroom",
    area: "16 m²",
    image: "/images/discover-rooms/l4.webp",
    description:
      "A peaceful and private retreat with ample space and natural light. Designed to provide comfort, relaxation, and luxury living."
  },
  {
    name: "Bathroom",
    area: "6 m²",
    image: "/images/discover-rooms/l5.webp",
    description:
      "Stylish and well-equipped bathrooms with high-quality fittings. Designed for hygiene, comfort, and a refreshing experience."
  }
];

const galleryItems = [
  ["interior", "/images/gallery/l1.webp"],
  ["interior", "/images/gallery/l2.webp"],
  ["interior", "/images/gallery/l3.webp"],
  ["interior", "/images/gallery/l4.webp"],
  ["interior", "/images/gallery/l5.webp"],
  ["exterior", "/images/gallery/l6.webp"],
  ["exterior", "/images/gallery/l7.webp"],
  ["exterior", "/images/gallery/l8.webp"],
  ["facilities", "/images/gallery/l9.webp"],
  ["facilities", "/images/gallery/l10.webp"],
  ["facilities", "/images/gallery/l11.webp"],
  ["facilities", "/images/gallery/l12.webp"]
] as const;

const floorplanRows = [
  ["Living Room", "20 m²"],
  ["Dinning Room", "15 m²"],
  ["Kitchen", "15 m²"],
  ["Master Bedroom", "16 m²"],
  ["Kids Bedroom 1", "12 m²"],
  ["Kids Bedroom 2", "12 m²"],
  ["Bath Room", "6 m²"],
  ["Garage", "40 m²"],
  ["Warehouse", "4 m²"]
];

const scheduleTimes = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
];

const nearbyHighlights = [
  {
    title: "Shopping & Entertainment",
    accent: "Retail access",
    items: [
      ["LuLu Hypermarket", "0.6 km"],
      ["Reliance Digital", "0.4 km"]
    ]
  },
  {
    title: "Educational Institutions",
    accent: "Academic convenience",
    items: [["Amrita School of Business", "2.9 km"]]
  },
  {
    title: "Healthcare",
    accent: "Healthcare access",
    items: [["Amrita Institute of Medical Sciences", "Nearby"]]
  },
  {
    title: "Connectivity",
    accent: "Well-linked location",
    items: [
      ["Edappally Junction", "Easy access"],
      ["NH 66 & NH 47", "Direct connectivity"]
    ]
  },
  {
    title: "Transport",
    accent: "Easy daily commute",
    items: [
      ["Bus Stops", "100 m"],
      ["Railway Station", "~4 km"]
    ]
  },
  {
    title: "City Access",
    accent: "Strong urban reach",
    items: [
      ["Kochi City Centre", "Well connected"],
      ["Metro & Road Connectivity", "Excellent"]
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span>
            <a href="#">Scroll to top</a>
          </span>
        </div>
        <div className="scrollbar-v show-on-scroll" />

        <div id="de-loader" />

        <header className="transparent header-light header-float">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-inner">
                  <div className="de-flex">
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="/">
                          <img className="logo-main" src="/images/logo-black.webp" alt="" />
                          <img className="logo-scroll" src="/images/logo-black.webp" alt="" />
                          <img className="logo-mobile" src="/images/logo-black.webp" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="de-flex-col">
                      <div className="de-flex-col header-col-mid">
                        <ul id="mainmenu">
                          <li>
                            <a className="menu-item" href="#">
                              Home
                            </a>
                            <ul className="mega">
                              <li>
                                <div className="container">
                                  <div className="sb-menu p-4">
                                    <div className="row g-3">
                                      {[
                                        ["Single Property 1", "/images/demo/homepage-1.webp", "/"],
                                        ["Single Property 2", "/images/demo/homepage-2.webp", "#"],
                                        ["Single Property 3", "/images/demo/homepage-6.webp", "#"],
                                        ["New: Single Property 4", "/images/demo/homepage-7.webp", "#"],
                                        ["Apartment 1", "/images/demo/homepage-3.webp", "#"],
                                        ["Apartment 2", "/images/demo/homepage-4.webp", "#"],
                                        ["Single Apartment", "/images/demo/homepage-5.webp", "#"],
                                        ["Coming Soon", "/images/demo/coming-soon.webp", "#"]
                                      ].map(([label, image, href]) => (
                                        <div key={label} className="col-lg-3 col-md-4 col-sm-6 text-center">
                                          <div className="relative hover text-center overflow-hidden soft-shadow">
                                            <a className="p-0" href={href}>
                                              <img
                                                src={image}
                                                className="w-100 relative hover-scale-1-1"
                                                alt={label}
                                              />
                                            </a>
                                          </div>
                                          <h6 className="mt-3">{label}</h6>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-overview">
                              Overview
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-rooms">
                              Rooms
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-gallery">
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-floorplan">
                              Floorplan
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-contact">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="de-flex-col">
                      <a className="btn-main fx-slide w-100" href="#section-contact">
                        <span>Schedule a Visit</span>
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

        <section id="section-hero" className="text-light no-top no-bottom relative overflow-hidden z-1000">
          <div className="abs w-100 abs-centered z-2">
            <div className="container">
              <div className="spacer-double" />

              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-md-5">
                  <h1 className="mb-0">Live the premium life you deserve.</h1>
                </div>

                <div className="col-lg-4">
                  <h4 className="fw-400">320 40th Street B4, New York, NY 10019</h4>
                  <a className="btn-main btn-line bg-blur fx-slide" href="#section-contact">
                    <span>Schedule a Visit</span>
                  </a>{" "}
                  <a className="btn-main btn-line bg-blur fx-slide" href="#section-overview">
                    <span>Explore Property</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-center">
            <div className="swiper">
              <div className="swiper-wrapper">
                {["3.webp", "4.webp"].map((image) => (
                  <div key={image} className="swiper-slide">
                    <div
                      className="swiper-inner"
                      data-bgimage={`url(/images/slider/${image})`}
                      style={{
                        backgroundImage: `url(/images/slider/${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="sw-overlay op-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="abs w-100 bottom-0 z-2 pb-4 sm-hide">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between">
                    {["Spacious Rooms", "Private Garden", "Walk-in Closets", "Swimming Pool"].map((item) => (
                      <div key={item}>
                        <h6>{item}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-overview">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-5">
                <div className="ps-lg-3">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Home Overview
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    A Perfect Balance of Comfort, Design, and Everyday Convenience.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Non anim in pariatur in ex excepteur commodo do officia amet incididunt ullamco nostrud aliquip
                    minim magna esse dolore..
                  </p>

                  <a className="btn-main fx-slide" href="#section-contact">
                    <span>Schedule a Visit</span>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-4">
                  {[
                    ["1.png", "Terrace Garden & Party Area", "Enjoy stunning views and host memorable moments in a premium rooftop setting."],
                    ["2.png", "Fully Equipped Fitness Centre", "Stay active and healthy with a modern gym featuring essential equipment for your daily workouts."],
                    ["3.png", "Children’s Play Area", "A safe and engaging space where children can play, explore, and enjoy their time freely."],
                    ["4.png", "24/7 Power Backup", "Reliable power backup system ensuring uninterrupted comfort at all times."],
                    ["4.png", "Rainwater Harvesting System", "Eco-friendly water management system designed to support sustainable living."],
                    ["4.png", "Multipurpose Hall", "A flexible space ideal for events, celebrations, and community gatherings."]
                  ].map(([image, title, description]) => (
                    <div key={title} className="col-md-6">
                      <div className="h-100 rounded-1">
                        <img src={`/assets/images/icons-color/${image}`} className="w-70px mb-4 wow scaleIn" alt="" />
                        <div className="relative wow fadeInUp">
                          <h4>{title}</h4>
                          <p className="mb-0">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-rooms" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Room Details
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Discover Rooms
                </h2>
              </div>
            </div>
            <div className="row g-4 gx-5 justify-content-center wow fadeInUp">
              <div className="col-lg-12">
                <div className="de-tab pill">
                  <ul className="d-tab-nav mb-4">
                    {roomTabs.map((room, index) => (
                      <li key={room.name} className={index === 0 ? "active-tab" : undefined}>
                        {room.name}
                      </li>
                    ))}
                  </ul>
                  <ul className="d-tab-content pt-3">
                    {roomTabs.map((room) => (
                      <li key={room.name}>
                        <div className="row g-4 justify-content-between">
                          <div className="col-lg-4">
                            <div className="relative bg-dark-2 rounded-1 h-100">
                              <h3 className="fs-32 mb-4 p-40">{room.name}</h3>
                              <div className="abs p-sm-relative bottom-0 p-40 start-0 w-100">
                                <p className="mb-0">{room.description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-8">
                            <div className="relative">
                              <div className="bg-blur abs p-2 bottom-0 rounded-2 px-4 m-4 text-white">
                                <h4 className="mb-0">{room.area}</h4>
                              </div>
                              <img src={room.image} className="w-100 rounded-1" alt={room.name} />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-gallery" className="bg-color-op-1">
          <div className="container">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Dicover Gallery
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Exterior &amp; Interior
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <ul id="filters" className="wow fadeInUp" data-wow-delay="0s">
                  <li>
                    <a href="#" data-filter="*" className="selected">
                      View All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".exterior">
                      Exterior
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".interior">
                      Interior
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".facilities">
                      Facilities
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="gallery" className="row g-3 wow fadeInUp" data-wow-delay=".3s">
              {galleryItems.map(([type, image]) => (
                <div key={image} className={`col-md-4 col-sm-6 col-12 item ${type}`}>
                  <a href={image} className="image-popup d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                        View
                      </div>
                      <div className="absolute start-0 w-100 h-100 overlay-dark-7 hover-op-1 z-2" />
                      <img src={image} className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="section-floorplan" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <div className="pe-lg-3">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Discover
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Home Floorplans
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Dolor ad consectetur dolore incididunt pariatur aliqua ut laborum aliquip eiusmod officia tempor ex
                    commodo amet voluptate.
                  </p>

                  <div className="relative overflow-hidden">
                    {floorplanRows.map(([label, value], index) => (
                      <div key={label} className={`d-flex px-4 py-2 ${index % 2 === 0 ? "bg-dark-2" : ""}`}>
                        <div className="w-60">{label}</div>
                        <div className="w-40 fw-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="owl-carousel owl-theme owl-single-dots">
                  <img
                    src="/images/misc/floorplan-2-color.webp"
                    className="w-100 wow fadeInUp"
                    data-wow-delay=".2s"
                    alt=""
                  />
                  <img
                    src="/images/misc/floorplan-2-color.webp"
                    className="w-100 wow fadeInUp"
                    data-wow-delay=".2s"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="spacer-double" />

            <div className="row g-3">
              {[
                ["Size", "/images/svg/size.svg", "1665 sqft"],
                ["Beds", "/images/svg/bed.svg", "5"],
                ["Baths", "/images/svg/bath.svg", "5"],
                ["Parking Slots", "/images/svg/car.svg", "5"]
              ].map(([title, icon, value]) => (
                <div key={title} className="col-md-3 col-6">
                  <div className="bg-dark-2 py-4 rounded-1 text-center">
                    <h4>{title}</h4>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={icon} className="w-40px me-3" alt="" />
                      <div>{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container relative z-2">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Near by Places
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Highlights Nearby
                </h2>
              </div>
            </div>

            <div className="row g-4 align-items-stretch">
              <div className="col-xl-4">
                <div
                  className="h-100 rounded-1 text-light wow fadeInUp"
                  data-wow-delay=".0s"
                  style={{
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    background:
                      "linear-gradient(145deg, rgba(18, 34, 61, 0.96) 0%, rgba(11, 77, 90, 0.92) 55%, rgba(20, 131, 110, 0.88) 100%)"
                  }}
                >
                  <div
                    className="mb-3 d-inline-flex align-items-center justify-content-center text-dark fw-700 rounded-pill px-3 py-2"
                    style={{ backgroundColor: "rgba(255,255,255,0.88)", fontSize: "14px", letterSpacing: ".08em" }}
                  >
                    PRIME LOCATION
                  </div>
                  <h3 className="mb-3 text-white">Everything essential is within quick reach.</h3>
                  <p className="mb-4 text-white-50">
                    From shopping and healthcare to education and transport, this address keeps daily life connected,
                    efficient, and comfortable.
                  </p>
                  <div className="row g-3">
                    {[
                      ["Bus Stops", "100 m"],
                      ["Railway Station", "~4 km"],
                      ["Amrita School of Business", "2.9 km"],
                      ["LuLu Hypermarket", "0.6 km"]
                    ].map(([label, value]) => (
                      <div key={label} className="col-sm-6">
                        <div
                          className="rounded-1 p-3 h-100"
                          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                        >
                          <div className="fs-12 text-uppercase text-white-50 mb-1" style={{ overflowWrap: "anywhere" }}>
                            {label}
                          </div>
                          <div className="fw-600 text-white">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-xl-8">
                <div className="row g-4">
                  {nearbyHighlights.map(({ title, accent, items }, index) => (
                    <div key={title} className="col-lg-6">
                      <div
                        className="h-100 rounded-1 wow fadeInUp"
                        data-wow-delay={`${index * 0.1}s`}
                        style={{
                          padding: "clamp(1.15rem, 2.6vw, 1.5rem)",
                          background: "linear-gradient(180deg, rgba(20,20,20,0.98) 0%, rgba(12,12,12,0.98) 100%)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          boxShadow: "0 18px 45px rgba(0,0,0,0.18)"
                        }}
                      >
                        <div className="mb-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                          <div
                            className="fs-12 text-uppercase mb-2"
                            style={{ color: "#b8c2cc", letterSpacing: ".08em", overflowWrap: "anywhere" }}
                          >
                            {accent}
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: "44px",
                                height: "44px",
                                background: "linear-gradient(135deg, rgba(201, 167, 92, 0.24), rgba(255,255,255,0.08))",
                                border: "1px solid rgba(201, 167, 92, 0.28)",
                                color: "#f0d9a1",
                                fontWeight: 700,
                                fontSize: "14px"
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <h4 className="mb-0 text-white" style={{ overflowWrap: "anywhere" }}>
                              {title}
                            </h4>
                          </div>
                        </div>

                        <div className="d-grid gap-2">
                          {items.map(([label, value]) => (
                            <div
                              key={label}
                              className="rounded-1 px-3 py-3"
                              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                            >
                              <div className="d-flex flex-column align-items-start gap-3">
                                <div
                                  className="text-light"
                                  style={{ minWidth: 0, width: "100%", overflowWrap: "anywhere", lineHeight: 1.5 }}
                                >
                                  {label}
                                </div>
                                <div
                                  className="rounded-pill px-3 py-1 fw-600"
                                  style={{
                                    backgroundColor: "rgba(201, 167, 92, 0.16)",
                                    color: "#f0d9a1",
                                    fontSize: "14px",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0
                                  }}
                                >
                                  {value}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section" className="p-0 section-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=C6rf51uHWJg">
                  <div className="relative overflow-hidden">
                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                      <div className="player circle wow scaleIn">
                        <span />
                      </div>
                    </div>
                    <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05" />
                    <img src="/images/background/2.webp" className="w-100 hover-scale-1-1" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="section-contact">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Contact Us
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Schedule a Visit
                </h2>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              <div className="col-md-3">
                <div className="text-center">
                  <img src="/images/agents/1.webp" className="w-100 rounded-1" alt="" />

                  <div className="mt-3">
                    <h4 className="mb-0">Emily Rodriguez</h4>
                    <div className="fw-500 id-color">(555) 234-5678</div>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <form name="bookingForm" id="booking_form" method="post" action="#">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-6">
                      <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-6">
                      <div id="date" className="relative input-group date" data-date-format="mm-dd-yyyy">
                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-calendar" />
                        <input className="form-control" name="date" type="text" />
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-calendar" />
                        </span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="relative">
                        <select name="time" id="time" className="form-control" defaultValue="10:00">
                          {scheduleTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control h-150px"
                        placeholder="Submit Request"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <div className="text-start">
                        <div id="submit">
                          <input type="submit" id="send_message" value="Send Message" className="btn-main" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="success_message_col" className="success">
                  Your message has been sent successfully. Refresh this page if you want to send more messages.
                </div>
                <div id="error_message" className="error">
                  Sorry there was an error sending your form.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="section-dark">
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <img src="/images/logo.webp" className="w-200px" alt="" />
                <div className="spacer-single" />
                <div className="fs-16">
                  712 Jefferson Ave, Brooklyn
                  <br />
                  New York 11221
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-double" />

          <div className="row g-4">
            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="d-flex justify-content-center">
                <i className="fs-60 id-color icon_phone" />
                <div className="ms-3">
                  <h4 className="mb-0">Call Us</h4>
                  <p>Call: +1 123 456 789</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="d-flex justify-content-center">
                <i className="fs-60 id-color icon_clock" />
                <div className="ms-3">
                  <h4 className="mb-0">Opening Hours</h4>
                  <p>Mon to Sat 08:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="d-flex justify-content-center">
                <i className="fs-60 id-color icon_mail" />
                <div className="ms-3">
                  <h4 className="mb-0">Email Us</h4>
                  <p>contact@residem.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">Copyright 2026 - Residem by Designesia</div>
              <div className="col-md-6 text-md-end">
                <div className="social-icons mb-sm-30 text-center">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Script src="/assets/js/vendors.js" strategy="afterInteractive" />
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />
      <Script src="/assets/js/validation-booking.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom-swiper-2.js" strategy="afterInteractive" />
      <Script id="datepicker-init" strategy="afterInteractive">
        {`window.jQuery?.(function () {
          window.jQuery("#date").datepicker({
            autoclose: true,
            todayHighlight: true
          }).datepicker("update", new Date());
        });`}
      </Script>
      <Script id="template-load-fix" strategy="afterInteractive">
        {`window.setTimeout(function () {
          try {
            window.dispatchEvent(new Event("load"));
          } catch (e) {}

          window.setTimeout(function () {
            var loader = document.getElementById("de-loader");
            if (loader) {
              loader.style.display = "none";
            }
          }, 800);
        }, 150);`}
      </Script>
    </>
  );
}
