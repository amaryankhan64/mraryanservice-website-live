const PIXEL_ID = '1505019721393795';

type PixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window { fbq?: PixelFunction; __siteTrackingInstalled?: boolean; }
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

export function trackTemplatePreview(templateId: string) {
  window.fbq?.('track', 'ViewContent', {
    content_ids: [templateId],
    content_name: `Resume Template ${templateId}`,
    content_type: 'product',
  });
}

export function trackTemplateOrder(templateId: string) {
  window.fbq?.('track', 'Contact', {
    content_name: `Resume Template ${templateId}`,
    content_category: 'WhatsApp order',
  });
}

function trackProfileClick(destination: string) {
  window.fbq?.('trackCustom', 'ProfileClick', { destination });
}

export function installSiteTracking() {
  if (window.__siteTrackingInstalled) return;
  window.__siteTrackingInstalled = true;

  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (href.includes('wa.me/')) {
      window.fbq?.('track', 'Contact', {
        content_name: 'WhatsApp consultation',
        content_category: 'resume service',
      });
    } else if (href.includes('instagram.com')) {
      trackProfileClick('Instagram');
    } else if (href.includes('facebook.com')) {
      trackProfileClick('Facebook Page');
    } else if (href.includes('google.com')) {
      trackProfileClick('Google Business Profile');
    }
  }, true);
}
