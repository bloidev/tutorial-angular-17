import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'landing-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  // agrega auna referencia a #MobileMenu angular
  // para poder manipularlo desde el componente
  @ViewChild('MobileMenu') MobileMenu!: ElementRef;
  public itemsMenu = [
    {
      name: 'Productos',
      link: '#home'
    },
    {
      name: 'Características',
      link: 'about'
    },
    {
      name: 'Servicios',
      link: 'services'
    },
    {
      name: 'Empresa',
      link: 'company'
    }
  ]

  constructor() {
    console.log('Home Page Component');
  }

  ngOnInit() {
    console.log('Home Page Component Initialized');
  }

  MenuToggle(){
    const menu : HTMLDivElement = this.MobileMenu.nativeElement;
    console.log(menu.classList);
    menu.classList.toggle("hidden")
  }
}
