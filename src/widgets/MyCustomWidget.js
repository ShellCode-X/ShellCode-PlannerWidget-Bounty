import React, { useEffect } from 'react';

export default function MyCustomWidget() {
  useEffect(() => {
    // Create a script element dynamically
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src =
      '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';

    // Get the first script tag on the page
    const s = document.getElementsByTagName('script')[0];

    // Insert the dynamically created script before the first script tag
    s.parentNode.insertBefore(script, s);

    // Set up the widget parameters
    window.myWidgetParam = window.myWidgetParam || [];
    window.myWidgetParam.push({
      id: 12, // Widget ID
      cityid: '2306104', // City ID 
      appid: '', // OpenWeatherMap API key
      units: 'metric', // Temperature unit
      containerid: 'my-custom-widget', // Update the container ID
    });
  }, []);

  return <div id="my-custom-widget"></div>; // Update the container ID
}
