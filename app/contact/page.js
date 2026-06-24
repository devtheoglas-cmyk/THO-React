// Auto-converted from contact.html — faithful 1:1 port of the static THO build.
import LegacyScripts from "@/app/components/LegacyScripts";
import SiteFooter from "@/app/components/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <main className="fig-stage contact-stage" aria-label="THO Website Contact Page">
            
            <div className="el box c-cream" style={{ '--x': '0', '--y': '979', '--w': '1920', '--h': '857' }}></div>
            <div className="el box c-footbg" style={{ '--x': '0', '--y': '1836', '--w': '1920', '--h': '320' }}></div>
      
            
            <div className="el box c-herobox" style={{ '--x': '0', '--y': '0', '--w': '1920', '--h': '979' }}>
              <img src="/assets/contact/hero.jpg" alt="Close-up of fresh broccoli" />
              <span className="c-hero-tint" aria-hidden="true"></span>
            </div>
            <button className="el tHdr hdr-menu" type="button" data-menu style={{ '--x': '41', '--y': '63', '--w': '120' }} aria-label="Open menu">Menu <span className="hdr-plus" aria-hidden="true"></span></button>
            <a className="el hdr-logo box" href="/" style={{ '--x': '879', '--y': '20', '--w': '161', '--h': '109' }} aria-label="The House of Organic — home"><img src="/assets/home-logo.png" alt="The House of Organic" /></a>
            <a className="el tHdr hdr-inquire" href="#top" style={{ '--x': '1778', '--y': '66', '--w': '101' }}>INQUIRE</a>
      
            <h1 className="el cHeading" style={{ '--x': '41', '--y': '267', '--w': '900' }}>Contact us</h1>
            <a className="el cInfo" href="mailto:hello@tho.com" style={{ '--x': '41', '--y': '471', '--w': '300' }}>HELLO@THO.COM</a>
            <a className="el cInfo" href="tel:+97142526145" style={{ '--x': '408', '--y': '471', '--w': '240' }}>+971 42526145</a>
            <p className="el cInfo" style={{ '--x': '408', '--y': '515', '--w': '400' }}>Office No. 2D1, Hamarain Center, Dubai, United Arab Emirates</p>
      
            
            <label className="el cFormLabel" htmlFor="c-name" style={{ '--x': '1036', '--y': '546', '--w': '300' }}>NAME *</label>
            <input className="el box c-input" id="c-name" type="text" autoComplete="name" style={{ '--x': '1037', '--y': '568', '--w': '403', '--h': '38' }} />
            <label className="el cFormLabel" htmlFor="c-company" style={{ '--x': '1475', '--y': '546', '--w': '340' }}>COMPANY NAME *</label>
            <input className="el box c-input" id="c-company" type="text" autoComplete="organization" style={{ '--x': '1476', '--y': '568', '--w': '403', '--h': '38' }} />
            <label className="el cFormLabel" htmlFor="c-email" style={{ '--x': '1036', '--y': '633', '--w': '300' }}>E-MAIL *</label>
            <input className="el box c-input" id="c-email" type="email" autoComplete="email" style={{ '--x': '1037', '--y': '655', '--w': '839', '--h': '38' }} />
            <label className="el cFormLabel" htmlFor="c-message" style={{ '--x': '1037', '--y': '719', '--w': '300' }}>MESSAGE</label>
            <textarea className="el box c-input" id="c-message" rows="2" style={{ '--x': '1039', '--y': '748', '--w': '839', '--h': '84' }}></textarea>
            <button className="el box c-submit" type="button" data-contact-submit style={{ '--x': '1645', '--y': '862', '--w': '234', '--h': '58' }}>
              <span className="cSubmit">Submit</span>
              <span className="cSubmit" aria-hidden="true">→</span>
            </button>
      
            
            <h2 className="el cFarmH" style={{ '--x': '40', '--y': '1077', '--w': '487' }}>Our Farming Base in Abu Dhabi</h2>
            <p className="el cBody" style={{ '--x': '40', '--y': '1230', '--w': '587' }}>We’re currently operating from Abu Dhabi, supporting UAE-grown organic produce through local farming and regional supply networks.</p>
            <img className="el box c-map" src="/assets/contact/map.png" alt="World map highlighting Abu Dhabi, UAE" style={{ '--x': '40', '--y': '1398', '--w': '859', '--h': '422' }} />
            <a className="el box c-findloc" href="https://maps.google.com/?q=Hamarain%20Center%20Dubai" target="_blank" rel="noopener" style={{ '--x': '43', '--y': '1768', '--w': '191', '--h': '37' }}>
              <span className="cFindLoc">Find Location</span>
            </a>
      
            
            <img className="el box c-lettuce" src="/assets/contact/lettuce.jpg" alt="Fresh lettuce leaves" style={{ '--x': '968', '--y': '979', '--w': '952', '--h': '857' }} />
            <p className="el cBePart" style={{ '--x': '1016', '--y': '1548', '--w': '593' }}>Be part of The House of Organic’s 2026 seasonal farming and supply updates.</p>
      
            <div className="el box c-card" style={{ '--x': '1635', '--y': '1025', '--w': '244', '--h': '243' }}></div>
            <p className="el cCardT" style={{ '--x': '1657', '--y': '1048', '--w': '220' }}>Latest Update</p>
            <p className="el cCardB" style={{ '--x': '1657', '--y': '1174', '--w': '230' }}>october 2026 -<br />starting new seasonal harvest cycles</p>
      
            <div className="el box c-card" style={{ '--x': '1391', '--y': '1260', '--w': '244', '--h': '243' }}></div>
            <p className="el cCardT" style={{ '--x': '1413', '--y': '1288', '--w': '220' }}>Why We Grow Organic</p>
            <p className="el cCardB" style={{ '--x': '1413', '--y': '1419', '--w': '218' }}>We grow organic produce for healthier living and safer supply.</p>
      

            <div className="fig-foot">
            <div className="el box footer-divider" style={{ '--x': '42', '--y': '1856', '--w': '1835', '--h': '1' }}></div>
            <a className="el tFoot foot-link" href="/" style={{ '--x': '42', '--y': '1886', '--w': '160' }}>Homepage</a>
            <a className="el tFoot foot-link" href="/about" style={{ '--x': '42', '--y': '1922', '--w': '160' }}>About</a>
            <a className="el tFoot foot-link" href="/contact" style={{ '--x': '41', '--y': '1957', '--w': '160' }}>Contact</a>
            <a className="el tFoot foot-link" href="/products" style={{ '--x': '359', '--y': '1886', '--w': '160' }}>Products</a>
            <a className="el tFoot foot-link" href="/what-we-do" style={{ '--x': '359', '--y': '1922', '--w': '160' }}>What we do</a>
            <a className="el tFoot foot-link" href="/calendar" style={{ '--x': '359', '--y': '1957', '--w': '200' }}>Product Calendar</a>
            <p className="el tFootLbl" style={{ '--x': '945', '--y': '1886', '--w': '120' }}>Phone</p>
            <a className="el tFoot foot-link" href="tel:05262354585" style={{ '--x': '945', '--y': '1904', '--w': '160' }}>0526-2354-585</a>
            <p className="el tFootLbl" style={{ '--x': '945', '--y': '1942', '--w': '120' }}>Whatsapp</p>
            <a className="el tFoot foot-link" href="https://wa.me/97105262354585" style={{ '--x': '945', '--y': '1960', '--w': '160' }}>0526-2354-585</a>
            <p className="el tFootLbl" style={{ '--x': '945', '--y': '1997', '--w': '120' }}>E-mail</p>
            <a className="el tFoot foot-link" href="mailto:thorganic@gmail.com" style={{ '--x': '945', '--y': '2016', '--w': '200' }}>thorganic@gmail.com</a>
            <p className="el tFootLbl" style={{ '--x': '1349', '--y': '1886', '--w': '120' }}>Address</p>
            <p className="el tFoot" style={{ '--x': '1346', '--y': '1904', '--w': '200' }}>701 nkshore, abudabi<br />lorem ipsum 10</p>
            <p className="el tFootLbl" style={{ '--x': '1349', '--y': '1960', '--w': '120' }}>We are open</p>
            <p className="el tFoot" style={{ '--x': '1349', '--y': '1978', '--w': '200' }}>Mon &ndash; Sat: 10 AM &ndash; 8 PM</p>
            <a className="el box foot-social" href="https://facebook.com" target="_blank" rel="noopener" style={{ '--x': '1815', '--y': '1886', '--w': '29.08', '--h': '29.08' }} aria-label="Facebook">
              <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
                <path d="M18.5492 7.69007L16.4259 7.6875C14.3668 7.6875 13.0366 9.05167 13.0366 11.1654V12.7678H10.9062V15.6677H13.0366L13.0341 21.8174H16.0148L16.0174 15.6677H18.4619L18.4599 12.7685H16.0174V11.4088C16.0174 10.755 16.1722 10.4242 17.0232 10.4242L18.5428 10.4236L18.5492 7.69007Z" fill="#143F00" />
              </svg>
            </a>
            <a className="el box foot-social" href="https://instagram.com" target="_blank" rel="noopener" style={{ '--x': '1849', '--y': '1886', '--w': '29.08', '--h': '29.08' }} aria-label="Instagram">
              <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
                <path d="M11.3904 7.19141H17.6245C19.9994 7.19141 21.9289 9.121 21.9289 11.4959V17.7299C21.9289 18.8716 21.4754 19.9664 20.6682 20.7737C19.8609 21.5809 18.7661 22.0344 17.6245 22.0344H11.3904C9.01553 22.0344 7.08594 20.1048 7.08594 17.7299V11.4959C7.08594 10.3543 7.53944 9.2594 8.34669 8.45216C9.15393 7.64491 10.2488 7.19141 11.3904 7.19141ZM11.242 8.67571C10.5334 8.67571 9.85382 8.95719 9.35277 9.45824C8.85172 9.95929 8.57024 10.6389 8.57024 11.3474V17.8784C8.57024 19.3552 9.7651 20.5501 11.242 20.5501H17.7729C18.4815 20.5501 19.1611 20.2686 19.6621 19.7676C20.1632 19.2665 20.4446 18.587 20.4446 17.8784V11.3474C20.4446 9.87057 19.2498 8.67571 17.7729 8.67571H11.242ZM18.4037 9.78893C18.6498 9.78893 18.8857 9.88667 19.0597 10.0606C19.2337 10.2346 19.3314 10.4706 19.3314 10.7166C19.3314 10.9627 19.2337 11.1986 19.0597 11.3726C18.8857 11.5466 18.6498 11.6443 18.4037 11.6443C18.1577 11.6443 17.9217 11.5466 17.7478 11.3726C17.5738 11.1986 17.476 10.9627 17.476 10.7166C17.476 10.4706 17.5738 10.2346 17.7478 10.0606C17.9217 9.88667 18.1577 9.78893 18.4037 9.78893ZM14.5074 10.9022C15.4916 10.9022 16.4354 11.2931 17.1313 11.989C17.8272 12.6849 18.2182 13.6288 18.2182 14.6129C18.2182 15.5971 17.8272 16.5409 17.1313 17.2368C16.4354 17.9327 15.4916 18.3237 14.5074 18.3237C13.5233 18.3237 12.5794 17.9327 11.8835 17.2368C11.1876 16.5409 10.7967 15.5971 10.7967 14.6129C10.7967 13.6288 11.1876 12.6849 11.8835 11.989C12.5794 11.2931 13.5233 10.9022 14.5074 10.9022ZM14.5074 12.3865C13.9169 12.3865 13.3506 12.621 12.9331 13.0386C12.5156 13.4561 12.281 14.0224 12.281 14.6129C12.281 15.2034 12.5156 15.7697 12.9331 16.1872C13.3506 16.6048 13.9169 16.8394 14.5074 16.8394C15.0979 16.8394 15.6642 16.6048 16.0818 16.1872C16.4993 15.7697 16.7339 15.2034 16.7339 14.6129C16.7339 14.0224 16.4993 13.4561 16.0818 13.0386C15.6642 12.621 15.0979 12.3865 14.5074 12.3865Z" fill="#143F00" />
              </svg>
            </a>
            <p className="el tFoot" style={{ '--x': '41', '--y': '2101', '--w': '260' }}>2026 &copy; thehouseoforganic</p>
            <a className="el tFoot foot-link" href="#top" style={{ '--x': '1805', '--y': '2101', '--w': '90' }}>Inquire <span aria-hidden="true">&rarr;</span></a>
            </div>

            <span id="top" className="el" style={{ '--x': '0', '--y': '0', '--w': '1' }} aria-hidden="true"></span>
      
            <nav className="menu-panel" data-menu-panel aria-label="Website pages">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/what-we-do">What we do</a>
              <a href="/products">Products</a>
              <a href="/calendar">Calendar</a>
              <a href="/range">Our Range</a><a href="/contact">Contact</a>
            </nav>
          </main>
      <SiteFooter />
      <LegacyScripts />
    </>
  );
}
