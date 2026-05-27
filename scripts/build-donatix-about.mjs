// Build the About page from main-html/about.html with ONLY the content
// that lived on the old WordPress /about-us page:
//   - "About Us" intro paragraph (founding story)
//   - YouTube video https://youtu.be/Iwby-wBEW7A
//   - Contact: two addresses, email, phone
//   - Social: Facebook + YouTube
import fs from 'node:fs';
import path from 'node:path';

const TEMPLATE = path.resolve('../main-html/about.html');
const OUTPUT = path.resolve('./donatix-about.html');

let html = fs.readFileSync(TEMPLATE, 'utf-8');
const start = html.indexOf('<body');
const after = html.indexOf('>', start) + 1;
const end = html.lastIndexOf('</body>');
let body = html.slice(after, end);

// Strip scripts, preloader, custom-cursor, chat popup
body = body.replace(/<script\b[\s\S]*?<\/script>/gi, '');
body = body.replace(/<!--Start Preloader-->[\s\S]*?<!--End Preloader-->/, '');
body = body.replace(/<div class="custom-cursor__cursor"><\/div>\s*<div class="custom-cursor__cursor-two"><\/div>/, '');
body = body.replace(/<div class="chat-icon">[\s\S]*?<!-- End sidebar widget content -->/, '');

