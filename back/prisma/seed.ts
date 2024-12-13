import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: "Erro na integração de Gemini API",
        content: "Enfrentando problemas na integração da Gemini API com um serviço de backend. Alguma ideia de solução?",
        tags: ["API", "AI"],
        authorId: 1,
      },
      {
        title: "Como otimizar consultas SQL com Prisma?",
        content: "Dicas para melhorar o desempenho de consultas SQL utilizando Prisma em um projeto NestJS.",
        tags: ["SQL", "Prisma"],
        authorId: 2,
      },
      {
        title: "Melhor maneira de aprender Tailwind CSS",
        content: "Quais são as melhores práticas e recursos para aprender Tailwind CSS rapidamente?",
        tags: ["CSS", "Front-end"],
        authorId: 3,
      },
      {
        title: "Como configurar o Next.js com autenticação JWT?",
        content: "Passo a passo para implementar autenticação JWT em um projeto Next.js.",
        tags: ["Next.js", "Auth"],
        authorId: 4,
      },
      {
        title: "O que são hooks personalizados no React?",
        content: "Explicação e exemplos práticos de como criar e utilizar hooks personalizados no React.",
        tags: ["React", "Hooks"],
        authorId: 5,
      },
    ],
  });

  console.log("Posts criados com sucesso!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
