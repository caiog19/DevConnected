import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post('create')
  async createPost(@Body() data: { title: string; content: string; tags: string[]; authorId: number }) {
    return this.postsService.createPost(data);
  }

  @Get('search')
  async searchPosts(@Query('q') query: string) {
    return this.postsService.searchPosts(query);
  }
}
