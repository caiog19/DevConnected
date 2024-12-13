import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: { title: string; content: string; tags: string[]; authorId: number }) {
    return this.prisma.post.create({
      data,
    });
  }

  async searchPosts(query: string) {
    return this.prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { content: { contains: query, mode: 'insensitive' } },
          { tags: { hasSome: [query] } }, 
        ],
      },
    });
  }
}
