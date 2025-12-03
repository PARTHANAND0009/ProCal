import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Mail, ChevronRight, Zap } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#000000] text-slate-300">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`rounded-full transition-all duration-700 ${
              scrolled 
                ? 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
                : 'bg-transparent border-transparent'
            }`}
          >
            <div className="flex justify-between items-center h-14 px-6">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative w-8 h-8 flex items-center justify-center">
                   <Zap className="w-5 h-5 text-teal-400 fill-teal-400/20 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-teal-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <span className="text-xl font-bold text-white tracking-tighter">
                  ProCal
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-2 items-center">
                <div className="flex bg-white/5 rounded-full p-1 border border-white/5 mr-4 backdrop-blur-md">
                   <Link to="/" className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${location.pathname === '/' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Product</Link>
                   <Link to="/privacy" className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${location.pathname === '/privacy' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Privacy</Link>
                   <Link to="/terms" className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${location.pathname === '/terms' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Terms</Link>
                </div>
                
                <a 
                  href="#" 
                  className="group relative px-6 py-2 rounded-full bg-white text-black text-xs font-bold tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10 flex items-center">
                    Get App <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 z-50">
            <div className="glass-card rounded-3xl overflow-hidden p-6 space-y-4 flex flex-col items-center border border-white/10 bg-[#050507]/90 backdrop-blur-xl">
              <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/privacy" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Terms</Link>
              <div className="w-full h-px bg-white/10 my-2"></div>
              <a href="#" className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm text-center">Download ProCal</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative mt-auto border-t border-white/5 bg-black pt-20 pb-10 overflow-hidden">
        {/* Abstract light leak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
            <div className="md:w-1/3">
               <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">ProCal</Link>
               <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                 Quantifying human nutrition with computer vision and artificial intelligence.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Product</span>
                <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Download</a>
                <a href="#features" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Features</a>
                <a href="#how-it-works" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">How it works</a>
              </div>
              <div className="flex flex-col space-y-3">
                 <span className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Legal</span>
                <Link to="/privacy" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Terms of Service</Link>
              </div>
              <div className="flex flex-col space-y-3">
                 <span className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Connect</span>
                 <a href="mailto:parthanand67@gmail.com" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Contact Support</a>
                 <div className="flex space-x-4 mt-2">
                   <a href="#" className="text-slate-600 hover:text-white transition-colors"><Twitter size={16} /></a>
                   <a href="#" className="text-slate-600 hover:text-white transition-colors"><Instagram size={16} /></a>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-slate-700 font-mono">
            <p>&copy; {new Date().getFullYear()} ProCal AI Inc. San Francisco, CA.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500/50 animate-pulse"></span>
              All systems operational
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};