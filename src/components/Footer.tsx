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
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-github"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-linkedin"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:vishal.tyadav2709@gmail.com"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* ✅ Fixed Resume Download Button */}
            <button
              onClick={handleDownload}
              className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-resume"
            >
              Download Resume →
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
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
