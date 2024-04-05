import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'dashboard-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

    @ViewChild('themeToggleInput') 
    public themeToggleInput!: MatSlideToggle;

    constructor(private themeService: ThemeService) {      
    }

    public theme() : string {
      return this.themeService.getTheme();
    }

    onToggleInput() :void {
      let input = this.themeToggleInput;
      console.log("Toggle input clicked", input.checked);
      this.themeService.setTheme(input.checked ? "dark" : "light");
      
    }

}
