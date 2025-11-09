import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 bg-white left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto " style={{padding:"5px"}}>
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold tracking-tight hover-elevate px-3 py-2 rounded-md transition-all"
            data-testid="button-logo"
          >
            VY<span className="text-primary"></span>
          </button>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover-elevate rounded-md transition-all"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="attached_assets/Vishal_Yadav_Resume_1762087354949.pdf"
              download
              data-testid="button-download-resume"
            >
              <Button size="sm" className="ml-2">
                Resume
              </Button>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-2"
            data-testid="nav-mobile"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-foreground/80 hover:text-foreground hover-elevate rounded-md transition-all"
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="attached_assets/Vishal_Yadav_Resume_1762087354949.pdf"
              download
              className="mt-2"
              data-testid="button-mobile-resume"
            >
              <Button className="w-full">Download Resume</Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
