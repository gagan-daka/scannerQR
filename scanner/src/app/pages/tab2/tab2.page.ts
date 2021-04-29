import { Component } from '@angular/core';
import { Registro } from 'src/app/models/registro.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  registros:Registro[];
  dataLocal:DataService;
  constructor(public dataService:DataService) {
    this.dataLocal=dataService;
  }

  abrirRegistro(registro){
    this.dataLocal.abrirRegistro(registro);
  }
  
  ngOnInit():void{
    this.dataLocal.cargarStorage();
    this.registros=this.dataLocal.guardados;
  }
  enviarCorreo(){
    console.log("La fragua de hefesto");
    this.dataLocal.enviarCorreo();
  }

}
