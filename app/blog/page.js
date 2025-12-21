import { BLOG_POSTS } from '../data';
import Link from 'next/link';

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-12">Blog AuxiliarPro</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-slate-500 mb-6">{post.excerpt}</p>
              {/* Este enlace debe ir directo a la carpeta física */}
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-blue-600 font-bold hover:underline"
              >
                Leer artículo completo →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
