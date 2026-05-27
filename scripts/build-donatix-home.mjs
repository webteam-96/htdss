// Build-time script: read the Donatix index3.html template, do content
// substitutions for HTDSS, rewrite assets/ paths, and write a clean body
// fragment that the home page renders via dangerouslySetInnerHTML.

import fs from 'node:fs';
import path from 'node:path';

const TEMPLATE = path.resolve('../main-html/index3.html');
const OUTPUT  = path.resolve('./donatix-home.html');

let html = fs.readFileSync(TEMPLATE, 'utf-8');

// Extract body content only
const start = html.indexOf('<body');
const after = html.indexOf('>', start) + 1;
const end = html.lastIndexOf('</body>');
let body = html.slice(after, end);

// Remove the script tags from the body (we'll load JS via next/script)
body = body.replace(/<script\b[\s\S]*?<\/script>/gi, '');

// Remove preloader (its hide-handler runs on window.load which fires
// before our deferred scripts arrive, leaving the spinner stuck on screen).
body = body.replace(/<!--Start Preloader-->[\s\S]*?<!--End Preloader-->/, '');

// Remove custom cursor pieces (they need JS init and look broken otherwise)
body = body.replace(/<div class="custom-cursor__cursor"><\/div>\s*<div class="custom-cursor__cursor-two"><\/div>/, '');

// Remove chat popup (placeholder email form we don't want)
body = body.replace(/<div class="chat-icon">[\s\S]*?<\/div>\s*<!--Chat Popup-->[\s\S]*?<!-- End sidebar widget content -->/, '');

// --- Brand text substitutions (BEFORE asset path rewrite so we don't
//     break `/donatix/` URLs) ---------------------------------
body = body.replaceAll('Donatix', 'HTDSS');
body = body.replace(/(?<!\/)donatix(?!\/)/g, 'htdss');

// Rewrite asset paths to live under /donatix/
body = body.replaceAll('assets/', '/donatix/');
body = body.replaceAll('index-2.html', '/');
body = body.replaceAll('index2.html', '/');
body = body.replaceAll('index3.html', '/');
body = body.replaceAll('index-one-page.html', '/');
body = body.replaceAll('index2-one-page.html', '/');
body = body.replaceAll('index3-one-page.html', '/');
body = body.replaceAll('index-dark.html', '/');
body = body.replaceAll('about.html', '/about-us');
body = body.replaceAll('contact.html', '/contact-us');
body = body.replaceAll('event-grid.html', '/events');
body = body.replaceAll('event-list.html', '/events');
body = body.replaceAll('event-details.html', '/events');
body = body.replaceAll('team.html', '/founders');
body = body.replaceAll('team-details.html', '/founders');
body = body.replaceAll('gallery.html', '/gallery');
body = body.replaceAll('blog-grid.html', '/events');
body = body.replaceAll('blog-standard.html', '/events');
body = body.replaceAll('blog-details.html', '/events');
body = body.replaceAll('donation.html', '/activities');
body = body.replaceAll('donate-now.html', '/contact-us');
body = body.replaceAll('donation-details.html', '/activities');
body = body.replaceAll('become-volunteer.html', '/contact-us');
body = body.replaceAll('faq.html', '/about-us');
body = body.replaceAll('404.html', '/');

// Logo image
body = body.replaceAll('/donatix/images/resources/logo-1.png', '/wp-content/uploads/2021/02/logo.jpeg');
body = body.replaceAll('/donatix/images/resources/logo-2.png', '/wp-content/uploads/2021/02/logo.jpeg');

// Top contact strip
body = body.replace(
  'Are you ready to help them? Let’s become a volunteers...',
  'Beating diabetes, together in Howrah — since 2018.'
);

// Donate Now button
body = body.replaceAll('Donate\n                                            Now', 'Contact us');
body = body.replaceAll('Donate Now', 'Contact us');

