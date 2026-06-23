// Auto-converted from product-detail.html — faithful 1:1 port of the static THO build.
import LegacyScripts from "@/app/components/LegacyScripts";
import SiteFooter from "@/app/components/SiteFooter";
import { DETAIL } from "@/app/data/catalogue";

export default function ProductDetailPage() {
  return (
    <>
      <main className="pd detail-page" aria-label="THO Website Product Detail Page">
            <div className="pd-split" style={{ opacity: 0, transition: "opacity .15s ease" }}>
              
              <div className="pd-left" id="pdCard">
                <div className="pd-cardin">
                  <div className="pdPhoto" id="pdPhoto"><img src="/assets/product-seville-cut.png?v=2" alt="" /></div>
                  <a className="pdBtn pdReturn" href="/products" data-back><span aria-hidden="true">&larr;</span> Return</a>
                  <a className="pdBtn pdInquire" href="/contact">INQUIRE</a>
                  <div className="pdTagRow" style={{ top: 'calc(159*var(--u))' }}><span className="pdTag" id="pdCatTag">Seasonal Fruits</span></div>
                  <h1 className="pdName" id="pdName">Seville<br />orange</h1>
                  <div className="pdTagRow" style={{ top: 'calc(709*var(--u))' }}>
                    <span className="pdTag" id="pdSeason1">Spring</span>
                    <span className="pdTag" id="pdSeason2">Winter</span>
                  </div>
                  <p className="pdStores">Available Stores:</p>
                  <div className="pdStoreRow">
                    <span className="pdStorePill"><img src="/assets/product-detail/store-1.png" alt="Store" /></span>
                    <span className="pdStorePill"><img src="/assets/product-detail/store-2.png" alt="Store" /></span>
                    <span className="pdStorePill"><img src="/assets/product-detail/store-3.png" alt="Store" /></span>
                    <span className="pdStorePill"><img src="/assets/product-detail/store-1.png" alt="Store" /></span>
                    <span className="pdStorePill"><img src="/assets/product-detail/store-5.png" alt="Store" /></span>
                  </div>
                </div>
              </div>
      
              
              <div className="pd-right">
                <p className="el pdLabel" style={{ '--x': '36', '--y': '110', '--w': '300' }}>Description</p>
                <p className="el pdPara" id="pdDesc" style={{ '--x': '36', '--y': '158', '--w': '811' }}>We specialize in growing Seville oranges with bold citrus flavour, fragrant peel, and a naturally sharp character suited for marmalade, zest, sauces, and flavour-rich culinary applications. Our UAE farms cultivate seasonal citrus through disciplined organic farming focused on freshness, consistency, and natural quality.</p>
      
                <span className="pdCheck" style={{ '--x': '39', '--y': '301' }} aria-hidden="true">&#10003;</span>
                <p className="el pdSpec" style={{ '--x': '69', '--y': '300', '--w': '600' }}>Category: <span id="pdCat">Citrus Fruit</span></p>
                <span className="pdCheck" style={{ '--x': '39', '--y': '347' }} aria-hidden="true">&#10003;</span>
                <p className="el pdSpec" style={{ '--x': '69', '--y': '346', '--w': '600' }}>Type / Origin: <span id="pdType">Seasonal Fruit</span></p>
                <span className="pdCheck" style={{ '--x': '39', '--y': '395' }} aria-hidden="true">&#10003;</span>
                <p className="el pdSpec" style={{ '--x': '69', '--y': '394', '--w': '600' }}>Taste Profile: <span id="pdTaste">Bitter and aromatic</span></p>
                <span className="pdCheck" style={{ '--x': '39', '--y': '441' }} aria-hidden="true">&#10003;</span>
                <p className="el pdSpec" style={{ '--x': '69', '--y': '440', '--w': '600' }}>Availability Season: <span id="pdAvail">Winter to Early Spring</span></p>
      
                <div className="el box pd-photo-img pd-parallax" style={{ '--x': '37', '--y': '508', '--w': '719', '--h': '480' }}><img id="pdScene" src="/assets/product-detail/ph-top.jpg" alt="Organic farm" /></div>
      
                <p className="el pdLabel" id="pdLocalLabel" style={{ '--x': '36', '--y': '1039', '--w': '300' }}>Local Farm</p>
                <p className="el pdPara" id="pdLocal" style={{ '--x': '36', '--y': '1087', '--w': '863' }}>Grown locally on UAE farms through carefully managed seasonal cultivation practices focused on flavour development, healthy crop growth, and reliable product quality. Our farming approach is built around disciplined cultivation practices, carefully managed handling systems, and standards focused on maintaining safe and consistent organic produce.</p>

      
                <p className="el pdLabel" style={{ '--x': '36', '--y': '1240', '--w': '300' }}>Farming Standards</p>
                <span className="pdNum" style={{ '--x': '62', '--y': '1288' }}>01</span>
                <p className="el pdStd" style={{ '--x': '137', '--y': '1303', '--w': '600' }}>Prepared through healthy organic soil practices</p>
                <span className="pdNum" style={{ '--x': '62', '--y': '1339' }}>02</span>
                <p className="el pdStd" style={{ '--x': '137', '--y': '1354', '--w': '600' }}>200 Acres Dedicated to Organic Farming</p>
                <span className="pdNum" style={{ '--x': '62', '--y': '1390' }}>03</span>
                <p className="el pdStd" style={{ '--x': '137', '--y': '1405', '--w': '600' }}>Carefully handled to maintain freshness and quality</p>

                <p className="el pdLabel" style={{ '--x': '37', '--y': '1490', '--w': '300' }}>Organic Systems</p>
                <div className="el box pdOrgCard" style={{ '--x': '37', '--y': '1538', '--w': '835', '--h': '152' }}></div>
                <div className="pdOrgIco" style={{ '--x': '64', '--y': '1550' }}><img src="/assets/product-detail/ico-1.png" alt="" /></div>
                <p className="el pdOrgTitle" style={{ '--x': '113', '--y': '1571', '--w': '600' }}>Integrated Farm Care</p>
                <p className="el pdOrgDesc" style={{ '--x': '111', '--y': '1613', '--w': '734' }}>We continuously improve our farming methods through controlled organic practices that support healthier crops, balanced soil conditions, and reduced chemical dependency.</p>

                <div className="el box pdOrgCard" style={{ '--x': '36', '--y': '1710', '--w': '835', '--h': '152' }}></div>
                <div className="pdOrgIco" style={{ '--x': '60', '--y': '1722' }}><img src="/assets/product-detail/ico-2.png" alt="" /></div>
                <p className="el pdOrgTitle" style={{ '--x': '110', '--y': '1743', '--w': '600' }}>Regenerative Farming</p>
                <p className="el pdOrgDesc" style={{ '--x': '110', '--y': '1785', '--w': '732' }}>We support long term soil health through sustainable cultivation methods, seasonal crop management, and farming practices focused on strengthening natural growing conditions.</p>

                <div className="el box pdOrgCard" style={{ '--x': '37', '--y': '1882', '--w': '835', '--h': '152' }}></div>
                <div className="pdOrgIco" style={{ '--x': '60', '--y': '1894' }}><img src="/assets/product-detail/ico-3.png" alt="" /></div>
                <p className="el pdOrgTitle" style={{ '--x': '110', '--y': '1915', '--w': '600' }}>Seasonal Quality</p>
                <p className="el pdOrgDesc" id="pdSeasonalDesc" style={{ '--x': '111', '--y': '1957', '--w': '732' }}>Harvested during peak seasons to maintain the bold flavour, rich aroma, and natural freshness that make Seville orange distinctive across culinary applications.</p>

                <p className="el pdPara" id="pdClosing" style={{ '--x': '37', '--y': '2084', '--w': '859' }}>From local UAE farms to carefully managed supply systems, Seville orange delivers bold flavour, seasonal freshness, and quality focused organic cultivation designed for consistent everyday use.</p>
              </div>
            </div>
      
            
            <div className="fig-stage pd-foot" aria-label="Site footer">
              <div className="el box foot-hand-card" style={{ '--x': '424', '--y': '123', '--w': '474', '--h': '547' }}><img src="/assets/about/fig-footer-card.png" alt="The House of Organic" /></div>
              <h2 className="el tCtaH2" style={{ '--x': '1091', '--y': '283', '--w': '460' }}>Want to know<br />more?</h2>
              <a className="el box btnC2" href="/contact" style={{ '--x': '1199', '--y': '452', '--w': '189', '--h': '56' }}>Contact us <span aria-hidden="true">&rarr;</span></a>
              <div className="el box footer-divider" style={{ '--x': '42.5', '--y': '755', '--w': '1834.5', '--h': '1' }}></div>
              <a className="el tFoot foot-link" href="/" style={{ '--x': '41', '--y': '805.5', '--w': '160' }}>Homepage</a>
              <a className="el tFoot foot-link" href="/about" style={{ '--x': '41', '--y': '840.7', '--w': '160' }}>About</a>
              <a className="el tFoot foot-link" href="/contact" style={{ '--x': '41', '--y': '875.6', '--w': '160' }}>Contact</a>
              <a className="el tFoot foot-link" href="/products" style={{ '--x': '358.5', '--y': '805.5', '--w': '160' }}>Products</a>
              <a className="el tFoot foot-link" href="/what-we-do" style={{ '--x': '358.5', '--y': '840.95', '--w': '160' }}>What we do</a>
              <a className="el tFoot foot-link" href="/calendar" style={{ '--x': '358.5', '--y': '876.4', '--w': '200' }}>Product Calendar</a>
              <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '805', '--w': '120' }}>Phone</p>
              <a className="el tFoot foot-link" href="tel:05262354585" style={{ '--x': '944.83', '--y': '823.5', '--w': '160' }}>0526-2354-585</a>
              <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '860.5', '--w': '120' }}>Whatsapp</p>
              <a className="el tFoot foot-link" href="https://wa.me/97105262354585" style={{ '--x': '944.83', '--y': '879', '--w': '160' }}>0526-2354-585</a>
              <p className="el tFootLbl" style={{ '--x': '944.83', '--y': '916', '--w': '120' }}>E-mail</p>
              <a className="el tFoot foot-link" href="mailto:thorganic@gmail.com" style={{ '--x': '944.83', '--y': '934.5', '--w': '200' }}>thorganic@gmail.com</a>
              <p className="el tFootLbl" style={{ '--x': '1348.6', '--y': '805', '--w': '120' }}>Address</p>
              <p className="el tFoot" style={{ '--x': '1345.83', '--y': '823.5', '--w': '200' }}>701 nkshore, abudabi<br />lorem ipsum 10</p>
              <p className="el tFootLbl" style={{ '--x': '1348.6', '--y': '879', '--w': '120' }}>We are open</p>
              <p className="el tFoot" style={{ '--x': '1348.6', '--y': '897.5', '--w': '200' }}>Mon &ndash; Sat: 10 AM &ndash; 8 PM</p>
              <a className="el box foot-social" href="https://facebook.com" target="_blank" rel="noopener" style={{ '--x': '1815', '--y': '805', '--w': '29.08', '--h': '29.08' }} aria-label="Facebook"><svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7"/><path d="M18.5492 7.69007L16.4259 7.6875C14.3668 7.6875 13.0366 9.05167 13.0366 11.1654V12.7678H10.9062V15.6677H13.0366L13.0341 21.8174H16.0148L16.0174 15.6677H18.4619L18.4599 12.7685H16.0174V11.4088C16.0174 10.755 16.1722 10.4242 17.0232 10.4242L18.5428 10.4236L18.5492 7.69007Z" fill="#143F00"/></svg></a>
              <a className="el box foot-social" href="https://instagram.com" target="_blank" rel="noopener" style={{ '--x': '1849.32', '--y': '805', '--w': '29.08', '--h': '29.08' }} aria-label="Instagram"><svg viewBox="0 0 29.0826 29.0826" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="14.5413" cy="14.5413" r="14.5413" fill="#FFF6A7"/><path d="M11.3904 7.19141H17.6245C19.9994 7.19141 21.9289 9.121 21.9289 11.4959V17.7299C21.9289 18.8716 21.4754 19.9664 20.6682 20.7737C19.8609 21.5809 18.7661 22.0344 17.6245 22.0344H11.3904C9.01553 22.0344 7.08594 20.1048 7.08594 17.7299V11.4959C7.08594 10.3543 7.53944 9.2594 8.34669 8.45216C9.15393 7.64491 10.2488 7.19141 11.3904 7.19141ZM11.242 8.67571C10.5334 8.67571 9.85382 8.95719 9.35277 9.45824C8.85172 9.95929 8.57024 10.6389 8.57024 11.3474V17.8784C8.57024 19.3552 9.7651 20.5501 11.242 20.5501H17.7729C18.4815 20.5501 19.1611 20.2686 19.6621 19.7676C20.1632 19.2665 20.4446 18.587 20.4446 17.8784V11.3474C20.4446 9.87057 19.2498 8.67571 17.7729 8.67571H11.242ZM18.4037 9.78893C18.6498 9.78893 18.8857 9.88667 19.0597 10.0606C19.2337 10.2346 19.3314 10.4706 19.3314 10.7166C19.3314 10.9627 19.2337 11.1986 19.0597 11.3726C18.8857 11.5466 18.6498 11.6443 18.4037 11.6443C18.1577 11.6443 17.9217 11.5466 17.7478 11.3726C17.5738 11.1986 17.476 10.9627 17.476 10.7166C17.476 10.4706 17.5738 10.2346 17.7478 10.0606C17.9217 9.88667 18.1577 9.78893 18.4037 9.78893ZM14.5074 10.9022C15.4916 10.9022 16.4354 11.2931 17.1313 11.989C17.8272 12.6849 18.2182 13.6288 18.2182 14.6129C18.2182 15.5971 17.8272 16.5409 17.1313 17.2368C16.4354 17.9327 15.4916 18.3237 14.5074 18.3237C13.5233 18.3237 12.5794 17.9327 11.8835 17.2368C11.1876 16.5409 10.7967 15.5971 10.7967 14.6129C10.7967 13.6288 11.1876 12.6849 11.8835 11.989C12.5794 11.2931 13.5233 10.9022 14.5074 10.9022ZM14.5074 12.3865C13.9169 12.3865 13.3506 12.621 12.9331 13.0386C12.5156 13.4561 12.281 14.0224 12.281 14.6129C12.281 15.2034 12.5156 15.7697 12.9331 16.1872C13.3506 16.6048 13.9169 16.8394 14.5074 16.8394C15.0979 16.8394 15.6642 16.6048 16.0818 16.1872C16.4993 15.7697 16.7339 15.2034 16.7339 14.6129C16.7339 14.0224 16.4993 13.4561 16.0818 13.0386C15.6642 12.621 15.0979 12.3865 14.5074 12.3865Z" fill="#143F00"/></svg></a>
              <p className="el tFoot" style={{ '--x': '41', '--y': '1020', '--w': '260' }}>2026 &copy; thehouseoforganic</p>
              <a className="el tFoot foot-link" href="/contact" style={{ '--x': '1805', '--y': '1020', '--w': '90' }}>Inquire <span aria-hidden="true">&rarr;</span></a>
            </div>
          </main>
      <SiteFooter />
      <script
        type="application/json"
        id="pd-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DETAIL).replace(/</g, "\\u003c") }}
      />
      <LegacyScripts
      pageScripts={[
        "(function () {\n  var DATA = {};\n  try { DATA = JSON.parse(document.getElementById(\"pd-data\").textContent); } catch (e) {}\n  function qp(k){ return new URLSearchParams(location.search).get(k); }\n  function titleCase(s){ return s.replace(/-/g,\" \").replace(/\\b\\w/g,function(c){return c.toUpperCase();}); }\n  function set(id,v){ var e=document.getElementById(id); if(e) e.textContent=v; }\n  var slug = (qp(\"p\") || \"seville\").toLowerCase();\n  var d = DATA[slug];\n  if (!d) {\n    var nm = titleCase(slug);\n    d = { name:nm, accent:\"#2d5335\", tone:\"light\", photo:\"\", category:\"Organic Produce\", type:\"\", origin:\"\", description:\"Fresh organic \"+nm+\" selected for quality, freshness, and natural flavour.\", taste:\"Fresh and natural\", availability:\"Subject to season and origin\", stores:\"Website / Online Partners / Retail Partners\", includes:\"\", s1:\"Organic\", s2:\"Seasonal\" };\n  }\n  var card = document.getElementById(\"pdCard\");\n  card.style.setProperty(\"--accent\", d.accent);\n  card.classList.toggle(\"tone-dark\", d.tone === \"dark\");\n  document.title = d.name + \" | The House of Organic\";\n  set(\"pdName\", d.name);\n  set(\"pdCatTag\", d.category);\n  set(\"pdSeason1\", d.s1);\n  set(\"pdSeason2\", d.s2);\n  var ph = document.getElementById(\"pdPhoto\");\n  if (d.photo) { ph.style.display=\"\"; ph.querySelector(\"img\").src=d.photo; ph.querySelector(\"img\").alt=d.name; card.classList.remove(\"no-photo\"); }\n  else { ph.style.display=\"none\"; card.classList.add(\"no-photo\"); }\n  set(\"pdCat\", d.category);\n  set(\"pdType\", d.origin ? (d.type + \" · \" + d.origin) : d.type);\n  set(\"pdTaste\", d.taste);\n  set(\"pdAvail\", d.availability);\n  set(\"pdDesc\", d.description);\n  var isLocal = (d.type || \"\").toLowerCase() === \"local\";\n  set(\"pdLocalLabel\", isLocal ? \"Local Farm\" : \"Global Sourcing\");\n  var range = d.includes ? (\" Part of our \" + d.category + \" range: \" + d.includes) : \"\";\n  if (isLocal) {\n    set(\"pdLocal\", \"Grown locally on UAE farms through carefully managed seasonal cultivation focused on flavour, healthy crop growth, and reliable quality.\" + range);\n  } else {\n    set(\"pdLocal\", \"Sourced from \" + (d.origin || \"trusted regions\") + \" through our global partner network and quality-checked on arrival for freshness and consistency.\" + range);\n  }\n  var scn = document.getElementById(\"pdScene\");\n  if (scn) { scn.src = \"/assets/home-intro-farm.jpg\"; scn.alt = d.name + \" — organic quality\"; }\n  set(\"pdSeasonalDesc\", \"Selected at peak quality to preserve the natural flavour, aroma, and freshness that make \" + d.name + \" distinctive across everyday culinary use.\");\n  set(\"pdClosing\", d.name + \" is \" + d.availability.toLowerCase() + \", offered across \" + d.stores + \". From careful sourcing to managed supply, it delivers dependable organic quality for everyday use.\");\n  var split = document.querySelector(\".pd-split\"); if (split) split.style.opacity = \"1\";\n})();",
        "/* parallax: photos drift within their frames as you scroll */\n      (function () {\n        var ps = Array.prototype.slice.call(document.querySelectorAll(\".pd-parallax img\"));\n        if (!ps.length) return;\n        var ticking = false;\n        function apply() {\n          var vh = window.innerHeight || document.documentElement.clientHeight;\n          for (var i = 0; i < ps.length; i++) {\n            var img = ps[i], r = img.parentElement.getBoundingClientRect();\n            var prog = ((r.top + r.height / 2) - vh / 2) / vh; // -1 (above) .. +1 (below)\n            if (prog > 1.6 || prog < -1.6) continue;\n            var p = Math.max(-1, Math.min(1, prog));\n            img.style.transform = \"translateY(\" + (-15 + p * -8).toFixed(2) + \"%)\"; // base -15% (centered) ± drift\n\n          }\n          ticking = false;\n        }\n        function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }\n        window.addEventListener(\"scroll\", onScroll, { passive: true });\n        window.addEventListener(\"resize\", onScroll);\n        apply();\n      })();"
      ]} />
    </>
  );
}
