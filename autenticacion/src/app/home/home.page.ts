import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes: any[] = []; // O usa el tipo que corresponda

  constructor() {}

  ngOnInit() {
    // Inicialización de `notes` u otros elementos si es necesario
  }

  openNote(note: any) {
    // Lógica para abrir una nota específica
  }

  addNote() {
    // Lógica para agregar una nueva nota
  }
}