// Header CTA → "Join Us" pointing to the membership form (opens in new tab).
// Run after the text swap above so the button is in its "Contact us" state.
body = body.replace(
  /<a href="\/contact-us" class="thm-btn"><i class="icon-heart"><\/i>\s*Contact us<\/a>/g,
  '<a href="https://zfrmz.com/GmGYLfnaJ73KiYwDnAEQ" class="thm-btn" target="_blank" rel="noopener"><i class="icon-heart"></i> Join Us</a>'
);
body = body.replaceAll('Discover Now', 'Explore HTDSS');
body = body.replaceAll('Discover More', 'About us');
body = body.replaceAll('View All Event', 'View all activities');
body = body.replaceAll('More Cause', 'See events');

// --- Header nav: replace the entire mega-menu nav with a clean HTDSS nav ---
body = body.replace(
  /<ul class="main-menu__list">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/,
  `<ul class="main-menu__list">
    <li><a href="/">Home</a></li>
    <li><a href="/about-us">About</a></li>
    <li><a href="/founders">Founders</a></li>
    <li><a href="/events">Scientific events</a></li>
    <li><a href="/activities">Activities</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/webinar">Upcoming events</a></li>
    <li><a href="/contact-us">Contact</a></li>
  </ul></div></div>`
);

// --- Main slider: replace the entire slider with image-only slides ---
const HERO_SLIDES = [
  '/wp-content/uploads/2021/02/s1.jpg',
  '/wp-content/uploads/2021/02/slidcer.jpg',
  '/wp-content/uploads/2021/02/slider-new.jpg',
  '/wp-content/uploads/2021/02/slider-8.jpg',
  '/wp-content/uploads/2021/02/s2.jpg',
  '/wp-content/uploads/2021/02/s3.jpg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.18.47-PM.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.03-PM.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.03-PM-1.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.04-PM.jpeg',
  '/wp-content/uploads/2021/02/slider-7.jpg',
];

const slideMarkup = HERO_SLIDES.map(src => `
  <div class="swiper-slide">
    <div class="main-slider-one__single htdss-hero-slide">
      <img class="htdss-hero-img" src="${src}" alt="" />
    </div>
  </div>`).join('\n');

const newSliderSection = `
<section class="main-slider main-slider-one main-slider-one--three">
  <div class="main-slider-one--three__inner">
    <div class="swiper-container main-slider-one--three__slider">
      <div class="swiper-wrapper">${slideMarkup}</div>
    </div>
  </div>
  <div class="main-slider-one--three__wrap">
    <div class="swiper-counter">
      <div id="total"></div>
      <div id="current">01</div>
    </div>
  </div>
  <div class="main-slider-one--three__nav">
    <div class="main-slider-one--three__control banner-slider-button-prev">
      <span><i class="icon-up-arrow1" aria-hidden="true"></i></span>
    </div>
    <div class="main-slider-one--three__control banner-slider-button-next">
      <span><i class="icon-down-arrow" aria-hidden="true"></i></span>
    </div>
  </div>
</section>`;

body = body.replace(
  /<!-- Start Main Slider Three -->[\s\S]*?<!-- End Main Slider Three -->/,
  `<!-- Start Main Slider Three -->${newSliderSection}<!-- End Main Slider Three -->`
);

// --- Funfact (stats) replacements --------------------------------------
// Rewrite all 4 <h2>...</h2> blocks to a uniform structure:
//   <h2><span class="odometer" data-count="N"></span><span class="plus ml icon-plus"></span></h2>
// (the `ml` class gives consistent margin before the + icon)
const stats = [
  { count: 11,   label: 'National conferences' },
  { count: 12,   label: 'Walkathons &amp; events' },
  { count: 3500, label: 'People screened' },
  { count: 20,   label: 'Founding physicians' },
];
const statH2 = n => `<h2><span class="odometer" data-count="${n}"></span><span class="plus ml icon-plus"></span></h2>`;

// Replace each existing stat h2 in order
body = body.replace(/<h2><span class="odometer" data-count="25"><\/span>k<span class="plus icon-plus"><\/span>\s*<\/h2>/, statH2(stats[0].count));
body = body.replace(/<h2><span class="odometer" data-count="10"><\/span>k<span class="plus icon-plus"><\/span>\s*<\/h2>/, statH2(stats[1].count));
body = body.replace(/<h2><span class="odometer" data-count="500"><\/span><span\s+class="plus ml icon-plus"><\/span>\s*<\/h2>/, statH2(stats[2].count));
body = body.replace(/<h2><span class="odometer" data-count="45"><\/span>k<span class="plus icon-plus"><\/span>\s*<\/h2>/, statH2(stats[3].count));

