import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import BackToTop from '../common/BackToTop';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Note: PageTransition also handles scrollToTop after fadeOut,
    // but having this ensures immediate scroll on mount if needed.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
