import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function SectionLayout({ title, children, icon }: SectionLayoutProps) {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-4 mb-8">
          {icon && <div className="text-primary">{icon}</div>}
          <h1 className="text-primary">{title}</h1>
        </div>
        
        <Card className="shadow-elegant border-border/50 p-6 md:p-10 bg-card/50 backdrop-blur-sm">
          {children}
        </Card>
      </div>
    </div>
  );
}