body = body.replace(/<p>Incredible Volunteers<\/p>/, `<p>${stats[0].label}</p>`);
body = body.replace(/<p>Successful Campaigns<\/p>/, `<p>${stats[1].label}</p>`);
body = body.replace(/<p>Monthly Donors<\/p>/, `<p>${stats[2].label}</p>`);
body = body.replace(/<p>Team Support<\/p>/, `<p>${stats[3].label}</p>`);

// --- Services (pillars) section ----------------------------------------
body = body.replace(/<h4>How We Make a Difference<\/h4>/, '<h4>Our three pillars</h4>');
body = body.replace(/What We Do to Create Change/, 'Education · Enrichment · Empowerment');

// Service pillars: keep 3 (Education, Enrichment, Empowerment), drop the
// 4th, drop the "View Details" link on each. Rewrite the entire row.
const PILLARS = [
  { icon: 'icon-mortarboard', title: 'Education',
    blurb: 'Sharing the latest in diabetes care with physicians, nurses and students through conferences, workshops and webinars.' },
  { icon: 'icon-supplies', title: 'Enrichment',
    blurb: 'Building a richer clinical community in Howrah — diabetes specialists, endocrinologists and family physicians together.' },
  { icon: 'icon-first-aid-kit', title: 'Empowerment',
    blurb: 'Awareness camps, walkathons and free screenings so the community can take charge of its own health.' },
];

const pillarMarkup = PILLARS.map((p, i) => `
  <div class="col-xl-4 col-lg-4 col-md-6 wow ${i % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}" data-wow-delay="${i * 100}ms" data-wow-duration="1500ms">
    <div class="services-one__single text-center">
      <div class="shape1"><img src="/donatix/images/shapes/services-v1-shape1.png" alt=""></div>
      <div class="services-one__single-icon"><span class="${p.icon}"></span></div>
      <h2>${p.title}</h2>
      <p>${p.blurb}</p>
    </div>
  </div>`).join('\n');

body = body.replace(
  /<div class="row">\s*<!--Start Services One Single-->[\s\S]*?<!--End Services One Single-->\s*<\/div>\s*(?=<\/div>\s*<\/section>\s*<!--End Services One-->)/,
  `<div class="row">${pillarMarkup}</div>`
);

// --- Sliding text marquee: themed words --------------------------------
body = body.replace(/data-hover="medical"[^>]*>\s*medical/, 'data-hover="diabetes" class="sliding-text-one__title"> diabetes');
body = body.replace(/data-hover="education"[^>]*>\s*education/, 'data-hover="awareness" class="sliding-text-one__title style2"> awareness');
body = body.replace(/data-hover="foods"[^>]*>\s*foods/, 'data-hover="screening" class="sliding-text-one__title"> screening');
body = body.replace(/data-hover="health"[^>]*>\s*health/, 'data-hover="walkathon" class="sliding-text-one__title style2"> walkathon');
body = body.replace(/data-hover="support"[^>]*>\s*support/, 'data-hover="conferences" class="sliding-text-one__title"> conferences');
body = body.replace(/data-hover="donation"[^>]*>\s*donation/, 'data-hover="community" class="sliding-text-one__title style2"> community');

// --- About Three section ------------------------------------------------
body = body.replace(/<h4>About Our Organization<\/h4>/, '<h4>About HTDSS</h4>');
body = body.replace(/Making a Difference, One <br> Contribution\s*at a Time/, 'A community of physicians serving <br> Howrah since 2018');
body = body.replace(
  /<p>Founded in 1989 Donatix is a non-profit organization committed to improving lives\s*through food, education, clean water, and healthcare\. With a passionate team and a\s*global network of supporters,<\/p>/,
  '<p>The Howrah Town Diabetes Study Society (HTDSS) was founded on 1 July 2018 by nine physicians and two community associates with a shared vision: to <strong>educate</strong>, <strong>enrich</strong> and <strong>empower</strong> doctors and the community in the field of diabetes.</p>'
);

