import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  // Enable the browser's automatic scroll restoration for POP navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  useEffect(() => {
    // If it's a back/forward navigation, let the browser handle it
    if (navType === 'POP') return;

    const scrollToHash = () => {
      if (!hash) return false;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    // If a hash exists, try to scroll to it (with retries to account for route transitions/mounting)
    if (hash) {
      if (scrollToHash()) return;
      const t1 = setTimeout(scrollToHash, 50);
      const t2 = setTimeout(scrollToHash, 250);
      const t3 = setTimeout(scrollToHash, 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }

    // No hash – default behavior to scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash, navType]);

  return null;
}
