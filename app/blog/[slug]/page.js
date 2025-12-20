// app/blog/[slug]/page.js
import { BLOG_POSTS } from '../../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Esto genera los títulos (SEO) automáticamente para cada artículo
export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Artículo no encontrado' };
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }) {
  // Buscamos el artículo en BLOG_POSTS que coincida con el slug de la URL
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  // Si no existe, enviamos a la página 404 oficial de Next.js
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Navegación (Breadcrumbs) */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium line-clamp-1 inline">{post.title}</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* IMPORTANTE: Usamos dangerouslySetInnerHTML porque el contenido 
            en data.js es HTML puro. Las clases 'prose' de Tailwind 
            se encargan de que se vea profesional automáticamente.
        */}
        <section 
          className="prose prose-slate prose-lg max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-p:leading-relaxed prose-p:text-slate-700
            prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900
            prose-ul:list-disc prose-ol:list-decimal"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Botón de retorno al blog */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link 
            href="/blog"
            className="text-blue-600 font-bold flex items-center hover:translate-x-[-4px] transition-transform"
          >
            ← Volver a todos los artículos
          </Link>
        </div>
      </article>
    </main>
  );
}
