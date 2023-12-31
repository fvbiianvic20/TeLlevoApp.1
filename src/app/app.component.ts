import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  

})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: 'inicio', icon: 'home' },
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'Datos', url: 'datos', icon: 'analytics' },
    { title: 'Movilización', url: 'movilizacion', icon: 'car-sport' },
    { title: 'Salir', url: 'salir', icon: 'close' },

  ];
  constructor(private storage: Storage, private platform: Platform) {
    this.iniciarStorage();

  }


  iniciarStorage() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }
}
