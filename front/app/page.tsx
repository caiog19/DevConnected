import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  authorId: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts/search?q=`, {
    cache: 'no-store', // Para evitar cache
  });

  console.log('Fetch status:', res.status); // Loga o status da resposta

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  console.log('Fetched posts:', data); // Loga os dados retornados
  return data;
}


const HomePage = async () => {
  let posts: Post[] = [];
  
  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error('Error fetching posts:', error); // Loga o erro no console
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">DevConnected</Link>
          </h1>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="hover:underline">Sobre nós</Link>
            <Link href="/" className="hover:underline">Perguntas</Link>
            <Link href="/" className="hover:underline">Salvos</Link>
            <input
              type="text"
              placeholder="Buscar pelo site"
              className="p-2 rounded-md text-black"
            />
            
            <button className="transform hover:scale-105 transition-transform duration-300 bg-blue-500 px-4 py-2 rounded-md">
              <Link href="/auth/login" className="text-white block">
                Entrar
              </Link>
            </button>
            <button className="transform hover:scale-105 transition-transform duration-300 bg-blue-500 px-4 py-2 rounded-md">
              <Link href="/auth/register" className="text-white block">
                Registrar
              </Link>
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-6 py-6">
        <section className="col-span-8 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Principais Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="border-b py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {post.tags && post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <img src="/user-icon.png" alt="User" className="w-8 h-8 rounded-full" />
                  <span>Autor ID: {post.authorId}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="col-span-4 space-y-4">
          {/* Lateral */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Destaques de Hoje</h3>
            <div className="mt-2">
              <p className="text-sm">Stack do DevConnected</p>
              <p className="text-xs text-gray-500">49k perguntas | 79% respondidas</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Colaboradores em destaque</h3>
            <ul className="mt-2">
              <li className="text-sm"><Link href="/tour" className="hover:underline">caiog19</Link></li>
              <li className="text-sm"><Link href="/tour" className="hover:underline">caioggg19</Link></li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
