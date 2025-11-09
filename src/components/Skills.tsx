import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Globe, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'SQL'],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Shopify Liquid'],
  },
  {
    icon: Wrench,
    title: 'Tools & Frameworks',
    skills: ['Git', 'REST APIs', 'Bootstrap', 'Visual Studio Code', 'Postman'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Communication', 'Problem-Solving', 'Time Management', 'Leadership', 'Self-Awareness'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" data-testid="section-skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Technologies
          </p>
          <h2 className="text-2xl md:text-xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
