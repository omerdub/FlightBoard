import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-airplane-icon',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplane">
  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
</svg>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `
  ]
})
export class AirplaneIconComponent {
  @Input() color = 'currentColor';
}