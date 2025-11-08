import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';

// Array of stats for easy mapping
const stats = [
  { icon: GraduationCap, label: 'CGPA', value: '9.72/10', description: 'Academic Excellence' },
  { icon: Code2, label: 'Tech Stack', value: 'MERN', description: 'Full-Stack Development' },
  { icon: Briefcase, label: 'Experience', value: '1+ Year', description: 'Professional Work' },
  { icon: Award, label: 'Projects', value: '4+', description: 'Completed Works' },
];

// Main About component
export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-muted/30"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Building Digital Experiences
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-16 items-start">
          
          {/* Left Column: Introduction Text with Dropdown */}
          <div className="lg:col-span-3 space-y-4 text-lg text-foreground/80">
            <p className="text-left" data-testid="text-about-intro">
              I'm a passionate MERN stack developer based in Mumbai, currently crafting user-centric front-end solutions at <span className="font-semibold text-foreground">Altis Advance Tech (Xircls)</span>. I combine academic excellence with hands-on experience to build efficient and scalable web applications.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                {/* 
                  DEFINITIVE FIX: 
                  1. Remove `asChild` entirely.
                  2. Pass ONLY the text "Read More" as the child.
                  3. The component will automatically add its own rotating chevron icon.
                  4. Style the trigger directly with `className` to get the desired appearance.
                */}
                <AccordionTrigger className="text-lg text-primary hover:no-underline justify-start p-0 font-medium">
                  Read More
                </AccordionTrigger>

                <AccordionContent className="pt-4 text-left">
                  <div className="space-y-6">
                    <p>
                      Graduating with a <span className="font-semibold text-foreground">9.72 CGPA</span> in Information Technology from Atharva College of Engineering, I excel in creating responsive interfaces with React.js and robust back-ends with Node.js and Express.
                    </p>
                    <p>
                      My portfolio includes developing Shopify Theme App Extensions, admin dashboards, and full-stack applications that solve real-world problems. I am committed to writing clean code and continuously learning to deliver exceptional user experiences.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="p-5 hover-elevate transition-transform duration-300 ease-in-out"
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