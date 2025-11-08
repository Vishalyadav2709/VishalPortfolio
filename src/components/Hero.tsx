import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-gradient-to-b from-background to-muted/20"
      data-testid="section-hero"
    >
      <div className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl w-full">
          <div className="space-y-8 text-center">
            {/* Main Content */}
            <div className="animate-fade-in-up space-y-4">
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                data-testid="text-hero-name"
              >
             Yadav Vishal Tahsildar
              </h1>
              
              <p className="text-xl font-light text-muted-foreground sm:text-2xl md:text-3xl">
                Full-Stack Developer
              </p>
              
              
              <p
                className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg"
                data-testid="text-hero-tagline"
              >
                Building scalable applications with React.js, Node.js, and the MERN stack.
                <br className="hidden sm:block" />
                Currently at Xircls, Mumbai.
              </p>
            </div>

            {/* Contact & Social Links */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-col items-center gap-8">
              {/* Contact Information */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href="mailto:vishal.tyadav2709@gmail.com"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-email"
                >
                  <Mail size={16} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">vishal.tyadav2709@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </a>
                
                <span className="hidden text-muted-foreground sm:block">•</span>
                
                <a
                  href="tel:+919920067825"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-phone"
                >
                  <Phone size={16} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span>+91 9920067825</span>
                </a>
                
                <span className="hidden text-muted-foreground sm:block">•</span>
                
                <div className="group flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span>Mumbai</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-github"
                >
                  <Button variant="outline" size="default" className="gap-2">
                    <Github size={18} />
                    <span className="hidden sm:inline">GitHub</span>
                     <span className="sm:hidden">GitHub</span>
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
                    <span className="sm:hidden">LinkedIn</span>
                  </Button>
                </a>
                
                <a
                  href="attached_assets/Vishal_Yadav_Resume_1762087354949.pdf"
                  download
                  data-testid="button-download-resume"
                >
                  <Button size="default" className="gap-2 shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                    <Download size={18} />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}