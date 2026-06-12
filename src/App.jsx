import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/home/HomePage';
import TechnologyPage from './pages/technology/TechnologyPage';
import TechnologyDetailPage from './pages/technology/TechnologyDetailPage';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import CategoryProductPage from './pages/products/CategoryProductPage';
import PerformancePage from './pages/performance/PerformancePage';
import ServicesPage from './pages/services/ServicesPage';
import InnovationPage from './pages/innovation/InnovationPage';
import CompanyPage from './pages/company/CompanyPage';
import CulturePage from './pages/company/CulturePage';
import HonorPage from './pages/company/HonorPage';
import AppearancePage from './pages/company/AppearancePage';
import ManufacturingPage from './pages/company/ManufacturingPage';
import ContactPage from './pages/company/ContactPage';
import ReferencePage from './pages/ReferencePage';
import NewsPage from './pages/news/NewsPage';
import NewsDetailPage from './pages/news/NewsDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/technology/:slug" element={<TechnologyDetailPage />} />
          
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:category" element={<CategoryProductPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          
          <Route path="/performance" element={<PerformancePage />} />
          
          <Route path="/services" element={<ServicesPage />} />
          
          <Route path="/innovation" element={<InnovationPage />} />
          
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/culture" element={<CulturePage />} />
          <Route path="/company/honor" element={<HonorPage />} />
          <Route path="/company/appearance" element={<AppearancePage />} />
          <Route path="/company/manufacturing" element={<ManufacturingPage />} />
          <Route path="/company/contact" element={<ContactPage />} />
          <Route path="/reference" element={<ReferencePage />} />
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