// Remove the two "Educate doctors" / "Empower community" text2 boxes
body = body.replace(/<div class="about-three__content-text2">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="about-three__content-btn">/,
  '<div class="about-three__content-btn">');

// Replace the left photo grid with a YouTube video
body = body.replace(
  /<!--Start About Three Img-->[\s\S]*?<!--End About Three Img-->/,
  `<!--Start About Three Img-->
<div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
  <div class="about-three__img htdss-about-video">
    <iframe
      src="https://www.youtube.com/embed/Iwby-wBEW7A"
      title="HTDSS introduction"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</div>
<!--End About Three Img-->`
);

// --- Cause Two: replace the whole "row" of cause cards with clean
//     HTDSS conference cards (3 in a row, no progress bars) -------------
body = body.replace(/<h4>Start donating poor people<\/h4>/, '<h4>Scientific events</h4>');
body = body.replace(/Locate the most well-liked <br> cause and make a\s*donation\./, 'National conferences <br> with HTDSS');

// Cause Two "See events" button: link to /events (Scientific events page)
body = body.replace(/<a href="\/activities" class="thm-btn">See events/, '<a href="/events" class="thm-btn">See events');

const CONFERENCES = [
  {
    href: '/11th-conference',
    img: '/uploads/2026/11th-conference.jpg',
    title: 'HDSCON-11 — Staying Well in Diabetes',
    meta1: '12–13 Sept 2026',
    meta2: 'Hyatt Regency, Kolkata',
    anim: 'fadeInUp',
  },
  {
    href: '/10th-conference',
    img: '/wp-content/uploads/2025/06/001.jpg',
    title: '10th National Conference — Diabetes &amp; Health',
    meta1: '23–24 Aug 2025',
    meta2: 'Hyatt Regency, Kolkata',
    anim: 'fadeInDown',
  },
  {
    href: '/9th-conference',
    img: '/wp-content/uploads/2024/08/8th-conference.jpg',
    title: '9th National Conference',
    meta1: '28 Sept 2024',
    meta2: 'National',
    anim: 'fadeInUp',
  },
];

const cardMarkup = CONFERENCES.map(c => `
  <div class="col-xl-4 col-lg-4 col-md-6 wow ${c.anim}" data-wow-delay=".3s">
    <div class="cause-one__single">
      <div class="cause-one__single-inner">
        <div class="cause-one__single-img">
          <img src="${c.img}" alt="">
        </div>
        <div class="cause-one__single-content">
          <h2><a href="${c.href}">${c.title}</a></h2>
          <div class="cause-one__single-bottom">
            <div class="cause-one__single-bottom-pattern" style="background-image: url(/donatix/images/pattern/cause-v1-single-bottom-pattern.jpg);"></div>
            <div class="cause-one__rised-and-goals">
              <div class="cause-one__raised"><span>${c.meta1}</span></div>
              <div class="cause-one__goals"><span>${c.meta2}</span></div>
            </div>
            <div class="btn-box">
              <a href="${c.href}" class="thm-btn">View details <span class="icon-diagonal-arrow1"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`).join('\n');

// Match from the row that contains the cause cards through its closing
// div, before the section's container closes. The cause-two section has
// exactly one `<div class="row">` containing the three cards.
body = body.replace(
  /<div class="row">\s*<!--Start Cause One Single-->[\s\S]*?<!--End Cause One Single-->\s*<\/div>\s*(?=<\/div>\s*<\/section>\s*<!--End Cause Two-->)/,
  `<div class="row">${cardMarkup}</div>`
);

// --- Brand carousel: hide for now, we have no brand logos --------------
body = body.replace(/<section class="brand-one">[\s\S]*?<\/section>\s*<!--End Brand One-->/, '');

// --- CTA Two section: remove entirely ----------------------------------
body = body.replace(/<!--Start Cta Two-->[\s\S]*?<!--End Cta Two-->/, '');

