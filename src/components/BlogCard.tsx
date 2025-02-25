
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
  slug
}: BlogCardProps) => {
  return (
    <div className="group hover-scale overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <Badge variant="secondary" className="px-3">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <a href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </a>
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <User className="mr-1 h-3 w-3" />
          <span>By {author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
