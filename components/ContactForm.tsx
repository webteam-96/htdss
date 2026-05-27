'use client';

import { useState } from 'react';

// FormSubmit: free form backend, no account/key. First submission triggers a
// one-time activation email to the address below — click the link in it once,
// after which all submissions are delivered to that inbox. Works on static hosting.
// TESTING: primary recipient is web@kaizeninfotech.com; the society inbox is CC'd
// (see the _cc hidden field below). Switch back to the gmail for production.
const ENDPOINT = 'https://formsubmit.co/ajax/web@kaizeninfotech.com';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-page__form">
      <div className="row">
        {/* FormSubmit configuration */}
        <input type="hidden" name="_subject" value="New enquiry — HTDSS website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* also deliver a copy to the society inbox */}
        <input type="hidden" name="_cc" value="howrahdiabetessociety@gmail.com" />
        {/* auto-reply sent to the person who submits (to their Email field) */}
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for contacting Howrah Town Diabetes Study Society (HTDSS). We have received your message and will get back to you as soon as possible. Warm regards, HTDSS Team"
        />
        {/* honeypot: bots fill this, FormSubmit drops them */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="contact-page__input-box">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="contact-page__input-box">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-page__input-box text-message-box">
            <textarea name="message" placeholder="Type Your Message" required />
          </div>
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="thm-btn contact-page__btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send A Message'}{' '}
              <span className="icon-diagonal-arrow1" />
            </button>
          </div>

          {status === 'sent' && (
            <p style={{ marginTop: 20, color: '#1860a8', fontWeight: 600 }}>
              Thank you! Your message has been sent — we&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: 20, color: '#c0392b', fontWeight: 600 }}>
              Sorry, something went wrong. Please email us directly at
              howrahdiabetessociety@gmail.com.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
