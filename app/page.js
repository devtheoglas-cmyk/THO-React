// Auto-converted from index.html — faithful 1:1 port of the static THO build.
import LegacyScripts from "@/app/components/LegacyScripts";
import SiteFooter from "@/app/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <main className="home-page home-rebuild" aria-label="THO Website Home Page">
            <section className="home-hero" id="top" aria-label="Hero">
              <button className="home-menu-trigger" type="button" data-menu aria-label="Open menu">
                <span>Menu</span>
                <span aria-hidden="true">+</span>
              </button>
              <img className="home-logo" src="/assets/home-logo.png" width="162" height="109" alt="The House of Organic" />
              <a className="home-inquire-link" href="/contact">INQUIRE</a>
      
              <div className="home-hero-copy">
                <h1>We grow locally on UAE farms for reliable supply</h1>
                <p>From UAE farms to global sourcing we deliver quality all year round</p>
                <a className="home-pill-button hero-products-button" href="/products">Explore Products</a>
              </div>
      
              <a className="home-calendar-link" href="/calendar" aria-label="Check product calendar">
                <span className="calendar-icon" aria-hidden="true"></span>
                <span>Check Product Calendar</span>
              </a>
            </section>
      
            <section className="home-intro" aria-label="Organic produce overview">
              <div className="tomato-swing-layer home-intro-tomato" data-animate-on-scroll aria-hidden="true">
                <svg className="tomato-swing-svg" viewBox="0 0 680 460" role="img">
                  <path className="tomato-line-cream" d="M0 3H242" pathLength="1" />
                  <path className="tomato-line-orange-static" d="M266 3H466" pathLength="1" />
                </svg>
                <div className="tomato-swing-group">
                  <svg className="tomato-swing-line" viewBox="0 0 680 460" aria-hidden="true">
                    <path className="tomato-line-orange-swing" d="M466 3C490 3 508 27 508 61V214" pathLength="1" />
                  </svg>
                  <img className="tomato-body-image" src="/assets/tomato-body.png" alt="" />
                </div>
              </div>
      
              <div className="home-intro-copy">
                <p>
                  Introducing Organic produce backed by UAE farming and global sourcing networks.
                  More than 40+ crop varieties grown through chemical free practices and controlled
                  handling systems.
                </p>
                <a className="home-pill-button intro-button" href="/what-we-do">
                  <span>What We Do</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
      
              <img
                className="home-intro-farm"
                src="/assets/home-intro-farm.jpg"
                width="1920"
                height="1000"
                alt="A farmer inspecting crops on a UAE cornfield"
              />
            </section>
      
            <section className="home-categories-section" aria-label="Product categories">
              <img
                className="home-category-strip"
                src="/assets/home-category-strip.png?v=split-1"
                width="1920"
                height="168"
                alt=""
              />
              <div className="home-categories-heading">
                <p>Explore</p>
                <h2>Organic Product Categories<br />from UAE Farms</h2>
                <span aria-hidden="true">↓</span>
              </div>
      
              <article className="category-card category-card-fresh">
                <div className="category-card-art-wrap" data-product-tilt>
                  <img src="/assets/product-tilt-fresh.png" alt="" />
                </div>
                <div className="category-card-copy">
                  <h3><span>Fresh</span><span>Vegetables</span></h3>
                  <p>
                    Fresh organic vegetables sourced with care and selected to support
                    consistent quality and everyday supply needs.
                  </p>
                  <a className="category-view-button" href="/products">
                    <span aria-hidden="true">+</span>
                    <span>View Products</span>
                  </a>
                </div>
              </article>
      
              <article className="category-card category-card-fruits">
                <div className="category-card-art-wrap" data-product-tilt>
                  <img src="/assets/product-tilt-fruits.png" alt="" />
                </div>
                <div className="category-card-copy">
                  <h3><span>Seasonal</span><span>Fruits</span></h3>
                  <p>
                    Naturally grown organic fruits offering freshness quality and
                    seasonal availability for reliable sourcing.
                  </p>
                  <a className="category-view-button" href="/products">
                    <span aria-hidden="true">+</span>
                    <span>View Products</span>
                  </a>
                </div>
              </article>
      
              <article className="category-card category-card-spices category-card-coming-soon">
                <div className="category-card-copy">
                  <h3><span>Coming</span><span>Soon</span></h3>
                </div>
              </article>
            </section>
      
            <section className="home-products-section" id="products" aria-label="Our top products">
              <p className="home-products-kicker">OUR TOP PRODUCTS</p>
              <h2>
                The secret to consistent quality starts with the right products Explore
                our featured organic selection for fresh and reliable supply
              </h2>
              <a className="home-products-cta" href="/products">Explore Products</a>
              <a className="product-image-card pcard product-link-cucumber" style={{ '--bg': '#143f00', '--fg': '#fff' }} href="/product-detail?p=cucumber" aria-label="View cucumber">
                <img className="pc-fruit" src="/assets/products/cucumber-cut.png" alt="Cucumber" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Cucumber</span>
                <span className="pc-seasons"><i>Winter</i><i>Spring</i></span>
              </a>
              <a className="product-image-card pcard product-link-broccoli" style={{ '--bg': '#2d5335', '--fg': '#fff' }} href="/product-detail?p=broccoli" aria-label="View broccoli">
                <img className="pc-fruit" src="/assets/products/broccoli-cut.png" alt="Broccoli" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Broccoli</span>
                <span className="pc-seasons"><i>Spring</i><i>Winter</i></span>
              </a>
              <a className="product-image-card pcard product-link-lemon" style={{ '--bg': '#c4e802', '--fg': '#0d2b00' }} href="/product-detail?p=lemon" aria-label="View lemon">
                <img className="pc-fruit" src="/assets/products/citrus-cut.png" alt="Lemon" />
                <span className="pc-cat">Citrus</span>
                <span className="pc-name">Lemon</span>
                <span className="pc-seasons"><i>Summer</i><i>Winter</i></span>
              </a>
              <a className="product-image-card pcard product-link-tomato-cherry" style={{ '--bg': '#cd003c', '--fg': '#fff' }} href="/product-detail?p=tomato-cherry-red" aria-label="View tomato cherry red">
                <img className="pc-fruit" src="/assets/products/tomato-cherry-red-cut.png" alt="Tomato Cherry Red" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Tomato Cherry Red</span>
                <span className="pc-seasons"><i>Winter</i><i>Spring</i></span>
              </a>
              <a className="product-image-card pcard product-link-mangoes" style={{ '--bg': '#fb6b1e', '--fg': '#fff' }} href="/product-detail?p=mangoes" aria-label="View mangoes">
                <img className="pc-fruit" src="/assets/products/mangoes-cut.png" alt="Mangoes" />
                <span className="pc-cat">Seasonal Fruits</span>
                <span className="pc-name">Mangoes</span>
                <span className="pc-seasons"><i>Summer</i><i>Spring</i></span>
              </a>
              <a className="product-image-card pcard product-link-capsicum-red" style={{ '--bg': '#fb6b1e', '--fg': '#fff' }} href="/product-detail?p=capsicum-red" aria-label="View capsicum red">
                <img className="pc-fruit" src="/assets/products/capsicum-red-cut.png" alt="Capsicum Red" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Capsicum Red</span>
                <span className="pc-seasons"><i>Winter</i><i>Spring</i></span>
              </a>
              <a className="product-image-card pcard product-link-capsicum-yellow" style={{ '--bg': '#c4e802', '--fg': '#0d2b00' }} href="/product-detail?p=capsicum-yellow" aria-label="View capsicum yellow">
                <img className="pc-fruit" src="/assets/products/capsicum-yellow-cut.png" alt="Capsicum Yellow" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Capsicum Yellow</span>
                <span className="pc-seasons"><i>Winter</i><i>Spring</i></span>
              </a>
              <a className="product-image-card pcard product-link-eggplants" style={{ '--bg': '#fff6a7', '--fg': '#0d2b00' }} href="/product-detail?p=eggplants" aria-label="View eggplants">
                <img className="pc-fruit" src="/assets/products/eggplants-cut.png" alt="Eggplants" />
                <span className="pc-cat">Vegetable</span>
                <span className="pc-name">Eggplants</span>
                <span className="pc-seasons"><i>Winter</i><i>Spring</i></span>
              </a>
            </section>
      
            <section className="home-static-section home-calendar-section" id="calendar" aria-label="Product calendar">
              <img src="/assets/home-section-calendar.png?v=exact-1" width="1920" height="1800" alt="Product calendar overview" />
              <div className="m-cal-promo">
                <h2 className="m-cal-promo-h">Plan with Real-Time <span>Seasonal Availability</span></h2>
                <img className="m-cal-promo-img" src="/assets/home-cal-illustration.png" alt="2026 seasonal product calendar" />
                <p className="m-cal-promo-p">Get a clear view of what&apos;s available across seasons and sourcing channels so you can plan better, reduce gaps and make faster supply decisions.</p>
              </div>
              <a className="section-hotspot calendar-section-link" href="/calendar" aria-label="Check product calendar">
                <span className="calendar-icon" aria-hidden="true"></span>
                <span>Check Product Calendar</span>
              </a>
            </section>
      
            <section className="home-static-section home-standards-section" id="standards" aria-label="Supply standards">
              <div className="standards-sticky">
                <div className="standards-marquee" aria-hidden="true">
                  <div className="standards-track">
                    <span>The Standard Behind Our Supply</span>
                    <span>The Standard Behind Our Supply</span>
                    <span>The Standard Behind Our Supply</span>
                    <span>The Standard Behind Our Supply</span>
                  </div>
                </div>
      
                <div className="standards-stage">
                  <div className="standards-copy">
                    <article className="standards-step standards-step--left" data-step="0">
                      <div className="standards-step-text">
                        <h3>Cultivation</h3>
                        <p>We grow organic produce through disciplined farming practices focused on quality consistency and controlled production from soil to harvest</p>
                      </div>
                    </article>
                    <article className="standards-step standards-step--right" data-step="1">
                      <div className="standards-step-text">
                        <p className="standards-lead">Direct sourcing and quality checks ensure every product meets consistent supply standards</p>
                      </div>
                    </article>
                    <article className="standards-step standards-step--left" data-step="2">
                      <div className="standards-step-text">
                        <p className="standards-lead">Carefully selected seeds support continuous crop improvement and long term quality</p>
                      </div>
                    </article>
                  </div>
      
                  <div className="standards-visual" aria-hidden="true">
                    
                    <div className="standards-diagram" data-step="0">
                      <svg className="diagram-svg" viewBox="0 0 860 860">
                        <g fill="none" stroke="rgba(231,235,170,0.45)" strokeWidth="2">
                          <circle cx="430" cy="430" r="205" />
                          <circle cx="430" cy="430" r="300" />
                        </g>
                        <g fill="#efeaa6">
                          <circle cx="404" cy="131" r="22" fill="none" stroke="#efeaa6" strokeWidth="3" />
                          <circle cx="709" cy="288" r="38" />
                          <circle cx="302" cy="267" r="40" />
                          <circle cx="537" cy="601" r="40" />
                          <circle cx="237" cy="500" r="13" />
                          <circle cx="639" cy="408" r="15" fill="none" stroke="#efeaa6" strokeWidth="3" />
                          <circle cx="420" cy="728" r="23" />
                          <circle cx="175" cy="578" r="24" fill="none" stroke="#efeaa6" strokeWidth="3" />
                          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 430 430" to="360 430 430" dur="24s" repeatCount="indefinite" />
                        </g>
                        <image href="/assets/standards-tomato.png" x="315" y="350" width="230" height="161" />
                      </svg>
                    </div>
                    
                    <div className="standards-diagram" data-step="1">
                      <svg className="diagram-svg" viewBox="0 0 760 760">
                        <defs>
                          <radialGradient id="quadGlow" gradientUnits="userSpaceOnUse" cx="380" cy="380" r="300">
                            <stop offset="0" stopColor="#d2dd8e" stopOpacity="0.9" />
                            <stop offset="0.55" stopColor="#7c9450" stopOpacity="0.35" />
                            <stop offset="1" stopColor="#2a431f" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="380" cy="380" r="300" fill="#0a330e" />
                        <g>
                          <path d="M380 380 L380 680 A300 300 0 0 0 80 380 Z" fill="url(#quadGlow)" />
                          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 380 380" to="360 380 380" dur="6s" repeatCount="indefinite" />
                        </g>
                        <circle cx="380" cy="380" r="300" fill="none" stroke="rgba(231,235,170,0.5)" strokeWidth="2" />
                        <g stroke="rgba(231,235,170,0.5)" strokeWidth="2">
                          <line x1="80" y1="380" x2="680" y2="380" />
                          <line x1="380" y1="80" x2="380" y2="680" />
                        </g>
                        <image href="/assets/standards-tomato.png" x="265" y="300" width="230" height="161" />
                      </svg>
                    </div>
                    
                    <div className="standards-diagram" data-step="2">
                      <svg className="diagram-svg" viewBox="0 0 860 850">
                        <g fill="none" stroke="#e7ebaa" strokeWidth="2">
                          <circle cx="320" cy="640" r="110">
                            <animate attributeName="r" values="40;305" dur="5s" begin="0s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="710;445" dur="5s" begin="0s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.95;0" dur="5s" begin="0s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="320" cy="640" r="110">
                            <animate attributeName="r" values="40;305" dur="5s" begin="-1.25s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="710;445" dur="5s" begin="-1.25s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.95;0" dur="5s" begin="-1.25s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="320" cy="640" r="110">
                            <animate attributeName="r" values="40;305" dur="5s" begin="-2.5s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="710;445" dur="5s" begin="-2.5s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.95;0" dur="5s" begin="-2.5s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="320" cy="640" r="110">
                            <animate attributeName="r" values="40;305" dur="5s" begin="-3.75s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="710;445" dur="5s" begin="-3.75s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.95;0" dur="5s" begin="-3.75s" repeatCount="indefinite" />
                          </circle>
                        </g>
                        <g stroke="rgba(231,235,170,0.6)" strokeWidth="2">
                          <line x1="320" y1="490" x2="688" y2="490" />
                          <line x1="320" y1="482" x2="320" y2="498" />
                          <line x1="688" y1="482" x2="688" y2="498" />
                        </g>
                        <text x="705" y="501" fill="#e8e8b0" fontFamily="Fustat, Arial, sans-serif" fontSize="34">Regrowth Cycle</text>
                        <image href="/assets/standards-tomato.png" x="205" y="590" width="230" height="161" />
                      </svg>
                    </div>
                  </div>
                </div>
      
                <div className="standards-progress" aria-hidden="true">
                  <span data-step="0"></span>
                  <span data-step="1"></span>
                  <span data-step="2"></span>
                </div>
              </div>
            </section>
      
            
            <section className="home-static-section home-brands-section" id="brands" aria-label="Trusted by growing brands" style={{ display: 'none' }}>
              <img src="/assets/brands-bg.png" width="1920" height="852" alt="Trusted by growing brands" />
              <div className="brands-curve" aria-hidden="true">
                <span className="bc-logo" style={{ '--i': '0', backgroundImage: 'url(\'/assets/brands-logo-0.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '1', backgroundImage: 'url(\'/assets/brands-logo-1.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '2', backgroundImage: 'url(\'/assets/brands-logo-2.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '3', backgroundImage: 'url(\'/assets/brands-logo-3.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '4', backgroundImage: 'url(\'/assets/brands-logo-4.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '5', backgroundImage: 'url(\'/assets/brands-logo-5.png\')' }}></span>
                <span className="bc-logo" style={{ '--i': '6', backgroundImage: 'url(\'/assets/brands-logo-6.png\')' }}></span>
              </div>
            </section>
      
            <section className="home-static-section home-footer-section" id="contact" aria-label="Footer">
              <img src="/assets/home-section-footer.png?v=exact-1" width="1920" height="3219" alt="Grow a better future and contact information" />
              <div className="footer-hand-zoom" aria-hidden="true">
                <img src="/assets/footer-hand-card-clean.png?v=4" width="486" height="536" alt="" />
              </div>
              <a className="section-hotspot nav-pill mission-section-link" href="/about">Mission &amp; Team <span aria-hidden="true">→</span></a>
              <a className="section-hotspot nav-pill contact-section-link" href="/contact">Contact us <span aria-hidden="true">→</span></a>
      
              
              <div className="fig-stage home-grow-ov" aria-label="Grow a better future">
                <p className="el wGrow" style={{ '--x': '717', '--y': '144', '--w': '443' }}>Grow a Better<br />Future</p>
                <svg className="el wGrowHeart box heart-draw" data-heart-draw style={{ '--x': '485', '--y': '378', '--w': '948.702', '--h': '642' }} viewBox="0 0 948.702 642" fill="none" preserveAspectRatio="none" aria-hidden="true"><path className="heart-reveal-stroke" d="M477.076 1C539.617 1 588.628 24.2234 618.102 64.7539C647.585 105.298 657.64 163.33 641.901 233.173L643.786 233.809C668.097 180.698 714.935 141.515 770.916 138.2H770.966C849.025 136.802 901.1 164.799 927.431 211.72C953.591 258.338 954.493 323.901 929.775 398.527L929.187 400.292C875.355 560.6 684.624 641 489.374 641C294.144 641 95.1633 560.604 25.0098 400.21C-6.81111 327.443 -6.11775 261.245 21.8555 213.642C49.808 166.073 105.155 136.811 183.228 138.199C239.213 141.51 286.054 180.696 310.366 233.809L312.251 233.173C296.512 163.33 306.567 105.298 336.051 64.7539C365.524 24.2233 414.536 1.00005 477.076 1Z" stroke="#a5d200" strokeWidth="2.4" /></svg>
                <div className="el box wTeam" style={{ '--x': '610', '--y': '333', '--w': '700', '--h': '700' }}><img src="/assets/whatwedo/team.jpg" alt="The House of Organic team" /></div>
                <a className="el box wProcessPill" href="/what-we-do" style={{ '--x': '825', '--y': '857', '--w': '228', '--h': '65' }}><span className="wOurProcess">Our Process <span className="wop-arrow" aria-hidden="true">→</span></span></a>
              </div>
              
              <div className="fig-stage home-ftr-ov" aria-label="Site footer">
                <div className="el box footer-divider" style={{ '--x': '42.5', '--y': '0', '--w': '1834.5', '--h': '1' }}></div>
                <div className="m-foot-nav">
                <a className="el tFoot foot-link" href="/" style={{ '--x': '41', '--y': '50.5', '--w': '160' }}>Homepage</a>
                <a className="el tFoot foot-link" href="/about" style={{ '--x': '41', '--y': '85.7', '--w': '160' }}>About</a>
                <a className="el tFoot foot-link" href="/contact" style={{ '--x': '41', '--y': '120.6', '--w': '160' }}>Contact</a>
                <a className="el tFoot foot-link" href="/products" style={{ '--x': '358.5', '--y': '50.5', '--w': '160' }}>Products</a>
                <a className="el tFoot foot-link" href="/what-we-do" style={{ '--x': '358.5', '--y': '85.95', '--w': '160' }}>What we do</a>
                <a className="el tFoot foot-link" href="/calendar" style={{ '--x': '358.5', '--y': '121.4', '--w': '200' }}>Product Calendar</a>
                </div>
                <div className="m-foot-info">
                <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '50', '--w': '120' }}>Phone</p>
                <a className="el tFoot foot-link" href="tel:05262354585" style={{ '--x': '944.83', '--y': '68.5', '--w': '160' }}>0526-2354-585</a>
                <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '105.5', '--w': '120' }}>Whatsapp</p>
                <a className="el tFoot foot-link" href="https://wa.me/97105262354585" style={{ '--x': '944.83', '--y': '124', '--w': '160' }}>0526-2354-585</a>
                <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '161', '--w': '120' }}>E-mail</p>
                <a className="el tFoot foot-link" href="mailto:thorganic@gmail.com" style={{ '--x': '944.83', '--y': '179.5', '--w': '200' }}>thorganic@gmail.com</a>
                <p className="el tFootLbl" style={{ '--x': '1348.6', '--y': '50', '--w': '120' }}>Address</p>
                <p className="el tFoot" style={{ '--x': '1345.83', '--y': '68.5', '--w': '200' }}>701 nkshore, abudabi<br />lorem ipsum 10</p>
                <p className="el tFootLbl" style={{ '--x': '1348.6', '--y': '124', '--w': '120' }}>We are open</p>
                <p className="el tFoot" style={{ '--x': '1348.6', '--y': '142.5', '--w': '200' }}>Mon &ndash; Sat: 10 AM &ndash; 8 PM</p>
                </div>
                <div className="m-foot-social">
                <a className="el box foot-social" href="https://facebook.com" target="_blank" rel="noopener" style={{ '--x': '1815', '--y': '50', '--w': '29.08', '--h': '29.08' }} aria-label="Facebook">
                  <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
                    <path d="M18.5492 7.69007L16.4259 7.6875C14.3668 7.6875 13.0366 9.05167 13.0366 11.1654V12.7678H10.9062V15.6677H13.0366L13.0341 21.8174H16.0148L16.0174 15.6677H18.4619L18.4599 12.7685H16.0174V11.4088C16.0174 10.755 16.1722 10.4242 17.0232 10.4242L18.5428 10.4236L18.5492 7.69007Z" fill="#143F00" />
                  </svg>
                </a>
                <a className="el box foot-social" href="https://instagram.com" target="_blank" rel="noopener" style={{ '--x': '1849.32', '--y': '50', '--w': '29.08', '--h': '29.08' }} aria-label="Instagram">
                  <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
                    <path d="M11.3904 7.19141H17.6245C19.9994 7.19141 21.9289 9.121 21.9289 11.4959V17.7299C21.9289 18.8716 21.4754 19.9664 20.6682 20.7737C19.8609 21.5809 18.7661 22.0344 17.6245 22.0344H11.3904C9.01553 22.0344 7.08594 20.1048 7.08594 17.7299V11.4959C7.08594 10.3543 7.53944 9.2594 8.34669 8.45216C9.15393 7.64491 10.2488 7.19141 11.3904 7.19141ZM11.242 8.67571C10.5334 8.67571 9.85382 8.95719 9.35277 9.45824C8.85172 9.95929 8.57024 10.6389 8.57024 11.3474V17.8784C8.57024 19.3552 9.7651 20.5501 11.242 20.5501H17.7729C18.4815 20.5501 19.1611 20.2686 19.6621 19.7676C20.1632 19.2665 20.4446 18.587 20.4446 17.8784V11.3474C20.4446 9.87057 19.2498 8.67571 17.7729 8.67571H11.242ZM18.4037 9.78893C18.6498 9.78893 18.8857 9.88667 19.0597 10.0606C19.2337 10.2346 19.3314 10.4706 19.3314 10.7166C19.3314 10.9627 19.2337 11.1986 19.0597 11.3726C18.8857 11.5466 18.6498 11.6443 18.4037 11.6443C18.1577 11.6443 17.9217 11.5466 17.7478 11.3726C17.5738 11.1986 17.476 10.9627 17.476 10.7166C17.476 10.4706 17.5738 10.2346 17.7478 10.0606C17.9217 9.88667 18.1577 9.78893 18.4037 9.78893ZM14.5074 10.9022C15.4916 10.9022 16.4354 11.2931 17.1313 11.989C17.8272 12.6849 18.2182 13.6288 18.2182 14.6129C18.2182 15.5971 17.8272 16.5409 17.1313 17.2368C16.4354 17.9327 15.4916 18.3237 14.5074 18.3237C13.5233 18.3237 12.5794 17.9327 11.8835 17.2368C11.1876 16.5409 10.7967 15.5971 10.7967 14.6129C10.7967 13.6288 11.1876 12.6849 11.8835 11.989C12.5794 11.2931 13.5233 10.9022 14.5074 10.9022ZM14.5074 12.3865C13.9169 12.3865 13.3506 12.621 12.9331 13.0386C12.5156 13.4561 12.281 14.0224 12.281 14.6129C12.281 15.2034 12.5156 15.7697 12.9331 16.1872C13.3506 16.6048 13.9169 16.8394 14.5074 16.8394C15.0979 16.8394 15.6642 16.6048 16.0818 16.1872C16.4993 15.7697 16.7339 15.2034 16.7339 14.6129C16.7339 14.0224 16.4993 13.4561 16.0818 13.0386C15.6642 12.621 15.0979 12.3865 14.5074 12.3865Z" fill="#143F00" />
                  </svg>
                </a>
                </div>
                <div className="m-foot-bottom">
                <p className="el tFoot" style={{ '--x': '41', '--y': '265', '--w': '260' }}>2026 &copy; thehouseoforganic</p>
                <a className="el tFoot foot-link" href="/contact" style={{ '--x': '1805', '--y': '265', '--w': '90' }}>Inquire <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
            </section>
      
            <nav className="menu-panel" data-menu-panel aria-label="Website pages">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/what-we-do">What we do</a>
              <a href="/products">Products</a>
              <a href="/calendar">Calendar</a>
              <a href="/contact">Contact</a>
            </nav>
          </main>
      <SiteFooter />
      <LegacyScripts />
    </>
  );
}
