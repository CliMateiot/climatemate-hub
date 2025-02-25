
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  imageUrl: string;
  results: string[];
  link: string;
}

const CaseStudyCard = ({
  title,
  industry,
  description,
  imageUrl,
  results,
  link
}: CaseStudyCardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover-scale">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge variant="outline" className="mb-3">
          {industry}
        </Badge>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        {results.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Key Results:</h4>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Button variant="ghost" className="group p-0" asChild>
          <a href={link} className="flex items-center text-primary">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
