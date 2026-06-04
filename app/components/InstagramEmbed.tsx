'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_ID = 'instagram-embed-js';

/**
 * Renders a single Instagram post via Instagram's official embed.js.
 * Loads the script once and re-processes on mount so it also works after
 * client-side navigation (not just a full page load).
 */
export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();
    if (document.getElementById(SCRIPT_ID)) {
      process();
      return;
    }
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    s.onload = process;
    document.body.appendChild(s);
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: 0, width: '100%', maxWidth: 540 }}
    />
  );
}
