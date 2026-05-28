import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';
import HtmlBlock from './HtmlBlock';
import Breadcrumb from './Breadcrumb';

const CSS_FILES = [
  '/donatix/css/bootstrap.min.css',
  '/donatix/css/animate.min.css',
  '/donatix/css/custom-animate.css',
  '/donatix/css/swiper.min.css',
  '/donatix/css/font-awesome-all.css',
  '/donatix/css/jarallax.css',
  '/donatix/css/jquery.magnific-popup.css',
  '/donatix/css/flaticon.css',
  '/donatix/css/owl.carousel.min.css',
  '/donatix/css/owl.theme.default.min.css',
  '/donatix/css/nice-select.css',
  '/donatix/css/jquery-ui.css',
  '/donatix/css/aos.css',
  '/donatix/css/odometer.min.css',
  '/donatix/css/module-css/slider.css',
  '/donatix/css/module-css/footer.css',
  '/donatix/css/module-css/feature.css',
  '/donatix/css/module-css/about.css',
  '/donatix/css/module-css/service.css',
  '/donatix/css/module-css/counter.css',
  '/donatix/css/module-css/why-choose.css',
  '/donatix/css/module-css/project.css',
  '/donatix/css/module-css/video.css',
  '/donatix/css/module-css/team.css',
  '/donatix/css/module-css/brand.css',
  '/donatix/css/module-css/pricing.css',
  '/donatix/css/module-css/testimonial.css',
  '/donatix/css/module-css/blog.css',
  '/donatix/css/module-css/cause.css',
  '/donatix/css/module-css/cta.css',
  '/donatix/css/module-css/sliding-text.css',
  '/donatix/css/module-css/approch.css',
  '/donatix/css/module-css/faq.css',
  '/donatix/css/module-css/contact.css',
  '/donatix/css/module-css/gallery.css',
  '/donatix/css/module-css/donation.css',
  '/donatix/css/module-css/event.css',
  '/donatix/css/style.css',
  '/donatix/css/responsive.css',
];

const JS_FILES = [
  '/donatix/js/jquery-latest.js',
  '/donatix/js/bootstrap.bundle.min.js',
  '/donatix/js/jarallax.min.js',
  '/donatix/js/jquery.ajaxchimp.min.js',
  '/donatix/js/jquery.appear.min.js',
  '/donatix/js/swiper.min.js',
  '/donatix/js/jquery.magnific-popup.min.js',
  '/donatix/js/jquery.validate.min.js',
  '/donatix/js/wNumb.min.js',
  '/donatix/js/wow.js',
  '/donatix/js/isotope.js',
  '/donatix/js/owl.carousel.min.js',
  '/donatix/js/jquery-ui.js',
  '/donatix/js/jquery.nice-select.min.js',
  '/donatix/js/marquee.min.js',
  '/donatix/js/countdown.min.js',
  '/donatix/js/jquery.circleType.js',
  '/donatix/js/jquery.fittext.js',
  '/donatix/js/jquery.lettering.min.js',
  '/donatix/js/jquery-sidebar-content.js',
  '/donatix/js/aos.js',
  '/donatix/js/odometer.min.js',
  '/donatix/js/gsap/gsap.js',
  '/donatix/js/gsap/ScrollTrigger.js',
  '/donatix/js/gsap/SplitText.js',
  '/donatix/js/script.js',
];

function read(file: string) {
  return fs.readFileSync(path.join(process.cwd(), file), 'utf-8');
}

