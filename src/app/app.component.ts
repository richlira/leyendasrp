import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rules: boolean;
  inicio: boolean;
  staff: boolean;

  constructor(){
    this.inicio = true;
    this.rules = false;
    this.staff = false;
  }

  showInfo(section: string): void {
    if(section === "inicio") {
      this.inicio = true;
      this.rules = false;
      this.staff = false;
    }

    if(section === "rules") {
      this.inicio = false;
      this.rules = true;
      this.staff = false;
    }
    
    if(section ==="staff"){
      this.inicio = false;
      this.rules = false;
      this.staff = true;
    }
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
