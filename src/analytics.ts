const PIXEL_ID = '1352849366422188';

type PixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window { fbq?: PixelFunction; __whatsAppTrackingInstalled?: boolean; }
}

export function installMetaPixel() {
  if (window.fbq) return;
  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  }) as PixelFunction;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  window.fbq = fbq;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
}

export function trackWhatsAppClick() {
  window.fbq?.('track', 'Contact', { content_name: 'WhatsApp consultation', content_category: 'resume service' });
}

export function installWhatsAppTracking() {
  if (window.__whatsAppTrackingInstalled) return;
  window.__whatsAppTrackingInstalled = true;
  const originalOpen = window.open.bind(window);
  window.open = ((url?: string | URL, ...args: string[]) => {
    if (typeof url === 'string' && url.includes('wa.me/')) trackWhatsAppClick();
    return originalOpen(url, ...args);
  }) as typeof window.open;
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href*="wa.me/"]') : null;
    if (link) trackWhatsAppClick();
  }, true);
}
