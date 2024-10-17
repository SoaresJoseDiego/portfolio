import { Component, inject, signal } from '@angular/core';
// Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/Ecommerce.png',
      alt: '',
      title: 'Site Ecommerce',
      width: '200px',
      height: '100px',
      description:
        '<p>O resultado deste projeto foi incrível para mim, pois foi minha primeira experiência com React e me permitiu aprimorar minhas habilidades em TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Site',
          href: 'ecommerce-teal-eight.vercel.app',
        },
      ],
    },
    {
      src: 'assets/img/projects/Knowflex.png',
      alt: '',
      title: 'FlexBox',
      width: '200px',
      height: '100px',
      description:
        '<p>Desenvolvi este projeto para aprimorar minhas habilidades e esclarecer minhas dúvidas sobre o Flexbox.</p>',
      links: [
        {
          name: 'Conheça o Site',
          href: 'know-flex-b28y.vercel.app',
        },
      ],
    },
    {
      src: 'assets/img/projects/telaLogin.png',
      alt: '',
      title: 'Tela de Login',
      width: '200px',
      height: '100px',
      description:
        '<p>Desenvolvi esta tela de login simples, mas dinâmica, que esclareceu muitas dúvidas que eu tinha sobre HTML e CSS.</p>',
      links: [
        {
          name: 'Conheça o Site',
          href: 'window-login.vercel.app',
        },
      ],
    },
    {
      src: 'assets/img/projects/todoList.png',
      alt: '',
      title: 'Site Ecommerce',
      width: '200px',
      height: '100px',
      description:
        '<p>A pedido de minha mãe realizei esse pequeno projeto.</p>',
      links: [
        {
          name: 'Conheça o Site',
          href: 'listadetarefa-seven.vercel.app',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
