import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    institution: 'Atharva College of Engineering',
    period: 'June 2020 – May 2024',
    grade: '9.72',
    gradeMax: '10.0',
    gradeLabel: 'CGPA',
    coursework: ['React', 'Operating Systems', 'Data Structures', 'SQL', 'Computer Networks'],
  },
  {
    degree: 'Honors',
    field: 'Data Science',
    institution: 'Atharva College of Engineering',
    period: 'June 2022 – May 2024',
    grade: '92',
    gradeMax: '100',
    gradeLabel: 'Percentage',
    coursework: [
      'Pandas & NumPy',
      'Data Visualization',
      'Exploratory Data Analysis',
      'Natural Language Processing',
    ],
  },
  {
    degree: 'Higher Secondary Certificate',
    field: 'Computer Science',
    institution: 'Thakur College Of Science and Commerce',
    period: 'March 2020',
    grade: '84.60',
    gradeMax: '100',
    gradeLabel: 'Percentage',
    coursework: ['HTML', 'CSS', 'JavaScript', 'C++', 'C'],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-muted/30"
      data-testid="section-education"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Academic Background
          </p>
          <h2 className="text-2xl md:text-xl font-bold tracking-tight">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover-elevate transition-all"
              data-testid={`card-education-${index}`}
            >
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1" data-testid={`text-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-foreground/80 mb-3">
                      {edu.field}
                    </p>
                    <p className="text-foreground/70 mb-2" data-testid={`text-institution-${index}`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Key Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="text-sm text-foreground/70"
                          data-testid={`text-course-${index}-${courseIndex}`}
                        >
                          {course}
                          {courseIndex < edu.coursework.length - 1 && ' •'}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>

                <div className="flex md:flex-col md:items-end md:justify-start items-start justify-start md:text-right">
                  <div className="inline-flex flex-col ">
                    <p className="text-sm text-muted-foreground mb-2">{edu.gradeLabel}</p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-2xl font-bold" data-testid={`text-grade-${index}`}>
                        {edu.grade}
                      </p>
                      <p className="text-xl text-muted-foreground">/{edu.gradeMax}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