export default function DonatixChrome({ children }: { children: React.ReactNode }) {
  const headerHtml = read('donatix-header.html');
  const footerHtml = read('donatix-footer.html');

  return (
    <>
      {CSS_FILES.map(href => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      {/* Shared donatix template overrides for HTDSS */}
      <style>{DONATIX_OVERRIDES}</style>

      {/* Skip-nav link for keyboard / screen-reader users */}
      <a href="#main-content" className="hd-skip-nav">Skip to main content</a>

      <div className="donatix-home page-wrapper">
        <HtmlBlock html={headerHtml} />
        <Breadcrumb />
        <main id="main-content">{children}</main>
        <HtmlBlock html={footerHtml} />

        {/* Back-to-top button */}
        <button type="button" className="hd-back-top" id="hd-back-top" aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile navigation drawer */}
        <div className="hd-mobile-drawer" id="hd-mobile-drawer" aria-hidden="true" role="dialog" aria-label="Mobile navigation">
          <div className="hd-mobile-drawer__backdrop" data-hd-drawer-close></div>
          <aside className="hd-mobile-drawer__panel">
            <div className="hd-mobile-drawer__head">
              <a href="/" className="hd-mobile-drawer__logo">
                <img src="/wp-content/uploads/2021/02/logo.jpeg" alt="HTDSS logo" />
              </a>
              <button type="button" className="hd-mobile-drawer__close" data-hd-drawer-close aria-label="Close menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/></svg>
              </button>
            </div>
            <nav className="hd-mobile-drawer__nav" aria-label="Primary">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About</a></li>
                <li><a href="/founders">Founders</a></li>
                <li><a href="/events">Scientific events</a></li>
                <li><a href="/activities">Activities</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/webinar">Upcoming events</a></li>
                <li><a href="/contact-us">Contact</a></li>
              </ul>
            </nav>
            <div className="hd-mobile-drawer__cta">
              <a href="https://zfrmz.com/GmGYLfnaJ73KiYwDnAEQ" className="thm-btn" target="_blank" rel="noopener">
                <i className="icon-heart"></i> Join Us
              </a>
            </div>
            <div className="hd-mobile-drawer__social">
              <a href="https://www.facebook.com/HTDSSkolkata/" target="_blank" rel="noopener" aria-label="Facebook"><span className="icon-facebook-app-symbol"></span></a>
              <a href="https://www.youtube.com/channel/UC4K_JctXcHPDLE-Vao-OBPQ" target="_blank" rel="noopener" aria-label="YouTube"><span className="icon-youtube"></span></a>
            </div>
          </aside>
        </div>
      </div>

      <Script id="htdss-donatix-loader" strategy="afterInteractive">{`
        (function () {
          var FILES = ${JSON.stringify(JS_FILES)};
          function loadOne(src) {
            return new Promise(function (resolve) {
              if (document.querySelector('script[data-htdss-donatix="' + src + '"]')) {
                return resolve();
              }
              var s = document.createElement('script');
              s.src = src;
              s.async = false;
              s.setAttribute('data-htdss-donatix', src);
              s.onload = s.onerror = function () { resolve(); };
              document.body.appendChild(s);
            });
          }
          function whenReady(cb) {
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', cb, { once: true });
            } else { cb(); }
          }
          function waitForChrome() {
            return new Promise(function (resolve) {
              var tries = 0;
              (function check() {
                if (document.querySelector('.main-header') && document.querySelector('.site-footer')) {
                  return resolve();
                }
                if (++tries > 80) return resolve(); // 4s budget
                setTimeout(check, 50);
              })();
            });
          }

          // Mobile drawer: wire the toggler to a working drawer (the donatix
          // template ships a toggler markup but no JS bound to it).
          function wireMobileDrawer() {
            var drawer = document.getElementById('hd-mobile-drawer');
            if (!drawer || drawer.dataset.hdWired) return;
            drawer.dataset.hdWired = '1';
            var open = function () {
              drawer.classList.add('is-open');
              drawer.setAttribute('aria-hidden', 'false');
              document.body.style.overflow = 'hidden';
            };
            var close = function () {
              drawer.classList.remove('is-open');
              drawer.setAttribute('aria-hidden', 'true');
              document.body.style.overflow = '';
            };
            document.addEventListener('click', function (e) {
              var t = e.target;
              if (!(t instanceof Element)) return;
              if (t.closest('.mobile-nav__toggler')) { e.preventDefault(); open(); return; }
              if (t.closest('[data-hd-drawer-close]')) { e.preventDefault(); close(); return; }
              if (t.closest('.hd-mobile-drawer__nav a, .hd-mobile-drawer__cta a')) {
                // close after a tick so the link still navigates
                setTimeout(close, 80);
              }
            }, false);
            document.addEventListener('keydown', function (e) {
              if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
            });
          }

          // Mark the current page's nav link with aria-current="page"
          function markActiveNav() {
            var path = window.location.pathname.replace(/\\/+$/, '') || '/';
            document.querySelectorAll('.hd-mobile-drawer__nav a, .main-menu__list > li > a').forEach(function (a) {
              var href = (a.getAttribute('href') || '').replace(/\\/+$/, '') || '/';
              var match = href === '/' ? path === '/' : (href === path || path.startsWith(href + '/'));
              if (match) a.setAttribute('aria-current', 'page');
              else a.removeAttribute('aria-current');
            });
          }

          // Back to top button
          function wireBackTop() {
            var btn = document.getElementById('hd-back-top');
            if (!btn || btn.dataset.wired) return;
            btn.dataset.wired = '1';
            window.addEventListener('scroll', function () {
              btn.classList.toggle('is-visible', window.scrollY > 300);
            }, { passive: true });
            btn.addEventListener('click', function () {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }

          whenReady(function () { (async function () {
            // Wait until HtmlBlock useEffects have injected the chrome
            await waitForChrome();
            wireMobileDrawer();
            markActiveNav();
            wireBackTop();
            for (var i = 0; i < FILES.length; i++) {
              await loadOne(FILES[i]);
            }
            try {
              var $ = window.jQuery;
              if ($ && window.Swiper) {
                var heroEl = document.querySelector('.main-slider-one--three__slider');
                if (heroEl && !heroEl.dataset.htdssInit) {
                  heroEl.dataset.htdssInit = '1';
                  var s = new window.Swiper('.main-slider-one--three__slider', {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 1000,
                    grabCursor: true,
                    autoplay: { delay: 4500, disableOnInteraction: false },
                    navigation: {
                      prevEl: '.banner-slider-button-prev',
                      nextEl: '.banner-slider-button-next',
                    },
                  });
                  var total = s.slides.length - 2;
                  var $cur = $('#current'), $tot = $('#total');
                  $tot.text((total < 10 ? '0' : '') + total);
                  $cur.text('01');
                  s.on('slideChange', function () {
                    var n = s.realIndex + 1;
                    $cur.text((n < 10 ? '0' : '') + n);
                  });
                }
              }
              if ($) {
                $('.odometer').each(function () {
                  var el = this;
                  if (el.dataset.htdssOdo) return;
                  el.dataset.htdssOdo = '1';
                  var target = parseInt(el.getAttribute('data-count') || el.textContent || '0', 10);
                  if (window.Odometer) {
                    var od = new window.Odometer({ el: el, value: 0, format: '(,ddd)', duration: 1500 });
                    setTimeout(function () { od.update(target); }, 200);
                  } else {
                    el.textContent = target;
                  }
                });
              }
              try { window.dispatchEvent(new Event('load')); } catch (e) {}
            } catch (e) { console.warn('htdss post-init error', e); }
          })(); });
        })();
      `}</Script>
    </>
  );
}

const DONATIX_OVERRIDES = `
  .donatix-home { --donatix-base: #1860a8; }

  /* Header */
  .donatix-home .main-header__one-bottom-left .logo-box img,
  .donatix-home .mobile-nav__content .logo-box img {
    height: 100px; max-height: 100px; width: auto;
  }
  .donatix-home .main-header__one-bottom { padding-top: 8px; padding-bottom: 8px; }
  .donatix-home .main-header__one--three .main-menu__wrapper-inner {
    background: #f8f1a9 !important;
    padding: 0 45px !important;
  }
  .donatix-home .stricky-header.stricked-menu,
  .donatix-home .stricky-header.stricked-menu .main-menu__wrapper-inner {
    background: #f8f1a9 !important;
  }
  .donatix-home .stricky-header.stricked-menu {
    height: 95px !important;
    max-height: 95px !important;
  }
  .donatix-home .stricky-header.stricked-menu .main-menu__wrapper-inner {
    height: 95px !important;
    max-height: 95px !important;
    display: flex !important;
    align-items: center !important;
  }
  .donatix-home .stricky-header.stricked-menu .main-menu__list > li {
    padding-top: 0 !important; padding-bottom: 0 !important;
  }
  .donatix-home .stricky-header.stricked-menu .logo-box img {
    height: 80px !important; max-height: 80px !important; width: auto !important;
  }
  /* Sticky header: tighter menu spacing + smaller font so the logo reads larger */
  .donatix-home .stricky-header.stricked-menu .main-menu__list > li + li {
    margin-left: 24px !important;
  }
  .donatix-home .stricky-header.stricked-menu .main-menu__list > li > a {
    font-size: 15px !important;
  }
  .donatix-home .main-menu__list > li > a { color: #0b2e56 !important; }
  .donatix-home .home-showcase { display: none; }

  /* Mobile/tablet: shrink the sticky header so it doesn't dominate small viewports */
  @media (max-width: 991px) {
    .donatix-home .stricky-header.stricked-menu,
    .donatix-home .stricky-header.stricked-menu .main-menu__wrapper-inner {
      height: 72px !important; max-height: 72px !important;
    }
    .donatix-home .stricky-header.stricked-menu .logo-box img,
    .donatix-home .main-header__one-bottom-left .logo-box img,
    .donatix-home .mobile-nav__content .logo-box img {
      height: 56px !important; max-height: 56px !important;
    }
  }
  @media (max-width: 575px) {
    .donatix-home .stricky-header.stricked-menu,
    .donatix-home .stricky-header.stricked-menu .main-menu__wrapper-inner {
      height: 64px !important; max-height: 64px !important;
    }
    .donatix-home .stricky-header.stricked-menu .logo-box img,
    .donatix-home .main-header__one-bottom-left .logo-box img {
      height: 48px !important; max-height: 48px !important;
    }
    .donatix-home .main-header__one--three .main-menu__wrapper-inner {
      padding: 0 15px !important;
    }
  }

  /* Contact page: equal-height info cards + tighter padding */
  .donatix-home .contact-page-info .row { align-items: stretch; }
  .donatix-home .contact-page-info__single { height: 100%; padding: 30px 20px 30px !important; }
  @media (max-width: 767px) {
    .donatix-home .contact-page-info__single { padding: 24px 18px !important; margin-bottom: 20px; }
    .donatix-home .contact-page-info__single .icon-box { width: 60px !important; height: 60px !important; }
    .donatix-home .contact-page-info__single h3 { font-size: 18px !important; }
  }

  /* Google map: cap height on small screens (donatix's 660px is huge on phones) */
  .donatix-home .google-map-one__map,
  .donatix-home .google-map-one iframe {
    width: 100%; height: clamp(280px, 60vh, 660px);
  }

  /* Contact form: donatix uses float:right + margin-top:-570px to overlap the
     map. That collapses on tablets/phones — restore normal flow there. */
  @media (max-width: 1199px) {
    .donatix-home .contact-page-form__inner {
      float: none !important; margin-top: 0 !important;
      max-width: 100% !important; width: 100% !important;
      padding: 40px 24px !important;
    }
    .donatix-home .contact-page-form { padding: 40px 0 60px !important; }
  }
  @media (max-width: 575px) {
    .donatix-home .contact-page-form__inner { padding: 28px 18px !important; }
    .donatix-home .contact-page-form__inner .title-box h2 { font-size: 26px !important; }
  }

  /* Footer: cream, no bg, dark text */
  .donatix-home .site-footer,
  .donatix-home .site-footer--one,
  .donatix-home .site-footer__bottom {
    background: #f8f1a9 !important;
    background-image: none !important;
    color: #0b2e56 !important;
  }
  .donatix-home .site-footer { padding: 0 !important; }
  /* Kill the template's decorative overlays on the footer.
     The donatix CSS uses .site-footer--one.site-footer::after (combined
     selectors, specificity 0,2,1) and .site-footer::before — match both
     with extra specificity. */
  .donatix-home .site-footer::before,
  .donatix-home .site-footer::after,
  .donatix-home .site-footer--one::before,
  .donatix-home .site-footer--one::after,
  .donatix-home .site-footer--one.site-footer::before,
  .donatix-home .site-footer--one.site-footer::after,
  .donatix-home footer.site-footer::before,
  .donatix-home footer.site-footer::after {
    content: none !important;
    background: transparent !important;
    background-image: none !important;
    background-color: transparent !important;
    mask: none !important;
    -webkit-mask: none !important;
    mix-blend-mode: normal !important;
    display: none !important;
    opacity: 0 !important;
  }
  .donatix-home .site-footer p,
  .donatix-home .site-footer a,
  .donatix-home .site-footer h3,
  .donatix-home .site-footer h4,
  .donatix-home .site-footer span,
  .donatix-home .site-footer .footer-widget__title,
  .donatix-home .site-footer .footer-widget__link a,
  .donatix-home .site-footer__bottom-text { color: #0b2e56 !important; }
  .donatix-home .site-footer .footer-widget__about-text,
  .donatix-home .site-footer .footer-widget__link a { color: #2b3f55 !important; }
  .donatix-home .site-footer a:hover { color: #0b2e56 !important; text-decoration: underline; }
  .donatix-home .site-footer .footer-widget__contact-icon {
    background: rgba(11,46,86,0.10) !important; color: #0b2e56 !important;
  }
  .donatix-home .site-footer .footer-widget__about-social-links a {
    color: #0b2e56 !important; background: rgba(11,46,86,0.08);
  }
  .donatix-home .site-footer .footer-widget__about-social-links a:hover {
    background: #0b2e56; color: #f8f1a9 !important;
  }
  .donatix-home .site-footer__bottom { border-top: 1px solid rgba(11,46,86,0.18); }
  .donatix-home .site-footer__bottom-inner { justify-content: center !important; text-align: center; }

  /* Footer logo: keep it modest on cream */
  .donatix-home .site-footer .footer-widget__logo img {
    height: 64px !important;
    max-height: 64px !important;
    width: auto !important;
    display: inline-block;
  }
  /* Stronger contrast for all footer text on cream */
  .donatix-home .site-footer * { color: #0b2e56 !important; }
  .donatix-home .site-footer .footer-widget__about-text {
    color: #1a3a5a !important;
    opacity: 1 !important;
    font-weight: 500;
  }
  .donatix-home .site-footer .footer-widget__link a,
  .donatix-home .site-footer .footer-widget__contact-list a,
  .donatix-home .site-footer .footer-widget__contact-list p {
    color: #0b2e56 !important;
    font-weight: 500;
  }
  .donatix-home .site-footer .footer-widget__link a:hover,
  .donatix-home .site-footer a:hover { text-decoration: underline; }
  .donatix-home .site-footer .footer-widget__title {
    font-weight: 800 !important;
    margin-bottom: 18px !important;
  }
  .donatix-home .site-footer .footer-widget__link .icon-next,
  .donatix-home .site-footer .footer-widget__contact-icon {
    color: #0b2e56 !important;
  }
  .donatix-home .site-footer__middle .row > [class*="col-xl-3"] {
    flex: 0 0 auto; width: 33.3333% !important; max-width: 33.3333% !important;
  }
  @media (max-width: 991px) {
    .donatix-home .site-footer__middle .row > [class*="col-xl-3"] {
      width: 50% !important; max-width: 50% !important;
    }
  }
  @media (max-width: 576px) {
    .donatix-home .site-footer__middle .row > [class*="col-xl-3"] {
      width: 100% !important; max-width: 100% !important;
    }
  }
  .donatix-home .footer-widget__useful-link.ml85 { margin-left: 0 !important; }

  /* Footer contact list */
  .donatix-home .footer-widget__contact-list {
    list-style: none; padding: 0; margin: 0;
  }
  .donatix-home .footer-widget__contact-list li {
    display: flex; gap: 12px; align-items: flex-start;
    margin-bottom: 14px; font-size: 14px; line-height: 1.55;
  }
  .donatix-home .footer-widget__contact-icon {
    flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 14px; margin-top: 2px;
  }
  .donatix-home .footer-widget__contact-list .footer-widget__contact-label {
    display: block; font-weight: 700; font-size: 13px;
    letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 2px;
  }
  .donatix-home .footer-widget__contact-list p { margin: 0; }
  .donatix-home .footer-widget__contact-list a { align-self: center; }

  /* ===== Body / sections (home + interior pages) ===== */

  /* About section: YouTube video instead of photo grid */
  .donatix-home .htdss-about-video {
    position: relative; width: 100%; padding-top: 60%;
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background: #0b2e56;
  }
  .donatix-home .htdss-about-video iframe {
    position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
  }

  /* Hero slider: full-bleed image, no overlay, fixed banner height */
  .donatix-home .main-slider-one--three__inner,
  .donatix-home .main-slider-one--three__slider,
  .donatix-home .main-slider-one--three__slider .swiper-wrapper,
  .donatix-home .main-slider-one--three__slider .swiper-slide,
  .donatix-home .htdss-hero-slide {
    height: clamp(260px, 50vw, 640px) !important;
    background-color: #0b2e56;
  }
  @media (max-width: 767px) {
    .donatix-home .main-slider-one--three__inner,
    .donatix-home .main-slider-one--three__slider,
    .donatix-home .main-slider-one--three__slider .swiper-wrapper,
    .donatix-home .main-slider-one--three__slider .swiper-slide,
    .donatix-home .htdss-hero-slide {
      height: clamp(220px, 60vw, 360px) !important;
    }
  }
  .donatix-home .htdss-hero-slide { position: relative !important; overflow: hidden; }
  .donatix-home .htdss-hero-img {
    position: absolute; inset: 0;
    width: 100% !important; height: 100% !important;
    object-fit: cover !important; object-position: center !important;
    display: block; z-index: 1;
  }
  .donatix-home .main-slider-one__single::before,
  .donatix-home .main-slider-one__single::after,
  .donatix-home .htdss-hero-slide::before,
  .donatix-home .htdss-hero-slide::after {
    content: none !important; display: none !important; background: transparent !important;
  }
  .donatix-home .main-slider-one--three__shape1,
  .donatix-home .main-slider-one--three__shape2,
  .donatix-home .main-slider-one--three__shape3,
  .donatix-home .main-slider-one--three__shape4,
  .donatix-home .main-slider-one--three__shape5,
  .donatix-home .main-slider-one--three__shape6 { display: none; }
  .donatix-home .main-slider-one--three__nav,
  .donatix-home .main-slider-one--three__wrap { z-index: 50 !important; }

  /* Event/activity cards: tidy 3-column grid (template uses flex
     + huge 74px date font that overlapped the title). */
  .donatix-home .event-two__single {
    display: grid !important;
    grid-template-columns: 200px minmax(0, 1fr) auto !important;
    gap: 32px !important;
    align-items: center !important;
    justify-content: stretch !important;
  }
  .donatix-home .event-two__single-date {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
    padding-right: 24px !important;
    border-right: 1px solid rgba(0,0,0,0.08) !important;
    min-width: 0;
  }
  .donatix-home .event-two__single-date h2 {
    font-size: 56px !important; line-height: 1 !important;
    margin: 0 !important; font-weight: 800; flex-shrink: 0;
  }
  .donatix-home .event-two__single-date p {
    font-size: 15px !important; line-height: 1.2 !important;
    margin: 0 !important; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.03em; color: #1f1f1f;
  }
  .donatix-home .event-two__single-date p br { display: block; }
  .donatix-home .event-two__single-content { min-width: 0 !important; }
  .donatix-home .event-two__single-content h2 {
    margin: 0 0 10px !important; line-height: 1.25 !important;
    font-size: clamp(18px, 1.5vw, 22px) !important; font-weight: 700;
  }
  .donatix-home .event-two__single-content h2 a {
    overflow-wrap: anywhere; word-break: break-word;
  }
  .donatix-home .event-two__single-content .meta-info {
    display: flex !important; flex-wrap: wrap;
    gap: 8px 24px !important; margin: 0 !important;
    padding: 0; list-style: none; line-height: 1.4 !important;
  }
  @media (max-width: 768px) {
    .donatix-home .event-two__single {
      grid-template-columns: 1fr !important; gap: 16px !important;
    }
    .donatix-home .event-two__single-date {
      border-right: 0 !important; padding-right: 0 !important;
      border-bottom: 1px solid rgba(0,0,0,0.08); padding-bottom: 12px;
    }
  }

  /* Pillars: equal card heights via flex */
  .donatix-home .services-one .row { display: flex; flex-wrap: wrap; }
  .donatix-home .services-one .row > [class*="col-"] { display: flex; }
  .donatix-home .services-one__single {
    width: 100%; display: flex; flex-direction: column;
  }
  .donatix-home .services-one__single p { flex: 1 1 auto; }

  /* Hide progress bar / raised+goals leftovers on cause cards */
  .donatix-home .cause-one__rised-and-progress,
  .donatix-home .progress-box { display: none !important; }

  /* Conference cards: uniform landscape image area + equal card heights */
  .donatix-home .cause-one__single-img {
    width: 100%; aspect-ratio: 4 / 3;
    overflow: hidden; background: #f3f3f3;
  }
  .donatix-home .cause-one__single-img img {
    width: 100% !important; height: 100% !important;
    object-fit: cover !important; object-position: center !important;
    display: block;
  }
  .donatix-home .cause-two .row { display: flex; flex-wrap: wrap; }
  .donatix-home .cause-two .row > [class*="col-"] { display: flex; }
  .donatix-home .cause-one__single { width: 100%; height: 100%; display: flex; }
  .donatix-home .cause-one__single-inner {
    display: flex; flex-direction: column; width: 100%; height: 100%;
  }
  .donatix-home .cause-one__single-content {
    flex: 1 1 auto; display: flex; flex-direction: column;
  }
  .donatix-home .cause-one__single-bottom { margin-top: auto; }

  /* About page: video embed + contact grid */
  .donatix-home .htdss-about-video {
    position: relative; width: 100%; padding-top: 60%;
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background: #0b2e56;
  }
  .donatix-home .htdss-about-video iframe {
    position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
  }
  .donatix-home .htdss-contact-section {
    position: relative; overflow: hidden; padding: 90px 0 96px;
    background:
      radial-gradient(900px 420px at 12% -10%, rgba(24,96,168,0.10), transparent 60%),
      radial-gradient(820px 420px at 92% 8%, rgba(232,122,30,0.10), transparent 60%),
      linear-gradient(180deg, #f7faff 0%, #eef3fb 100%);
  }
  @media (max-width: 767px) {
    .donatix-home .htdss-contact-section { padding: 56px 0 64px; }
    .donatix-home .htdss-contact-grid { margin-top: 28px; }
    .donatix-home .htdss-contact-card { padding: 28px 18px 24px; }
    .donatix-home .htdss-follow { margin-top: 36px; }
  }
  .donatix-home .htdss-contact-shape {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  }
  .donatix-home .htdss-contact-shape--1 {
    width: 320px; height: 320px; top: -120px; left: -110px;
    background: radial-gradient(circle at 30% 30%, rgba(24,96,168,0.16), transparent 70%);
  }
  .donatix-home .htdss-contact-shape--2 {
    width: 260px; height: 260px; bottom: -110px; right: -90px;
    background: radial-gradient(circle at 70% 70%, rgba(232,122,30,0.16), transparent 70%);
  }
  .donatix-home .htdss-contact-section .container { position: relative; z-index: 1; }
  .donatix-home .htdss-contact-grid { margin-top: 46px; }
  .donatix-home .htdss-contact-grid > [class*="col-"] { padding-left: 16px; padding-right: 16px; margin-bottom: 30px; }
  .donatix-home .htdss-contact-card {
    position: relative; overflow: hidden;
    background: #fff; border: 1px solid #e6eef4;
    border-radius: 18px; padding: 36px 24px 30px; height: 100%;
    text-align: center; box-shadow: 0 10px 30px -22px rgba(11,46,86,0.45);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .donatix-home .htdss-contact-card::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #1860a8, #e87a1e);
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
  }
  .donatix-home .htdss-contact-card:hover {
    transform: translateY(-8px); border-color: #d4e4f3;
    box-shadow: 0 26px 50px -24px rgba(11, 46, 86, 0.4);
  }
  .donatix-home .htdss-contact-card:hover::before { transform: scaleX(1); }
  .donatix-home .htdss-contact-card__icon {
    width: 70px; height: 70px; border-radius: 20px;
    background: linear-gradient(135deg, #1f6fbf, #134b86);
    color: #fff; box-shadow: 0 12px 24px -10px rgba(24,96,168,0.7);
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 28px; margin-bottom: 22px;
    transition: transform 0.25s ease;
  }
  .donatix-home .htdss-contact-card:hover .htdss-contact-card__icon { transform: scale(1.08) rotate(-4deg); }
  .donatix-home .htdss-contact-card h3 {
    font-size: 17px; font-weight: 800; color: #0b2e56;
    margin-bottom: 12px; letter-spacing: 0.01em;
  }
  .donatix-home .htdss-contact-card p {
    margin: 0; color: #51647a; font-size: 14px; line-height: 1.7;
  }
  .donatix-home .htdss-contact-card a { color: #1860a8; text-decoration: none; word-break: break-word; }
  .donatix-home .htdss-contact-card a:hover { color: #e87a1e; }
  .donatix-home .htdss-follow {
    text-align: center; margin-top: 56px;
  }
  .donatix-home .htdss-follow h4 {
    font-size: 13px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.18em;
    color: #5b7088; margin-bottom: 18px;
  }
  .donatix-home .htdss-follow ul {
    list-style: none; padding: 0; margin: 0;
    display: inline-flex; gap: 14px;
  }
  .donatix-home .htdss-follow ul li a {
    display: inline-flex; width: 48px; height: 48px;
    border-radius: 50%; background: #fff; color: #1860a8;
    border: 1px solid #dce7f2;
    align-items: center; justify-content: center;
    font-size: 17px; box-shadow: 0 8px 20px -14px rgba(11,46,86,0.5);
    transition: background 0.25s, color 0.25s, transform 0.25s, border-color 0.25s;
  }
  .donatix-home .htdss-follow ul li a:hover {
    background: linear-gradient(135deg, #1f6fbf, #e87a1e);
    color: #fff; border-color: transparent; transform: translateY(-4px);
  }

  /* ===== Global responsive guard-rails =====
     The donatix template ships generous desktop padding and a few rows that
     only declare col-xl-* widths. Soften padding on phones, and ensure rows
     fall back to a single column on small screens. */
  @media (max-width: 991px) {
    .donatix-home section[class*="-one"],
    .donatix-home section[class*="-two"],
    .donatix-home section[class*="-three"] {
      padding-top: 60px !important; padding-bottom: 60px !important;
    }
  }
  @media (max-width: 767px) {
    .donatix-home section[class*="-one"],
    .donatix-home section[class*="-two"],
    .donatix-home section[class*="-three"] {
      padding-top: 48px !important; padding-bottom: 48px !important;
    }
    /* Conference cards: tighten spacing on phones */
    .donatix-home .cause-one__single-img { aspect-ratio: 16 / 10; }
    .donatix-home .cause-one__single-content { padding: 20px !important; }
    .donatix-home .cause-one__single-content h3 { font-size: 18px !important; }
    /* Event row cards: keep date column readable */
    .donatix-home .event-two__single-date h2 { font-size: 42px !important; }
  }

  /* Prevent any wide section/inline image from causing a horizontal scrollbar */
  html, body { overflow-x: hidden; }
  .donatix-home img, .donatix-home iframe { max-width: 100%; }

  /* Stats: keep "3,500" and the "+" on the same line */
  .donatix-home .funfact-one__single-inner h2 {
    display: inline-flex; align-items: center; flex-wrap: nowrap;
    white-space: nowrap; gap: 4px;
  }
  .donatix-home .funfact-one__single-inner h2 .odometer,
  .donatix-home .funfact-one__single-inner h2 .plus { white-space: nowrap; }

  /* Three pillars / services: clip stray decorative shapes */
  .donatix-home .services-one, .donatix-home .services-one--three,
  .donatix-home .sliding-text-one, .donatix-home .about-three { overflow: hidden; }

  /* Nav links: WCAG-compliant touch targets on mobile */
  @media (max-width: 1199px) {
    .donatix-home .main-menu__list > li > a {
      display: inline-block; padding: 12px 0; min-height: 44px;
    }
    .donatix-home .mobile-nav__toggler {
      display: inline-flex !important; align-items: center; justify-content: center;
      width: 44px; height: 44px; font-size: 22px; color: #0b2e56;
      background: transparent; border: 0;
    }
  }

  /* Skip-nav (hidden until focused) */
  .hd-skip-nav {
    position: fixed; top: -100px; left: 12px; z-index: 10000;
    background: #0b2e56; color: #fff; padding: 10px 16px; border-radius: 8px;
    font-weight: 700; text-decoration: none; transition: top .2s ease;
  }
  .hd-skip-nav:focus { top: 12px; outline: 3px solid #e87a1e; outline-offset: 2px; }

  /* Focus-visible outlines for keyboard nav */
  .donatix-home a:focus-visible, .donatix-home button:focus-visible {
    outline: 3px solid #1860a8; outline-offset: 2px; border-radius: 4px;
  }

  /* ===== Mobile drawer ===== */
  .hd-mobile-drawer {
    position: fixed; inset: 0; z-index: 9998; pointer-events: none;
    visibility: hidden;
  }
  .hd-mobile-drawer.is-open { pointer-events: auto; visibility: visible; }
  .hd-mobile-drawer__backdrop {
    position: absolute; inset: 0; background: rgba(11,46,86,0.55);
    opacity: 0; transition: opacity .25s ease;
  }
  .hd-mobile-drawer.is-open .hd-mobile-drawer__backdrop { opacity: 1; }
  .hd-mobile-drawer__panel {
    position: absolute; top: 0; bottom: 0; right: 0;
    width: min(320px, 86vw); background: #fff; box-shadow: -10px 0 30px rgba(11,46,86,0.18);
    transform: translateX(100%); transition: transform .3s ease;
    display: flex; flex-direction: column;
    font-family: "Nunito Sans", system-ui, sans-serif;
  }
  .hd-mobile-drawer.is-open .hd-mobile-drawer__panel { transform: translateX(0); }
  .hd-mobile-drawer__head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 18px; border-bottom: 1px solid #eef2f7;
  }
  .hd-mobile-drawer__logo img { height: 54px; width: auto; display: block; }
  .hd-mobile-drawer__close {
    width: 44px; height: 44px; border: 0; background: transparent;
    color: #0b2e56; display: inline-flex; align-items: center; justify-content: center;
    cursor: pointer; border-radius: 8px;
  }
  .hd-mobile-drawer__close:hover { background: #f1f5fa; }
  .hd-mobile-drawer__nav { flex: 1; overflow-y: auto; padding: 10px 0; }
  .hd-mobile-drawer__nav ul { list-style: none; margin: 0; padding: 0; }
  .hd-mobile-drawer__nav a {
    display: block; padding: 14px 22px; color: #0b2e56;
    font-weight: 700; font-size: 16px; text-decoration: none;
    border-bottom: 1px solid #f3f6fa;
  }
  .hd-mobile-drawer__nav a:hover, .hd-mobile-drawer__nav a:focus { background: #f7faff; color: #e87a1e; }
  .hd-mobile-drawer__cta { padding: 18px 22px 8px; }
  .hd-mobile-drawer__cta .thm-btn { width: 100%; justify-content: center; }
  .hd-mobile-drawer__social {
    padding: 12px 22px 22px; display: flex; gap: 12px; border-top: 1px solid #eef2f7;
    margin-top: 8px;
  }
  .hd-mobile-drawer__social a {
    width: 40px; height: 40px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    background: #f3f7fd; color: #0b2e56; font-size: 16px; text-decoration: none;
  }
  .hd-mobile-drawer__social a:hover { background: #0b2e56; color: #fff; }

  /* Active nav link */
  .hd-mobile-drawer__nav a[aria-current="page"] {
    color: #e87a1e; background: #fff8f0;
  }
  .donatix-home .main-menu__list > li > a[aria-current="page"] {
    color: #e87a1e !important;
  }

  /* Back to top */
  .hd-back-top {
    position: fixed; bottom: 28px; right: 24px; z-index: 9000;
    width: 44px; height: 44px; border-radius: 50%;
    background: #1860a8; color: #fff; border: 0;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 20px rgba(24,96,168,0.4);
    cursor: pointer; opacity: 0; visibility: hidden;
    transform: translateY(12px);
    transition: opacity .3s ease, visibility .3s ease, transform .3s ease, background .2s;
  }
  .hd-back-top.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
  .hd-back-top:hover { background: #0b2e56; }
`;
