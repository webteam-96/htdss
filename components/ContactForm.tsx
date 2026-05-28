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
    <form
      onSubmit={handleSubmit}
      action={ENDPOINT}
      method="post"
      className="contact-page__form"
      noValidate
    >
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
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

        <div className="col-12 col-md-12">
          <div className="contact-page__input-box">
            <label htmlFor="cf-name" className="sr-only">Your name</label>
            <input id="cf-name" type="text" name="name" placeholder="Your Name" autoComplete="name" required />
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="contact-page__input-box">
            <label htmlFor="cf-email" className="sr-only">Email address</label>
            <input id="cf-email" type="email" name="email" placeholder="Email Address" autoComplete="email" required />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="contact-page__input-box">
            <label htmlFor="cf-phone" className="sr-only">Phone number</label>
            <input id="cf-phone" type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" inputMode="tel" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="contact-page__input-box">
            <label htmlFor="cf-subject" className="sr-only">Subject</label>
            <input id="cf-subject" type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="col-12">
          <div className="contact-page__input-box text-message-box">
            <label htmlFor="cf-message" className="sr-only">Your message</label>
            <textarea id="cf-message" name="message" placeholder="Type Your Message" required />
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

          <div className="sr-only" role="status" aria-live="polite">
            {status === 'sending' && 'Sending your message…'}
            {status === 'sent' && 'Your message has been sent.'}
          </div>

          {status === 'sent' && (
            <p role="status" style={{ marginTop: 20, color: '#1860a8', fontWeight: 600 }}>
              Thank you! Your message has been sent — we&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" style={{ marginTop: 20, color: '#c0392b', fontWeight: 600 }}>
              Sorry, something went wrong. Please email us directly at
              howrahdiabetessociety@gmail.com.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
