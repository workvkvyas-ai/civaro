import { Link } from "@tanstack/react-router";

export function BlogCard({
  post,
}: {
  post: { slug: string; title: string; category: string; excerpt: string; readTime: string; date: string };
}) {
  return (
    <article className="group flex h-full flex-col border-t border-foreground/15 pt-6">
      <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="text-brand">{post.category}</span>
        <span aria-hidden="true">/</span>
        <span>{post.date}</span>
      </div>
      <h3 className="mt-5 text-xl leading-snug font-semibold">
        <Link to="/insights" className="transition-colors group-hover:text-brand">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <p className="mt-6 text-xs text-muted-foreground">{post.readTime}</p>
    </article>
  );
}