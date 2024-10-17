//Interface
import { IKnowledge } from './../../interface/IKnowledge.interface';

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'ícone de conhecimento em typescript'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento em javascript'
    },
    {
      src: 'assets/icons/knowledge/html-5.svg',
      alt: 'ícone de conhecimento em html'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento em css'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento em angular'
    },
  ])
}
