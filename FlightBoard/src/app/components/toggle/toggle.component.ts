import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  animations: [
    trigger('toggleTrigger', [
      state('off', style({ transform: 'translateX(0%)' })),
      state('on', style({ transform: 'translateX(160%)' })),
      transition('on <=> off', [
        animate('120ms ease-in-out')
      ])
    ])
  ]
})

export class ToggleComponent implements OnInit {
  @Input() toggleOn = false;
  @Output() toggledTo = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleClick(): any {
    if (this.toggleOn) {
      this.toggleOn = false;
      this.toggledTo.emit('off');
    } else {
      this.toggleOn = true;
      this.toggledTo.emit('on');
    }
  }
}