import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Vite-safe public asset path
  const resumePath = `${import.meta.env.BASE_URL}assets/Vishal_Yadav_Resume.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', 'Vishal_Yadav_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="border-t border-border py-8" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Yadav Vishal. All rights reserved.
          </p>

          {/* Optional Scroll to Top */}
          {/* <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top ↑
          </button> */}
        </div>
      </div>
    </footer>
  );
}