// --- Event Two: replace 3 events with HTDSS recent activities ----------
body = body.replace(/<h4>Upcoming events<\/h4>/, '<h4>Recent activities</h4>');
body = body.replace(/Take Part In Our Most <br> Recent Events\./, 'Walkathons, camps &amp; awareness <br> drives across Howrah');

// event-two "View all activities" button → ensure it points to /activities
body = body.replace(/<a href="\/events" class="thm-btn">View all activities/, '<a href="/activities" class="thm-btn">View all activities');

// Event entries - simple title swaps; dates and venue we'll adjust generically
body = body.replaceAll('Apple Upper West Side, Brooklyn', 'Howrah, West Bengal');
body = body.replaceAll('Charities working in high impact causes', 'Walkathon 2024');
body = body.replaceAll("Give the blessings of your to children's", 'World Diabetes Day');
body = body.replaceAll('Providing Access to safe water, sanitation', 'Awareness Programme &amp; Health Camp');

// Re-target each event-two card to its own activity detail page.
// (event-details.html → /events was the global mapping; per-card we want
// the actual content slug.)
const EV_LINKS = [
  { match: 'Walkathon 2024', href: '/walkathon-2024' },
  { match: 'World Diabetes Day', href: '/world-diabetes-day' },
  { match: 'Awareness Programme &amp; Health Camp', href: '/awareness-programme-health-camp' },
];
// First normalise button label so the EV_LINKS regex can target it
body = body.replaceAll('Event Details', 'View activity');

EV_LINKS.forEach(({ match, href }) => {
  const re = new RegExp(
    `<h2><a href="/events">(${match})</a></h2>([\\s\\S]*?)<a href="/events" class="thm-btn">View activity`
  );
  body = body.replace(re, (_, t, mid) =>
    `<h2><a href="${href}">${t}</a></h2>${mid}<a href="${href}" class="thm-btn">View activity`
  );
});
body = body.replace(/<h2>14<\/h2>\s*<p>April, <br> 2025<\/p>/, '<h2>14</h2><p>November, <br> 2024</p>');
body = body.replace(/<h2>04<\/h2>\s*<p>May, <br> 2025<\/p>/, '<h2>14</h2><p>November, <br> 2023</p>');
body = body.replace(/<h2>10<\/h2>\s*<p>May, <br> 2025<\/p>/, '<h2>31</h2><p>July, <br> 2022</p>');
body = body.replaceAll('/donatix/images/resources/event-v2-img1.jpg', '/wp-content/uploads/2024/11/walkthon-2024.jpg');
body = body.replaceAll('/donatix/images/resources/event-v2-img2.jpg', '/wp-content/uploads/2023/09/WhatsApp-Image-2024-08-09-at-3.25.jpg');
body = body.replaceAll('/donatix/images/resources/event-v2-img3.jpg', '/wp-content/uploads/2024/08/8th-conference.jpg');
body = body.replaceAll('Event Details', 'View activity');

// Remove the "Speakers" thumbnail list from each event-two card
body = body.replace(/<ul class="event-two__single-content-img">[\s\S]*?<\/ul>/g, '');

// --- Donation One section: hide (donations don't apply) -----------------
body = body.replace(/<section class="donation-one">[\s\S]*?<\/section>\s*<!--End Donation One-->/, '');

// --- Team section: remove entirely (the "Our Volunteer" section) -------
body = body.replace(/<section class="team-one team-one--two">[\s\S]*?<!--End Team Two-->/, '');

// --- Testimonials section: hide ----------------------------------------
body = body.replace(/<section class="testimonials-three">[\s\S]*?<!--End Testimonials Three-->/, '');

// --- Contact section: hide (have /contact-us) --------------------------
body = body.replace(/<section class="contact-one contact-one--two">[\s\S]*?<!--End Contact One -->/, '');

// --- Blog: hide --------------------------------------------------------
body = body.replace(/<section class="blog-one blog-one--three">[\s\S]*?<!--End Blog One-->/, '');

// --- Gallery section: remove entirely ----------------------------------
body = body.replace(/<!--Start Gallery One -->[\s\S]*?<!--End Gallery One -->/, '');
body = body.replace(/<section class="gallery-one">[\s\S]*?<\/section>/, '');

