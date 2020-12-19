import { useEffect, useState } from 'react';

function useScrollY() {
  if (typeof window === 'undefined') return;
  const isClient = typeof window === 'object';

  const getSize = () => {
    return isClient ? window.scrollY : undefined;
  };

  const [scrollY, setScrollY] = useState(getSize());

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleScroll() {
      const newY = getSize();
      setScrollY(newY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export default useScrollY;
