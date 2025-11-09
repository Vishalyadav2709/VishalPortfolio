import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vishal.tyadav2709@gmail.com',
    href: 'mailto:vishal.tyadav2709@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9920067825',
    href: 'tel:+919920067825',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Malad, Mumbai',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Vishalyadav2709',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishal-yadav-0a8365209/',
  },
];

export default function Contact() {
  // ✅ Vite-safe asset path for your PDF
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
    <section id="contact" className="py-16 md:py-32" data-testid="section-contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Get In Touch
          </p>
          <h2 className="text-2xl md:text-xl font-bold tracking-tight mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all text-center"
              data-testid={`card-contact-${info.label.toLowerCase()}`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:text-primary transition-colors"
                      data-testid={`link-${info.label.toLowerCase()}`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium" data-testid={`text-${info.label.toLowerCase()}`}>
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links + Buttons */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <social.icon size={20} />
                </Button>
              </a>
            ))}
          </div>

          {/* Email & Resume Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="mailto:vishal.tyadav2709@gmail.com"
              className="w-full sm:w-auto"
              data-testid="button-email-me"
            >
              <Button size="lg" className="gap-2 w-full">
                <Mail size={20} />
                Email Me
              </Button>
            </a>

            {/* ✅ Fixed Resume Download Button */}
            <Button
              onClick={handleDownload}
              size="lg"
              variant="outline"
              className="gap-2 w-full"
              data-testid="button-download-resume-footer"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
