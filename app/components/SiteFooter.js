// Shared mobile footer — one source of truth so every page's footer is identical.
// Hidden on desktop (each page keeps its own figma-positioned footer); shown ≤760px,
// where each page's original footer is hidden via CSS. Matches the About design:
// "Want to know more?" CTA card + 2-column nav + label/value contact + social.
const FB = (
  <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
    <path
      d="M18.5492 7.69007L16.4259 7.6875C14.3668 7.6875 13.0366 9.05167 13.0366 11.1654V12.7678H10.9062V15.6677H13.0366L13.0341 21.8174H16.0148L16.0174 15.6677H18.4619L18.4599 12.7685H16.0174V11.4088C16.0174 10.755 16.1722 10.4242 17.0232 10.4242L18.5428 10.4236L18.5492 7.69007Z"
      fill="#143F00"
    />
  </svg>
);

const IG = (
  <svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7" />
    <path
      d="M11.3904 7.19141H17.6245C19.9994 7.19141 21.9289 9.121 21.9289 11.4959V17.7299C21.9289 18.8716 21.4754 19.9664 20.6682 20.7737C19.8609 21.5809 18.7661 22.0344 17.6245 22.0344H11.3904C9.01553 22.0344 7.08594 20.1048 7.08594 17.7299V11.4959C7.08594 10.3543 7.53944 9.2594 8.34669 8.45216C9.15393 7.64491 10.2488 7.19141 11.3904 7.19141ZM11.242 8.67571C10.5334 8.67571 9.85382 8.95719 9.35277 9.45824C8.85172 9.95929 8.57024 10.6389 8.57024 11.3474V17.8784C8.57024 19.3552 9.7651 20.5501 11.242 20.5501H17.7729C18.4815 20.5501 19.1611 20.2686 19.6621 19.7676C20.1632 19.2665 20.4446 18.587 20.4446 17.8784V11.3474C20.4446 9.87057 19.2498 8.67571 17.7729 8.67571H11.242ZM18.4037 9.78893C18.6498 9.78893 18.8857 9.88667 19.0597 10.0606C19.2337 10.2346 19.3314 10.4706 19.3314 10.7166C19.3314 10.9627 19.2337 11.1986 19.0597 11.3726C18.8857 11.5466 18.6498 11.6443 18.4037 11.6443C18.1577 11.6443 17.9217 11.5466 17.7478 11.3726C17.5738 11.1986 17.476 10.9627 17.476 10.7166C17.476 10.4706 17.5738 10.2346 17.7478 10.0606C17.9217 9.88667 18.1577 9.78893 18.4037 9.78893ZM14.5074 10.9022C15.4916 10.9022 16.4354 11.2931 17.1313 11.989C17.8272 12.6849 18.2182 13.6288 18.2182 14.6129C18.2182 15.5971 17.8272 16.5409 17.1313 17.2368C16.4354 17.9327 15.4916 18.3237 14.5074 18.3237C13.5233 18.3237 12.5794 17.9327 11.8835 17.2368C11.1876 16.5409 10.7967 15.5971 10.7967 14.6129C10.7967 13.6288 11.1876 12.6849 11.8835 11.989C12.5794 11.2931 13.5233 10.9022 14.5074 10.9022ZM14.5074 12.3865C13.9169 12.3865 13.3506 12.621 12.9331 13.0386C12.5156 13.4561 12.281 14.0224 12.281 14.6129C12.281 15.2034 12.5156 15.7697 12.9331 16.1872C13.3506 16.6048 13.9169 16.8394 14.5074 16.8394C15.0979 16.8394 15.6642 16.6048 16.0818 16.1872C16.4993 15.7697 16.7339 15.2034 16.7339 14.6129C16.7339 14.0224 16.4993 13.4561 16.0818 13.0386C15.6642 12.621 15.0979 12.3865 14.5074 12.3865Z"
      fill="#143F00"
    />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer className="m-sitefoot" aria-label="Site footer">
      <img className="sf-card" src="/assets/about/fig-footer-card.png" alt="The House of Organic" />
      <h2 className="sf-cta">
        Want to know
        <br />
        more?
      </h2>
      <a className="sf-btn" href="/contact">
        Contact us <span aria-hidden="true">→</span>
      </a>

      <div className="sf-nav">
        <a href="/">Homepage</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/products">Products</a>
        <a href="/what-we-do">What we do</a>
        <a href="/calendar">Product Calendar</a>
      </div>

      <div className="sf-info">
        <span className="sf-lbl">Phone</span>
        <a href="tel:05262354585">0526-2354-585</a>
        <span className="sf-lbl">Whatsapp</span>
        <a href="https://wa.me/97105262354585" target="_blank" rel="noopener">0526-2354-585</a>
        <span className="sf-lbl">E-mail</span>
        <a href="mailto:thorganic@gmail.com">thorganic@gmail.com</a>
        <span className="sf-lbl">Address</span>
        <span>701 nkshore, abudabi<br />lorem ipsum 10</span>
        <span className="sf-lbl">We are open</span>
        <span>Mon &ndash; Sat: 10 AM &ndash; 8 PM</span>
      </div>

      <div className="sf-social">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">{FB}</a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">{IG}</a>
      </div>

      <div className="sf-bottom">
        <span>2026 &copy; thehouseoforganic</span>
        <a href="/contact">Inquire <span aria-hidden="true">&rarr;</span></a>
      </div>
    </footer>
  );
}
