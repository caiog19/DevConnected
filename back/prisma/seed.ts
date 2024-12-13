import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User One',
      password: 'password123', 
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User Two',
      password: 'password123',
    },
  });
  const user3 = await prisma.user.create({
    data: {
      email: 'user3@example.com',
      name: 'User Three',
      password: 'password123', 
    },
  });

  const user4 = await prisma.user.create({
    data: {
      email: 'user4@example.com',
      name: 'User Four',
      password: 'password123',
    },
  });  const user5 = await prisma.user.create({
    data: {
      email: 'user5@example.com',
      name: 'User Five',
      password: 'password123', // Certifique-se de que a senha seja processada adequadamente se você usar hash
    },
  });

  await prisma.post.createMany({
    data: [
      {
        title: "Erro na integração de Gemini API",
        content: "Enfrentando problemas na integração da Gemini API com um serviço de backend. Alguma ideia de solução?",
        tags: ["API", "AI"],
        authorId: user1.id,
      },
      {
        title: "Como otimizar consultas SQL com Prisma?",
        content: "Dicas para melhorar o desempenho de consultas SQL utilizando Prisma em um projeto NestJS.",
        tags: ["SQL", "Prisma"],
        authorId: user2.id,
      },
      {
        title: "Melhor maneira de aprender Tailwind CSS",
        content: "Quais são as melhores práticas e recursos para aprender Tailwind CSS rapidamente?",
        tags: ["CSS", "Front-end"],
        authorId: user3.id,
      },
      {
        title: "Como configurar o Next.js com autenticação JWT?",
        content: "Passo a passo para implementar autenticação JWT em um projeto Next.js.",
        tags: ["Next.js", "Auth"],
        authorId: user4.id,
      },
      {
        title: "O que são hooks personalizados no React?",
        content: "Explicação e exemplos práticos de como criar e utilizar hooks personalizados no React.",
        tags: ["React", "Hooks"],
        authorId: user5.id,
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
