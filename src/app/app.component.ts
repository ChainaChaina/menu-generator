import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**
 * Represents the root component of the application.
 */
export class AppComponent {

  price1 = 'P - R$ 15.00';
  price2 = 'M - R$ 18.00';
  price3 = 'G - R$ 20.00';
  price4 = 'GG - R$ 22.00';

  guarn1 = 'Arroz Branco';
  guarn2 = 'Feijão preto caldo';
  guarn3 = 'Farofa';
  guarn4 = '';
  guarn5 = '';
  guarn6 = '';

  protein1 = 'File de Frango Grelhado';
  protein2 = 'Peixe frito';
  protein3 = 'Linguiça Calabresa';
  protein4 = 'Carne Ensopada';
  protein5 = null
  protein6 = null

  salad1 = 'Alface';
  salad2 = 'Maionese';
  salad3 = 'Repolho';
  salad4 = 'Vagem com ovos';
  salad5 = null
  salad6 = null


  bebida1 = 'Suco de Laranja';
  bebida1p = null
  bebida2 = 'Refrigerante';
  bebida2p = null
  bebida3 = 'Água';
  bebida3p = null
  bebida4 = 'Cerveja';
  bebida4p = null
  bebida5 = 'Cerveja';
  bebida5p = null
  

  menuReady: boolean = false;

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   */
  ngAfterViewInit() {

  }

  makeMenu(){
    this.menuReady = true;
    setTimeout(() => {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      const image = new Image();
      image.src = './assets/imgs/Menu.jpg';
      image.onload = () => {
        if (ctx) {
          ctx.drawImage(image, 0, 0);
          ctx.font = 'bold 38px Arial ';
          ctx.fillStyle = 'black';

          if (this.price1) {
            ctx.fillText(this.price1, 220, 200);
          }
          if (this.price2) {
            ctx.fillText(this.price2, 460, 200);
          }
          if (this.price3) {
            ctx.fillText(this.price3, 700, 200);
          }
          if (this.price4) {
            ctx.fillText(this.price4, 950, 200);
          }
          ctx.font = '38px Arial';
          ctx.fillStyle = 'black';
          let spacer = 390;
          if (this.guarn1) {
            ctx.fillText(this.guarn1, 600, spacer);
            spacer += 44;
          }
          if (this.guarn2) {
            ctx.fillText(this.guarn2, 600, spacer);
            spacer += 44;
          }
          if (this.guarn3) {
            ctx.fillText(this.guarn3, 600, spacer);
            spacer += 44;
          }
          if (this.guarn4) {
            ctx.fillText(this.guarn4, 600, spacer);
            spacer += 44;
          }
          if (this.guarn5) {
            ctx.fillText(this.guarn5, 600, spacer);
            spacer += 44;
          }
          if (this.guarn6) {
            ctx.fillText(this.guarn6, 600, spacer);
            spacer += 44;
          }

          //segunda parte
          spacer = 790;
          if (this.protein1) {
            ctx.fillText(this.protein1, 600, spacer);
            spacer += 44;
          }
          if (this.protein2) {
            ctx.fillText(this.protein2, 600, spacer);
            spacer += 44;
          }
          if (this.protein3) {
            ctx.fillText(this.protein3, 600, spacer);
            spacer += 44;
          }
          if (this.protein4) {
            ctx.fillText(this.protein4, 600, spacer);
            spacer += 44;
          }
          if (this.protein5) {
            ctx.fillText(this.protein5, 600, spacer);
            spacer += 44;
          }
          if (this.protein6) {
            ctx.fillText(this.protein6, 600, spacer);
            spacer += 44;
          }
          //terceira parte
          spacer = 1200;
          if (this.salad1) {
            ctx.fillText(this.salad1, 600, spacer);
            spacer += 44;
          }
          if (this.salad2) {
            ctx.fillText(this.salad2, 600, spacer);
            spacer += 44;
          }
          if (this.salad3) {
            ctx.fillText(this.salad3, 600, spacer);
            spacer += 44;
          }
          if (this.salad4) {
            ctx.fillText(this.salad4, 600, spacer);
            spacer += 44;
          }
          if (this.salad5) {
            ctx.fillText(this.salad5, 600, spacer);
            spacer += 44;
          }
          if (this.salad6) {
            ctx.fillText(this.salad6, 600, spacer);
            spacer += 44;
          }
          //quarta parte
          spacer = 1544;
          if (this.bebida1) {
            ctx.fillText(this.bebida1, 600, spacer);
            if (this.bebida1p) {
              ctx.fillText(this.bebida1p, 1050, spacer);
            }
            spacer += 44;
          }
         
          if (this.bebida2) {
            ctx.fillText(this.bebida2, 600, spacer);
            if (this.bebida2p) {
              ctx.fillText(this.bebida2p, 1050, spacer);
            }
            spacer += 44;
          }
          if (this.bebida3) {
            ctx.fillText(this.bebida3, 600, spacer);
            if (this.bebida3p) {
              ctx.fillText(this.bebida3p, 1050, spacer);
            }
            spacer += 44;
          }
          if (this.bebida4) {
            ctx.fillText(this.bebida4, 600, spacer);
            if (this.bebida4p) {
              ctx.fillText(this.bebida4p, 1050, spacer);
            }
            spacer += 44;
          }
          if (this.bebida5) {
            ctx.fillText(this.bebida5, 600, spacer);
            if (this.bebida5p) {
              ctx.fillText(this.bebida5p, 1050, spacer);
            }
            spacer += 44;
          }
        }
      };
    }, 300);
  }

  // emptyInput(model: keyof AppComponent){
  //   this[model] = '';
  // }

}
