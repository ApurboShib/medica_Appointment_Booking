import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to dynamically change page title based on current route
// Usage: Call useDynamicTitle() in any component to auto-update document title
export const useDynamicTitle = (customTitle = '') => {
  const location = useLocation(); 

  useEffect(() => {
   
    if (customTitle) {
      document.title = `${customTitle} | MediCare`;
      return;
    }

    // Map routes to page titles
    const titles = {
      '/': 'Home | MediCare',
      '/about': 'About Us | MediCare',
      '/bookings': 'My Bookings | MediCare',
      '/blogs': 'Blogs | MediCare',
    };

    // Check for doctor details route (dynamic parameter)
    if (location.pathname.startsWith('/doctors/')) {
      document.title = 'Doctor Details | MediCare';
    } else {
      // Use mapped title or default
      document.title = titles[location.pathname] || 'MediCare - Medical Appointment Booking';
    }
  }, [location, customTitle]); // Re-run when location or customTitle changes
};
