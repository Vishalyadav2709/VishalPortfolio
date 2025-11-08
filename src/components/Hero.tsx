import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-32 md:py-20"
      data-testid="section-hero"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
              data-testid="text-hero-name"
            >
              Vishal Tahsildar Yadav
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Full-Stack Developer
            </p>
            
            <div className="h-px w-24 mx-auto bg-border" />
            
            <p
              className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto"
              data-testid="text-hero-tagline"
            >
              Building scalable applications with React.js, Node.js, and the MERN stack.
              <br className="hidden sm:block" />
              Currently at Xircls, Mumbai.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:vishal.tyadav2709@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span className="hidden sm:inline">vishal.tyadav2709@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="tel:+919920067825"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 9920067825</span>
              </a>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Mumbai</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-github"
              >
                <Button variant="outline" size="default" className="gap-2">
                  <Github size={18} />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-linkedin"
              >
                <Button variant="outline" size="default" className="gap-2">
                  <Linkedin size={18} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </Button>
              </a>
              <a
                href="attached_assets/Vishal_Yadav_Resume_1762087354949.pdf"
                download
                data-testid="button-download-resume"
              >
                <Button size="default" className="gap-2">
                  <Download size={18} />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