// --- Footer overhaul ----------------------------------------------------
body = body.replace(/\+88 0123 654 99/g, '+91 9830877675');
body = body.replace(/tel:88012365499/g, 'tel:+919830877675');
body = body.replace(/info@exmple\.com/g, 'howrahdiabetessociety@gmail.com');
body = body.replace(/mailto:info@exmple\.com/g, 'mailto:howrahdiabetessociety@gmail.com');
body = body.replace(/4648 Rocky Road Philadelphia PA/g, '20, Round Tank Lane, Howrah 711101');
body = body.replace(/<p>call emergency<\/p>/g, '<p>Call us</p>');
body = body.replace(/<p>address<\/p>/g, '<p>Address</p>');

// Footer social icons: only real HTDSS handles. Drop placeholders.
body = body.replace(
  /<div class="footer-widget__about-social-links">[\s\S]*?<\/div>/,
  `<div class="footer-widget__about-social-links">
    <a href="https://www.facebook.com/HTDSSkolkata/" target="_blank" rel="noopener" aria-label="Facebook"><span class="icon-facebook-app-symbol"></span></a>
    <a href="https://www.youtube.com/channel/UC4K_JctXcHPDLE-Vao-OBPQ" target="_blank" rel="noopener" aria-label="YouTube"><span class="icon-youtube"></span></a>
  </div>`
);

// Header top-strip social icons: same trim
body = body.replace(
  /<ul class="main-header__social-links-style1-list">[\s\S]*?<\/ul>/,
  `<ul class="main-header__social-links-style1-list">
    <li><a href="https://www.facebook.com/HTDSSkolkata/" target="_blank" rel="noopener" aria-label="Facebook"><span class="icon-facebook-app-symbol"></span></a></li>
    <li><a href="https://www.youtube.com/channel/UC4K_JctXcHPDLE-Vao-OBPQ" target="_blank" rel="noopener" aria-label="YouTube"><span class="icon-youtube"></span></a></li>
  </ul>`
);

// Remove the top contact strip (phone/email/address banner above middle row)
body = body.replace(/<div class="site-footer__top">[\s\S]*?<\/div>\s*(?=<div class="site-footer__middle">)/, '');

// Remove the footer background image div and decorative shapes
body = body.replace(/<div class="site-footer__bg"[\s\S]*?<\/div>\s*/, '');
body = body.replace(/<div class="shape1"><img src="\/donatix\/images\/shapes\/site-footer-v1-shape1\.png"[\s\S]*?<\/div>\s*/, '');
body = body.replace(/<div class="shape2 float-bob-x"><img src="\/donatix\/images\/shapes\/site-footer-v1-shape2\.png"[\s\S]*?<\/div>\s*/, '');
body = body.replace(/<div class="shape3 float-bob-y"><img src="\/donatix\/images\/shapes\/site-footer-v1-shape3\.png"[\s\S]*?<\/div>\s*/, '');

