import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Over All Internet",
        p: "Operador de telemarketing (Desenvolvedor Front-End) - 22/01/24 - Atualmente"
      },
      text: "<p>Desde janeiro de 2024, atuei por cerca de seis meses no setor de Call Center, onde pude aprimorar meus conhecimentos em redes e desenvolver minhas habilidades de comunicação com os clientes. Em julho de 2024, tive a oportunidade de ingressar no setor de desenvolvimento de software, onde continuo em constante aprendizado. </p> "
    },
    {
      summary: {
        strong: "Supermercado Santa Clara de Cândido Mota",
        p: "Estoquista/Caixa - 01/08/2022 - 01/06/2024",
      },
      text: "<p>Minha primeira experiência no mercado de trabalho foi em uma empresa pela qual sou eternamente grato por tudo o que me proporcionou. Foi onde tive a oportunidade de amadurecer profissionalmente e principalmente como pessoa, além de aprender a escutar e absorver conhecimentos. Nessa empresa, tive o privilégio de desenvolver minhas habilidades de comunicação com clientes e de trabalhar em equipe.<p>"
    },
  ])
}
