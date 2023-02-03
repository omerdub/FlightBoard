import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalContent: any;

  @Input() showModal: boolean = false;

  pop(content: any): void {
    this.showModal = true;
    this.modalContent = content;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
