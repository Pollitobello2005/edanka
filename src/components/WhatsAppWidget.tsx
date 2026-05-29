'use client';

const whatsappUrl = 'https://wa.me/523348663113?text=Hola,%20quiero%20más%20información%20sobre%20Voxai';

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
      <img
        src="/logos/whatsapp.svg"
        alt="WhatsApp"
        aria-hidden="true"
        className="h-7 w-7"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </a>
  );
}