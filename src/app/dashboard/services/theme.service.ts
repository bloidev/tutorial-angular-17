import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme: "light" | "dark"  = "light";

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.theme = storedTheme as "light" | "dark";
      document.body.className = this.theme;
    } 
  }

  setTheme(theme: "light" | "dark") {
    this.theme = theme;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  getTheme() {
    return this.theme;
  }

}
