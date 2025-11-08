import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Altis Advance Tech Private Limited (Xircls)',
    location: 'Mumbai',
    period: 'June 2024 – Present',
    type: 'Full-time',
    achievements: [
      'Engineered a Shopify Theme App Extension to enhance customer account experiences on merchant storefronts',
      'Designed and maintained a React.js-based admin dashboard enabling merchants to manage app settings efficiently',
      'Enhanced user experience by focusing on UI/UX design and smooth integration within the Shopify ecosystem',
      'Integrated real-time configuration and API communication for dynamic customer interfaces',
      'Contributed to a multi-brand setup supporting D2C brands like Beast Life, Yardly London, Helios Shoes, and Kyari',
    ],
  },
  {
    role: 'Frontend Intern',
    company: 'Altis Advance Tech Private Limited (Xircls)',
    location: 'Mumbai',
    period: 'April 2024 – June 2024',
    type: 'Internship',
    achievements: [
      'Created responsive user interfaces using React.js and Vanilla JavaScript',
      'Improved frontend performance through DOM optimization and efficient state handling',
      'Integrated APIs to display real-time data within dynamic components',
      'Collaborated with backend teams to connect UI elements with RESTful APIs',
      'Built custom modals, buttons, and input components with dynamic props and conditional rendering',
      'Wrote clean, maintainable, and scalable code, following best practices and code reviews',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-muted/30"
      data-testid="section-experience"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <Card className="p-6 md:p-8 hover-elevate transition-all" data-testid={`card-experience-${index}`}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold" data-testid={`text-role-${index}`}>
                          {exp.role}
                        </h3>
                        <p className="text-lg text-foreground/80 mt-1" data-testid={`text-company-${index}`}>
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary" data-testid={`badge-type-${index}`}>
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase size={16} />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex gap-3 text-foreground/80"
                          data-testid={`text-achievement-${index}-${achIndex}`}
                        >
                          <span className="text-primary mt-2">•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
