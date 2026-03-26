import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  imagem: string = '';
  texto: string = '';

  constructor(public postService: PostService) {}

  publicar() {
    if (!this.imagem && !this.texto) return;

    this.postService.criarPost({
      imagem: this.imagem,
      texto: this.texto
    });

    // limpa inputs
    this.imagem = '';
    this.texto = '';
  }
}