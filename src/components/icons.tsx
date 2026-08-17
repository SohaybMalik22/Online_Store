/** Hand-rolled inline icons — no icon package, no extra kilobytes. */

type P = { className?: string };
const base = "h-full w-full";

export const IconSearch = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconHeart = ({ className = "", filled = false }: P & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path
      d="M12 20.4S3.8 15.6 3.8 9.9A4.6 4.6 0 0 1 12 7.1a4.6 4.6 0 0 1 8.2 2.8c0 5.7-8.2 10.5-8.2 10.5Z"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconMenu = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconClose = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconArrow = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevron = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const IconPin = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const IconPhone = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path
      d="M6.5 3.5h3l1.4 3.6-2 1.4a12 12 0 0 0 6.6 6.6l1.4-2 3.6 1.4v3c0 1-.8 1.8-1.8 1.7C10.6 19 5 13.4 4.8 5.3c0-1 .7-1.8 1.7-1.8Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconClock = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const IconMail = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

export const IconWhatsapp = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path
      d="M12 3.2A8.8 8.8 0 0 0 4.4 16.5L3.4 20.6l4.2-1a8.8 8.8 0 1 0 4.4-16.4Zm5 12.5c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.6-4.9c-.5-.8-.8-1.6-.8-2.3 0-.7.4-1.4.8-1.7.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.3.5.8 1.2 1.4 1.7.7.6 1.3.9 1.7 1 .2.1.4.1.6-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.7 0 1Z"
      fill="currentColor"
    />
  </svg>
);

export const IconInstagram = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
  </svg>
);

export const IconFacebook = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path
      d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.5v3h2.8v8h3.2Z"
      fill="currentColor"
    />
  </svg>
);

export const IconTiktok = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
    <path
      d="M14.2 3h2.5c.2 1.7 1.4 3.1 3.3 3.3v2.5a5.9 5.9 0 0 1-3.3-1.1v5.9a5.3 5.3 0 1 1-5.3-5.3c.3 0 .5 0 .8.1v2.6a2.7 2.7 0 1 0 1.9 2.6V3Z"
      fill="currentColor"
    />
  </svg>
);

export const socialIcon: Record<string, (p: P) => React.ReactElement> = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
  WhatsApp: IconWhatsapp,
  TikTok: IconTiktok,
};
