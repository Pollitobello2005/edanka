'use client';

import { MessageCircle } from 'lucide-react';

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
        <MessageCircle size={22} strokeWidth={2.1} />
      </span>
    </a>
  );
}