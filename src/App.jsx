import React, { useState, useEffect } from 'react';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import WhyCognizantPage from './app/why-cognizant/page';
import ProgramsPage from './app/programs/page';
import DynamicProgramPage from './app/programs/[slug]/page';
import GurusPage from './app/gurus/page';
import DynamicGuruPage from './app/gurus/[slug]/page';
import AdmissionsPage from './app/admissions/page';
import ResultsPage from './app/results/page';
import ContactPage from './app/contact/page';

// Error Boundary to prevent blank screen crashes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem', color: '#ffffff', background: '#0f172a', minHeight: '100vh', textAlign: 'center' }}>
          <h2 style={{ color: '#f97316', marginBottom: '1rem' }}>Something went wrong loading the page</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.hash = '';
              window.location.reload();
            }}
            style={{
              background: '#f97316',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Reload Homepage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const getPathFromLocation = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const pathname = window.location.pathname;

    if (hash === 'about' || pathname === '/about') {
      return '/about';
    }
    if (hash === 'why-cognizant' || pathname === '/why-cognizant') {
      return '/why-cognizant';
    }
    if (hash === 'programs' || pathname === '/programs') {
      return '/programs';
    }
    if (hash.startsWith('programs/') || pathname.startsWith('/programs/')) {
      const slug = hash.startsWith('programs/')
        ? hash.replace('programs/', '')
        : pathname.replace('/programs/', '');
      return `/programs/${slug}`;
    }
    if (hash === 'gurus' || pathname === '/gurus') {
      return '/gurus';
    }
    if (hash.startsWith('gurus/') || pathname.startsWith('/gurus/')) {
      const slug = hash.startsWith('gurus/')
        ? hash.replace('gurus/', '')
        : pathname.replace('/gurus/', '');
      return `/gurus/${slug}`;
    }
    if (hash === 'admissions' || pathname === '/admissions') {
      return '/admissions';
    }
    if (hash === 'results' || pathname === '/results') {
      return '/results';
    }
    if (hash === 'contact' || pathname === '/contact') {
      return '/contact';
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getPathFromLocation);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromLocation());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path) => {
    if (!path) return;
    if (path.startsWith('#')) {
      const id = path.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setCurrentPath(path);
    if (path === '/') {
      window.location.hash = '';
    } else {
      window.location.hash = path.replace(/^\//, '');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPath === '/about') {
      return <AboutPage onNavigateHome={() => handleNavigate('/')} onNavigate={handleNavigate} />;
    }

    if (currentPath === '/why-cognizant') {
      return <WhyCognizantPage onNavigateHome={() => handleNavigate('/')} onNavigate={handleNavigate} />;
    }

    if (currentPath === '/programs') {
      return (
        <ProgramsPage
          onNavigateHome={() => handleNavigate('/')}
          onSelectProgram={(slug) => handleNavigate(`/programs/${slug}`)}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath.startsWith('/programs/')) {
      const slug = currentPath.replace('/programs/', '');
      return (
        <DynamicProgramPage
          slug={slug}
          onNavigatePrograms={() => handleNavigate('/programs')}
          onNavigateHome={() => handleNavigate('/')}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath === '/gurus') {
      return (
        <GurusPage
          onNavigateHome={() => handleNavigate('/')}
          onSelectGuru={(slug) => handleNavigate(`/gurus/${slug}`)}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath.startsWith('/gurus/')) {
      const slug = currentPath.replace('/gurus/', '');
      return (
        <DynamicGuruPage
          slug={slug}
          onNavigateGurus={() => handleNavigate('/gurus')}
          onNavigateHome={() => handleNavigate('/')}
        />
      );
    }

    if (currentPath === '/admissions') {
      return (
        <AdmissionsPage
          onNavigateHome={() => handleNavigate('/')}
          onNavigatePrograms={() => handleNavigate('/programs')}
          onSelectProgram={(slug) => handleNavigate(`/programs/${slug}`)}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath === '/results') {
      return (
        <ResultsPage
          onNavigateHome={() => handleNavigate('/')}
          onNavigatePrograms={() => handleNavigate('/programs')}
          onNavigateContact={() => handleNavigate('/contact')}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactPage
          onNavigateHome={() => handleNavigate('/')}
          onNavigatePrograms={() => handleNavigate('/programs')}
          onNavigate={handleNavigate}
        />
      );
    }

    return (
      <HomePage
        onNavigateAbout={() => handleNavigate('/about')}
        onNavigate={handleNavigate}
      />
    );
  };

  return <ErrorBoundary>{renderContent()}</ErrorBoundary>;
}
