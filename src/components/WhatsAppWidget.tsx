'use client';

const whatsappUrl = 'https://wa.me/523348663113?text=Hola,%20quiero%20más%20información%20sobre%20Edanka';

export default function WhatsAppWidget() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-[1.05] active:scale-[0.98] right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6"
      style={{
        background: '#25D366',
        color: '#ffffff',
      }}
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full"
        style={{ background: 'rgba(255,255,255,0.16)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 3 1.2 4.3L4 20.5l4.6-1.3c1.2.6 2.5.9 3.9.9 4.7 0 8.5-3.7 8.5-8.3S16.7 3.5 12 3.5Z" fill="#fff"/>
          <path d="M15.7 14.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.5.7-.7.9-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-.9-.7-.5-1.1-1.1-1.2-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.4.1-.1.1-.3 0-.4-.1-.1-.5-1.1-.7-1.6-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.7.8-.7 2 0 1.2.8 2.4 1 2.6.1.2 1.8 2.8 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" fill="#25D366"/>
        </svg>
      </span>
    </a>
  );
}