// Replace the newsletter widget column with a contact-details column (with icons)
body = body.replace(
  /<div class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0\.4s">\s*<div class="footer-widget__column footer-widget__newsletter">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  `<div class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
    <div class="footer-widget__column footer-widget__contact-info">
      <div class="footer-widget__title-box">
        <h3 class="footer-widget__title">Contact us</h3>
      </div>
      <ul class="footer-widget__contact-list">
        <li>
          <span class="footer-widget__contact-icon icon-location"></span>
          <div>
            <span class="footer-widget__contact-label">Address</span>
            <p>20, Round Tank Lane,<br>Howrah 711101, West Bengal</p>
          </div>
        </li>
        <li>
          <span class="footer-widget__contact-icon icon-mail"></span>
          <a href="mailto:howrahdiabetessociety@gmail.com">howrahdiabetessociety@gmail.com</a>
        </li>
        <li>
          <span class="footer-widget__contact-icon icon-telephone"></span>
          <a href="tel:+919830877675">+91 98308 77675</a>
        </li>
      </ul>
    </div>
  </div>`
);
body = body.replace(/Our secure online donation platform allows you to\s*make contributions quickly and safely\. Choose from various\./,
  'Howrah Town Diabetes Study Society — a community of physicians and volunteers working to make Howrah a healthier place to live with and beyond diabetes.');
body = body.replace(/© All Copyright 2025 by <a href="\/">HTDSS<\/a>/,
  `© ${new Date().getFullYear()} Howrah Town Diabetes Study Society. All rights reserved.`);
body = body.replace(/Subscribe to Our Newsletter\. Regular\s*inspection and feedback mechanisms/,
  'Subscribe for occasional updates on HTDSS events and conferences.');

// Footer quick links
body = body.replace(/<ul class="footer-widget__link">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>(\s*<div class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">)/,
`<ul class="footer-widget__link">
  <li><a href="/about-us"><span class="icon-next"></span> About us</a></li>
  <li><a href="/founders"><span class="icon-next"></span> Founders</a></li>
  <li><a href="/events"><span class="icon-next"></span> Scientific events</a></li>
  <li><a href="/activities"><span class="icon-next"></span> Activities</a></li>
  <li><a href="/contact-us"><span class="icon-next"></span> Contact us</a></li>
</ul></div></div></div>$1`);

body = body.replace(/<ul class="footer-widget__link">[\s\S]*?<li><a href="\/activities"><span class="icon-next"><\/span> Our\s*Campaign<\/a><\/li>\s*<\/ul>/,
`<ul class="footer-widget__link">
  <li><a href="/gallery"><span class="icon-next"></span> Gallery</a></li>
  <li><a href="/webinar"><span class="icon-next"></span> Upcoming events</a></li>
  <li><a href="/events"><span class="icon-next"></span> Conferences</a></li>
  <li><a href="/activities"><span class="icon-next"></span> Activities</a></li>
  <li><a href="/contact-us"><span class="icon-next"></span> Contact us</a></li>
</ul>`);

body = body.replace(/Our Services/g, 'Quick links');

// Footer copyright fallback patterns
body = body.replace(/<p class="site-footer__bottom-text">© All Copyright 2025 by[\s\S]*?<\/p>/,
  `<p class="site-footer__bottom-text">© ${new Date().getFullYear()} Howrah Town Diabetes Study Society. All rights reserved.</p>`);

// Footer bottom menu: drop the entire link list (keep only the copyright)
body = body.replace(/<ul class="site-footer__bottom-menu">[\s\S]*?<\/ul>/, '');

// Cart / search box: hide (no e-commerce)
body = body.replace(/<div class="main-header__cart-box">[\s\S]*?<\/div>\s*<div class="main-header__btn-box">/,
  '<div class="main-header__btn-box">');
body = body.replace(/<div class="main-header__search-box">[\s\S]*?<\/div>\s*<div class="main-header__btn-box">/,
  '<div class="main-header__btn-box">');

// Split into shared header (everything before the page-wrapper's main
// content) and footer (everything from <footer> onward), plus the home
// body (sections between them).
function splitChrome(html) {
  // Header = from start through the closing of <header>...</header>
  //          plus the stricky-header div that follows.
  const headerEnd = html.indexOf('<!-- Start Main Slider Three -->');
  const footerStart = html.indexOf('<!--Start Site Footer-->');
  const footerEnd = html.indexOf('</footer>') + '</footer>'.length;

  if (headerEnd === -1 || footerStart === -1 || footerEnd === -1) {
    throw new Error('Could not split chrome from body');
  }

  return {
    header: html.slice(0, headerEnd),
    bodyHome: html.slice(headerEnd, footerStart),
    footer: html.slice(footerStart, footerEnd),
  };
}

const { header, bodyHome, footer } = splitChrome(body);

fs.writeFileSync(OUTPUT, bodyHome, 'utf-8');
fs.writeFileSync(path.resolve('./donatix-header.html'), header, 'utf-8');
fs.writeFileSync(path.resolve('./donatix-footer.html'), footer, 'utf-8');
console.log(`Wrote ${OUTPUT} (${bodyHome.length} chars)`);
console.log(`Wrote donatix-header.html (${header.length} chars)`);
console.log(`Wrote donatix-footer.html (${footer.length} chars)`);
