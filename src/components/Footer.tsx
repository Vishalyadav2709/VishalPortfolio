import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-8" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vishal Yadav</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer specializing in MERN stack, building scalable and efficient web applications.
            </p>
          </div> */}

          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div> */}

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
            <a
              href="attached_assets/Vishal_Yadav_Resume_1762087354949.pdf"
              download
              className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-resume"
            >
              Download Resume →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishal Tahsildar Yadav. All rights reserved.
          </p>
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
