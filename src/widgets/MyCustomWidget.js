import React, { useEffect } from 'react';

export default function MyCustomWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-cb51ab04-8892-4545-bca7-f937f664f098"></div>
  );
};
