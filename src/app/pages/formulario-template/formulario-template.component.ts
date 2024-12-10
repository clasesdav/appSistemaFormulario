import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-formulario-template',
  standalone: false,
  
  templateUrl: './formulario-template.component.html',
  styleUrl: './formulario-template.component.css'
})
export class FormularioTemplateComponent implements OnInit {

  paises: any[]=[];
  constructor(private paisService:PaisService){}
  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe(paisesServicio =>{
      this.paises=paisesServicio;
    });
    
  }
}

