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
          <path d="M20.5 11.9c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.1-1.1L4 20.5l1.2-3.8c-.8-1.3-1.2-2.7-1.2-4.2C4 7.8 7.8 4 12.5 4s8 3.8 8 7.9Z" fill="#fff" opacity="0.96"/>
          <path d="M9.7 8.8c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.7 2.7 4.1 3.7 2 .8 2.4.7 2.8.7.4 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.7 1-.1.2-.3.2-.6.1-.2-.1-.9-.3-1.7-.9-.6-.5-1-.9-1.1-1.1-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.3.2-.5.1-.2 0-.3 0-.5-.1-.2-.6-1.5-.8-2.1Z" fill="#25D366"/>
        </svg>
      </span>
    </a>
  );
}