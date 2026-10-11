const PIXEL_ID = '1352849366422188';

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[][] };

declare global {
  interface Window {
    fbq?: Fbq;
    __whatsAppTrackingInstalled?: boolean;
  }
}

export function installMetaPixel() {
  if (window.fbq) return;

  const fbq = ((...args: unknown[]) => {
    fbq.queue?.push(args);
  }) as Fbq;
  fbq.queue = [];
  window.fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
}

export function trackWhatsAppClick() {
  window.fbq?.('track', 'Contact', {
    content_name: 'WhatsApp consultation',
    content_category: 'resume service',
  });
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
