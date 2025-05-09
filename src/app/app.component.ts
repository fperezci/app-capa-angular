import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-capa-ejemplo1';
  cantidad = 10;
  imagenUrl = "https://t3.ftcdn.net/jpg/01/35/01/78/360_F_135017891_6WcwpuBvovLtl9vCcYmGUjStkCsNooVl.jpg"

  items = [
    { nombre: 'Felipe Allende', activo: true },
    { nombre: 'Jose', activo: false },
    { nombre: 'Boric', activo: true },
  ];

  incrementar() {
    this.cantidad++;
  }

}
