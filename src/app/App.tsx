import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { DesignThemeProvider } from '../context/DesignThemeContext';
import { CartProvider } from '../context/CartContext';
import { DesignSwitcher } from '../components/layout/DesignSwitcher';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { AppRouter } from './router';

// Helper component to scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DesignThemeProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
            {/* 1. Client Approval Design Switcher Bar (Option A vs Option B) */}
            <DesignSwitcher />

            {/* 2. Mandatory Announcement Strip ("Family Owned") */}
            <AnnouncementBar />

            {/* 3. Main Storefront Header */}
            <SiteHeader />

            {/* 4. Active Route Page */}
            <main className="flex-1">
              <AppRouter />
            </main>

            {/* 5. Complete Storefront Footer */}
            <SiteFooter />
          </div>
        </CartProvider>
      </DesignThemeProvider>
    </BrowserRouter>
  );
};

