import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/localStorage.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  theme: string;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.theme = this.localStorageService.getData('theme') || 'light';
  }

  switchTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.localStorageService.setData('theme', this.theme);
  }
}
