import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[] = [];

  criarPost(post: {imagem: string, texto: string}) {
    this.posts.unshift(post); // adiciona no topo
  }

  getPosts() {
    return this.posts;
  }
}