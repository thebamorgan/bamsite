"use client";
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Change the background color when the component mounts
    document.body.style.backgroundColor = 'rgb(50, 100, 113)';

    // Cleanup: Reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <h1>Hello, Next.js!</h1>;
}
