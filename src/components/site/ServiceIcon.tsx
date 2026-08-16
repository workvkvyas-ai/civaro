import { Code2, Globe, PenTool, TrendingUp, Star, Shapes } from "lucide-react";
import type { Service } from "@/lib/site-data";

const map = {
  code: Code2,
  globe: Globe,
  pen: PenTool,
  trend: TrendingUp,
  star: Star,
  shapes: Shapes,
};

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string | undefined }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" />;
}