// Strip template's own header (shared chrome provides it)
body = body.replace(/<!--Start Main Header One-->[\s\S]*?<!--End Main Header One-->/, '');
body = body.replace(/<div class="stricky-header[\s\S]*?<\/div>\s*<\/div>/, '');

// Strip template's footer (shared chrome provides it)
body = body.replace(/<!--Start Site Footer-->[\s\S]*?<!--End Site Footer-->/, '');

// Strip template page-header — the shared Breadcrumb now provides the page title
body = body.replace(/<!--Start Page Header-->[\s\S]*?<!--End Page Header-->/, '');

// Drop all leading chrome/junk (chat widget, stray page-header remnants,
// page-wrapper open) — real content begins at the About Two section.
const aboutStart = body.indexOf('<!--Start About Two-->');
if (aboutStart > 0) body = body.slice(aboutStart);

// Strip trailing widgets
body = body.replace(/<div class="mobile-nav__wrapper">[\s\S]*?<!-- \/\.mobile-nav__wrapper -->/, '');
body = body.replace(/<!-- Search Popup -->[\s\S]*?<!-- End Search Popup -->/, '');
body = body.replace(/<a href="#" data-target="html" class="scroll-to-target scroll-to-top">[\s\S]*?<\/a>/, '');

// Strip page-wrapper open/close (shared chrome provides it)
body = body.replace(/^\s*<div class="page-wrapper">/, '');
body = body.replace(/<\/div>\s*<!-- \/\.page-wrapper -->/, '');

// Rewrite asset paths
body = body.replaceAll('assets/', '/donatix/');

// Drop every donatix section EXCEPT page-header + about-two.
[
  'Team One', 'Contact One ', 'Event Two', 'Cause Two',
  'Brand One', 'Testimonials Three', 'Testimonials Two', 'Testimonials One',
  'Blog One', 'Gallery One', 'Cta Two', 'Cta One',
  'Funfact One', 'Funfact Two', 'Services One',
  'Approch One', 'Donation One', 'Sliding Text One',
  'FAQ One',
].forEach(name => {
  const re = new RegExp(`<!--Start ${name}[\\s\\S]*?<!--End ${name}[^-]*-->`, 'g');
  body = body.replace(re, '');
});

// Brand-token swaps
body = body.replace(/Donatix/g, 'HTDSS');
body = body.replace(/donatix/g, 'htdss');
body = body.replaceAll('/htdss/', '/donatix/');

// Page header (breadcrumb hero)
body = body.replace(/<h2>About Us<\/h2>/, '<h2>About Us</h2>');
body = body.replace(
  /<div class="page-header__bg"\s+style="background-image: url\([^)]+\);"\s*>/,
  '<div class="page-header__bg" style="background-image: url(/wp-content/uploads/2024/08/8th-conference.jpg);">'
);

// --- About Two section: replace inner content -------------------------
const ABOUT_PARAGRAPH = `Welcome to Howrah Town Diabetes Study Society (HTDSS) website. Howrah Town Diabetes Study Society (popularly known as HDS among the doctors' community) was founded on July 1, 2018. Out of a thought-provoking idea to create a platform for education, enrichment and empowerment of doctors and the society in the field of diabetes, nine like-minded, enthusiastic and dedicated doctors practising in Howrah, having a common interest in diabetes and its related specialities, formed the first diabetes society in Howrah. To fulfill their dream two non-doctor socially active lady associates also joined hands. The aim of this group is to raise awareness about diabetes, and conduct social and scientific programs to enhance learning, interacting and applying updated knowledge for the betterment of the society.`;

// Wholesale-replace the right content column so we don't leave any
// donatix copy / discover button / phone widget behind.
body = body.replace(
  /<!--Start About Two Content-->[\s\S]*?<!--End About Two Content-->/,
  `<!--Start About Two Content-->
<div class="col-xl-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
  <div class="about-two__content">
    <div class="sec-title sec-title-animation animation-style2">
      <div class="sec-title__tagline">
        <div class="left-line"></div>
        <div class="text"><h4>About HTDSS</h4></div>
      </div>
      <h2 class="sec-title__title title-animation">Welcome to HTDSS.</h2>
    </div>
    <div class="about-two__content-text1">
      <p>${ABOUT_PARAGRAPH}</p>
    </div>
  </div>
</div>
<!--End About Two Content-->`
);

// Replace the about-two image column with a YouTube video embed
body = body.replace(
  /<!--Start About Two Img-->[\s\S]*?<!--End About Two Img-->/,
  `<!--Start About Two Img-->
<div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
  <div class="about-two__img htdss-about-video">
    <iframe
      src="https://www.youtube.com/embed/Iwby-wBEW7A"
      title="HTDSS introduction"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</div>
<!--End About Two Img-->`
);

// Append a "Why Choose One" style contact section using the donatix
// .contact-one--two class for a clean Contact card layout.
const CONTACT_SECTION = `
<!--Start HTDSS Contact-->
<section class="contact-one contact-one--two htdss-contact-section">
  <div class="htdss-contact-shape htdss-contact-shape--1"></div>
  <div class="htdss-contact-shape htdss-contact-shape--2"></div>
  <div class="container">
    <div class="sec-title text-center sec-title-animation animation-style1">
      <div class="sec-title__tagline center">
        <div class="left-line"></div>
        <div class="text"><h4>Reach us</h4></div>
        <div class="right-line"></div>
      </div>
    </div>

    <div class="row htdss-contact-grid">
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
        <div class="htdss-contact-card">
          <div class="htdss-contact-card__icon"><span class="icon-location"></span></div>
          <h3>Regd. Office</h3>
          <p>20, Round Tank Lane,<br>Howrah PIN-711101,<br>West Bengal</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
        <div class="htdss-contact-card">
          <div class="htdss-contact-card__icon"><span class="icon-location"></span></div>
          <h3>Office</h3>
          <p>19, College Road,<br>Howrah PIN-711103,<br>West Bengal</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
        <div class="htdss-contact-card">
          <div class="htdss-contact-card__icon"><span class="icon-mail"></span></div>
          <h3>Email</h3>
          <p><a href="mailto:howrahdiabetessociety@gmail.com">howrahdiabetessociety@gmail.com</a></p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
        <div class="htdss-contact-card">
          <div class="htdss-contact-card__icon"><span class="icon-telephone"></span></div>
          <h3>Phone</h3>
          <p><a href="tel:+919830877675">+91 98308 77675</a></p>
        </div>
      </div>
    </div>

    <div class="htdss-follow">
      <h4>Follow on</h4>
      <ul>
        <li><a href="https://www.facebook.com/HTDSSkolkata/" target="_blank" rel="noopener" aria-label="Facebook"><span class="icon-facebook-app-symbol"></span></a></li>
        <li><a href="https://www.youtube.com/channel/UC4K_JctXcHPDLE-Vao-OBPQ" target="_blank" rel="noopener" aria-label="YouTube"><span class="icon-youtube"></span></a></li>
      </ul>
    </div>
  </div>
</section>
<!--End HTDSS Contact-->
`;

body = body.replace(/<!--End About Two-->/, '<!--End About Two-->' + CONTACT_SECTION);

// Strip the "Why Choose" section if it survived
body = body.replace(/<!--Start Why Choose One[\s\S]*?<!--End Why Choose One-->/, '');

// Remap any leftover nav hrefs (just in case)
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

fs.writeFileSync(OUTPUT, body, 'utf-8');
console.log(`Wrote ${OUTPUT} (${body.length} chars)`);
