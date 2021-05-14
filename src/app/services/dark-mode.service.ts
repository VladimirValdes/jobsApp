import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private render: Renderer2;

  constructor( rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
      this.render = rendererFactory.createRenderer( null, null);
   }


  addDarkMode( active: boolean ): void {

    localStorage.setItem('darkMode', JSON.stringify( active ));
    this.guardarStorage();

  }

  getActive(): boolean {
    return JSON.parse( localStorage.getItem('darkMode'));
  }

  private guardarStorage(): void {

    if ( JSON.parse( localStorage.getItem( 'darkMode' ))) {
      this.render.removeClass(this.document.body, 'theme-light');
      this.render.addClass(this.document.body, 'theme-dark');
    } else  {
      this.render.removeClass(this.document.body, 'theme-dark');
      this.render.addClass(this.document.body, 'theme-light');
    }

  }
}
