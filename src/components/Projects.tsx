import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Shopify Extension + Merchant Dashboard',
    period: 'Live & In Progress',
    status: 'Active',
    description: 'A dual-platform solution featuring a customer-facing Theme App Extension for personalized Shopify accounts and a merchant-facing React.js dashboard.',
    highlights: [
      'Developed reusable React components and integrated Shopify Liquid for seamless storefront compatibility',
      'Synchronized dashboard and storefront data using REST APIs and metafields',
      'Built a drag-and-drop UI editor enabling no-code customization for merchants',
      'Supported a scalable multi-tenant model for brands like Beast Life, Yardly London, and Kyari',
    ],
    technologies: ['React.js', 'Shopify Liquid', 'Theme App Extensions', 'REST APIs'],
  },
  {
    title: 'Plant Nursery Platform',
    period: 'Jan 2024 – May 2024',
    status: 'Completed',
    description: 'A unified MERN stack platform connecting vendors, shop owners, and customers in the plant nursery domain.',
    highlights: [
      'Designed a multi-role platform with distinct interfaces for vendors, shop owners, and customers',
      'Implemented full CRUD operations with MongoDB for data management',
      'Built responsive UI with React.js for seamless user experience',
      'Developed RESTful APIs with Node.js and Express for backend operations',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Book Store Management System',
    period: 'Nov 2023 – Jan 2024',
    status: 'Completed',
    description: 'A full-featured CRUD system for managing a bookstore with role-based access control.',
    highlights: [
      'Built a complete book inventory management system',
      'Implemented role-based authentication and authorization',
      'Created admin dashboard for managing books, users, and orders',
      'Designed RESTful API architecture for scalable operations',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Portfolio
          </p>
          <h2 className="text-2xl md:text-xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover-elevate transition-all"
              data-testid={`card-project-${index}`}
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{project.period}</span>
                      </div>
                      <Badge 
                        variant={project.status === 'Active' ? 'default' : 'secondary'}
                        data-testid={`badge-status-${index}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-lg font-bold mb-3" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className=" leading-relaxed text-xs">
                      {project.description}
                    </p>
                  </div>
{/*                   
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                  </div> */}
                </div>

                {/* <div className="border-l-2 border-primary/20 pl-6 space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex gap-3 text-foreground/70"
                      data-testid={`text-highlight-${index}-${hIndex}`}
                    >
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="flex-1">{highlight}</span>
                    </div>
                  ))}
                </div> */}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${index}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* {index === 0 && (
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => console.log('View Live Project clicked')}
                      data-testid={`button-view-project-${index}`}
                    >
                      View Live
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                )} */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
