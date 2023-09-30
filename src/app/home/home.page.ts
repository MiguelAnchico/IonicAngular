import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Nombre: string = "";
  Mensaje: string = "";
  Relacion: string = "";
  Materias: string = "";

  mostrar: boolean = false;


  items = [
    {titulo: "Ingeniero", descripcion: "Electronico"},
    {titulo: "Medico", descripcion: "Cirujano"},
    {titulo: "Abogado", descripcion: "Penalista"},
  ]

  constructor(public alertController:AlertController, public toastController: ToastController) {}

  getNombre(){
    this.Mensaje = "Bienvenido " + this.Nombre + " tu eres mi " + this.Relacion + " y estudias " + this.Materias + "!"
  }

  getLimpiar() {
    this.Mensaje="";
    this.presentToast();
  }

  setMostrar() {
    this.mostrar = true;
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "info",
      subHeader: "Estudiante",
      message: "Mensaje a guardar",
      buttons:[
        {
          text: "Cancelar",
          role:"cancel",
          handler: (dato) => this.getLimpiar(), 
        },
        {
          text: "Aceptar",
          role:"ok",
          handler: (dato) => this.getNombre(),
        }
      ]
    })

    
    await alert.present();
    await alert.onDidDismiss();
  }
  
  async presentToast(){
    const toast = await this.toastController.create({
      header: "Notificacion",
      message: "El mensaje fue borrado",
      duration: 2000,
    })

    await toast.present();
  }
}
