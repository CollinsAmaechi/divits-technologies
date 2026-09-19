import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import { siteConfig } from '../../config/siteConfig';

const Layout = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main id="main-content" className="pt-20">
        <Outlet />
      </main>
      <Footer />
      {siteConfig.features.enableWhatsAppButton && (
        <WhatsAppButton />
      )}
    </div>
  );
};

export default Layout;
