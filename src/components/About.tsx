import { Card } from '@/components/ui/card';
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'CGPA', value: '9.72/10', description: 'Academic Excellence' },
  { icon: Code2, label: 'Tech Stack', value: 'MERN', description: 'Full-Stack Development' },
  { icon: Briefcase, label: 'Experience', value: '1+ Year', description: 'Professional Work' },
  { icon: Award, label: 'Projects', value: '4+', description: 'Completed Works' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-muted/30"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building Digital Experiences
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80" data-testid="text-about-intro">
              I'm a passionate full-stack developer with a strong foundation in the MERN stack, currently working as a Frontend Developer at <span className="font-semibold text-foreground">Altis Advance Tech (Xircls)</span> in Mumbai.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              With a <span className="font-semibold text-foreground">9.72 CGPA</span> in Information Technology from Atharva College of Engineering, I bring both academic excellence and practical experience to every project I undertake.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I specialize in creating responsive, user-friendly interfaces with React.js and building robust backend systems with Node.js and Express. My experience includes developing Shopify Theme App Extensions, admin dashboards, and full-stack web applications that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm committed to writing clean, efficient code and continuously learning new technologies to deliver exceptional user experiences.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all"
                data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
