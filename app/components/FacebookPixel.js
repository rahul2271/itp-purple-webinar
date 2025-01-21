"use client"
import { useEffect } from 'react';

const FacebookPixel = () => {
  useEffect(() => {
    // Load the Pixel Script
    const script = document.createElement('script');
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the Pixel
    script.onload = () => {
      if (window.fbq) return;
      window.fbq = function() {
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
      };
      window.fbq.version = '2.0';
      window.fbq.queue = [];
      window.fbq('init', '454652642664487'); // Replace with your actual Pixel ID
      window.fbq('track', 'PageView'); // Track PageView by default
    };

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default FacebookPixel;
