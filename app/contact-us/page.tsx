import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — HTDSS' };

export default function ContactPage() {
  return (
    <>
      {/* Contact info cards */}
      <section className="contact-page-info">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="contact-page-info__single">
                <div className="icon-box"><span className="icon-gps" /></div>
                <div className="content-box">
                  <h3>Address</h3>
                  <p>20, Round Tank Lane, Howrah&nbsp;711101</p>
                  <p>19, College Road, Howrah&nbsp;711103</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="contact-page-info__single">
                <div className="icon-box"><span className="icon-telephone1" /></div>
                <div className="content-box">
                  <h3>Phone</h3>
                  <p><a href="tel:+919830877675">+91 98308 77675</a></p>
                  <p><a href="tel:+919433515197">+91 94335 15197</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="contact-page-info__single">
                <div className="icon-box">
                  <svg width="40" height="40" viewBox="0 0 512 512" fill="#fff" aria-hidden="true">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <div className="content-box">
                  <h3>Email</h3>
                  <p><a href="mailto:howrahdiabetessociety@gmail.com">howrahdiabetessociety@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google map */}
      <section className="google-map-one">
        <iframe
          src="https://maps.google.com/maps?q=20%20Round%20Tank%20Lane%2C%20Howrah%2C%20West%20Bengal&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="google-map-one__map"
          title="HTDSS location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Contact form (floats right, overlapping the map — Donatix layout) */}
      <section className="contact-page-form">
        <div className="container clearfix">
          <div className="contact-page-form__inner">
            <div className="title-box"><h2>Get In Touch</h2></div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
