import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">DevConnected</Link>
          </h1>
          <nav className="flex items-center space-x-4">
            <Link href="/tour" className="hover:underline">Tour</Link>
            <Link href="/about" className="hover:underline">Sobre nós</Link>
            <Link href="/meta" className="hover:underline">Perguntas</Link>
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
            <li className="border-b py-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                Erro na integraçao de Gemini API
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>API</span>
                <span>AI</span>
                <span>4 respostas</span>
              </div>
            </li>

            <li className="border-b py-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                Como otimizar consultas SQL com Prisma?
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>SQL</span>
                <span>Prisma</span>
                <span>2 respostas</span>
              </div>
            </li>

            <li className="border-b py-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                Melhor maneira de aprender Tailwind CSS
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>CSS</span>
                <span>Front-end</span>
                <span>5 respostas</span>
              </div>
            </li>

            <li className="border-b py-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                Como configurar o Next.js com autenticação JWT?
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Next.js</span>
                <span>Auth</span>
                <span>3 respostas</span>
              </div>
            </li>

            <li className="py-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                O que são hooks personalizados no React?
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>React</span>
                <span>Hooks</span>
                <span>6 respostas</span>
              </div>
            </li>
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
