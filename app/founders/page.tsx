import {
  FOUNDERS,
  ASSOCIATES,
  PATRONS,
  COMMITTEE,
  FOUNDER_EMAIL,
  FOUNDER_PHONE,
  FOUNDERS_INTRO,
  PATRONS_INTRO,
  COMMITTEE_INTRO,
  type Person,
} from '@/lib/founders';

export const metadata = { title: 'Founders — HTDSS' };

function MemberCard({ person }: { person: Person }) {
  return (
    <div className="fdr-card">
      <div className="fdr-card__img">
        <img src={person.image} alt={person.name} loading="lazy" />
      </div>
      <div className="fdr-card__body">
        {person.role && <span className="fdr-card__role">{person.role}</span>}
        <h3 className="fdr-card__name">{person.name}</h3>
        <ul className="fdr-card__contact">
          <li>
            <span className="icon-mail" aria-hidden="true"></span>
            <a href={`mailto:${FOUNDER_EMAIL}`}>{FOUNDER_EMAIL}</a>
          </li>
          <li>
            <span className="icon-telephone" aria-hidden="true"></span>
            <a href={`tel:${FOUNDER_PHONE.replace(/[^0-9+]/g, '')}`}>{FOUNDER_PHONE}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PortraitCard({ person }: { person: Person }) {
  return (
    <div className="fdr-portrait">
      <div className="fdr-portrait__img">
        <img src={person.image} alt={person.name} loading="lazy" />
      </div>
      <h3 className="fdr-portrait__name">{person.name}</h3>
    </div>
  );
}

export default function FoundersPage() {
  return (
    <div className="fdr-page">
      {/* Founding members */}
      <section className="fdr-section">
        <div className="fdr-container">
          <div className="fdr-sec-head">
            <span className="fdr-tagline">Founding members</span>
            <h2 className="fdr-sec-title">Meet the Founders</h2>
          </div>
          <p className="fdr-lead-full">{FOUNDERS_INTRO}</p>
          <div className="fdr-grid fdr-grid--3">
            {FOUNDERS.map((p) => (
              <MemberCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Administrator & Associates */}
      <section className="fdr-section fdr-section--alt">
        <div className="fdr-container">
          <div className="fdr-sec-head">
            <span className="fdr-tagline">Administration</span>
            <h2 className="fdr-sec-title">Administrator &amp; Associates</h2>
          </div>
          <div className="fdr-grid fdr-grid--2 fdr-grid--center">
            {ASSOCIATES.map((p) => (
              <MemberCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Patrons */}
      <section className="fdr-section">
        <div className="fdr-container">
          <div className="fdr-sec-head">
            <span className="fdr-tagline">With gratitude</span>
            <h2 className="fdr-sec-title">Patrons</h2>
            <p className="fdr-sec-lead">{PATRONS_INTRO}</p>
          </div>
          <div className="fdr-grid fdr-grid--4">
            {PATRONS.map((p) => (
              <PortraitCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive committee */}
      <section className="fdr-section fdr-section--alt">
        <div className="fdr-container">
          <div className="fdr-sec-head">
            <span className="fdr-tagline">2025&ndash;26</span>
            <h2 className="fdr-sec-title">Executive Committee Members</h2>
            <p className="fdr-sec-lead">{COMMITTEE_INTRO}</p>
          </div>
          <div className="fdr-grid fdr-grid--4">
            {COMMITTEE.map((p) => (
              <PortraitCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: FOUNDERS_CSS,
        }}
      />
    </div>
  );
}

const FOUNDERS_CSS = `
.fdr-page { --navy:#0b2e56; --blue:#1860a8; --blue-2:#1f6fbf; --orange:#e87a1e; color:var(--navy);
  font-family: "Nunito Sans", system-ui, sans-serif; }
.fdr-page h1, .fdr-page h2, .fdr-page h3 { font-family: "Nunito", "Nunito Sans", system-ui, sans-serif; }
.fdr-container { max-width:1200px; margin:0 auto; padding:0 24px; }

/* Sections */
.fdr-section { padding:78px 0; background:#fff; }
.fdr-section--alt { background:linear-gradient(180deg,#f7faff 0%,#eef3fb 100%); }
.fdr-sec-head { text-align:center; max-width:820px; margin:0 auto 48px; }
.fdr-tagline { display:inline-block; font-size:12px; font-weight:700; letter-spacing:0.16em;
  text-transform:uppercase; color:var(--blue); margin-bottom:12px; position:relative; padding:0 16px; }
.fdr-tagline::before, .fdr-tagline::after { content:""; position:absolute; top:50%; width:24px; height:2px;
  background:linear-gradient(90deg,var(--blue),var(--orange)); }
.fdr-tagline::before { left:-16px; } .fdr-tagline::after { right:-16px; }
.fdr-sec-title { font-size:clamp(26px,3.4vw,38px); font-weight:800; color:var(--navy); margin:0; }
.fdr-sec-lead { margin:18px auto 0; max-width:760px; font-size:15px; line-height:1.8; color:#51647a; }
.fdr-lead-full { max-width:none; margin:0 0 44px; font-size:15.5px; line-height:1.9; color:#51647a;
  text-align:left; }

/* Grids */
.fdr-grid { display:grid; gap:30px; }
.fdr-grid--3 { grid-template-columns:repeat(3,1fr); }
.fdr-grid--4 { grid-template-columns:repeat(4,1fr); }
.fdr-grid--2 { grid-template-columns:repeat(2,1fr); max-width:760px; }
.fdr-grid--center { margin-left:auto; margin-right:auto; }
@media (max-width:900px){ .fdr-grid--3,.fdr-grid--4{ grid-template-columns:repeat(2,1fr);} }
@media (max-width:560px){ .fdr-grid--3,.fdr-grid--4,.fdr-grid--2{ grid-template-columns:1fr;} }

/* Member card (founders + associates) */
.fdr-card { position:relative; overflow:hidden; background:#fff; border:1px solid #e6eef4;
  border-radius:18px; box-shadow:0 12px 30px -22px rgba(11,46,86,0.5);
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.fdr-card::before { content:""; position:absolute; top:0; left:0; right:0; height:4px;
  background:linear-gradient(90deg,var(--blue),var(--orange));
  transform:scaleX(0); transform-origin:left; transition:transform .3s ease; z-index:2; }
.fdr-card:hover { transform:translateY(-8px); border-color:#d4e4f3;
  box-shadow:0 28px 54px -26px rgba(11,46,86,0.45); }
.fdr-card:hover::before { transform:scaleX(1); }
.fdr-card__img { aspect-ratio:4/5; overflow:hidden; background:#eef3fb; }
.fdr-card__img img { width:100%; height:100%; object-fit:cover; object-position:top center;
  transition:transform .5s ease; }
.fdr-card:hover .fdr-card__img img { transform:scale(1.05); }
.fdr-card__body { padding:22px 22px 24px; }
.fdr-card__role { display:inline-block; font-size:11px; font-weight:700; letter-spacing:0.08em;
  text-transform:uppercase; color:var(--blue); background:#eaf2fb; border-radius:999px;
  padding:5px 12px; margin-bottom:12px; }
.fdr-card__name { font-size:19px; font-weight:800; color:var(--navy); margin:0 0 14px; }
.fdr-card__contact { list-style:none; margin:0; padding:14px 0 0; border-top:1px solid #eef2f7;
  display:flex; flex-direction:column; gap:9px; }
.fdr-card__contact li { display:flex; align-items:center; gap:10px; font-size:13.5px; color:#51647a; }
.fdr-card__contact li [class^="icon-"] { color:var(--orange); font-size:15px; flex:0 0 auto; }
.fdr-card__contact a { color:#51647a; text-decoration:none; word-break:break-word; transition:color .2s; }
.fdr-card__contact a:hover { color:var(--blue); }

/* Portrait card (patrons + committee) */
.fdr-portrait { background:#fff; border:1px solid #e6eef4; border-radius:16px; overflow:hidden;
  box-shadow:0 10px 26px -22px rgba(11,46,86,0.5);
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.fdr-portrait:hover { transform:translateY(-6px); border-color:#d4e4f3;
  box-shadow:0 24px 48px -26px rgba(11,46,86,0.45); }
.fdr-portrait__img { aspect-ratio:4/5; overflow:hidden; background:#eef3fb; }
.fdr-portrait__img img { width:100%; height:100%; object-fit:cover; object-position:top center;
  transition:transform .5s ease; }
.fdr-portrait:hover .fdr-portrait__img img { transform:scale(1.05); }
.fdr-portrait__name { font-size:16px; font-weight:700; color:var(--navy); text-align:center;
  margin:0; padding:16px 14px; }
`;
