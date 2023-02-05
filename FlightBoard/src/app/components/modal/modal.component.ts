import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalTableService } from 'src/services/modalTable.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  display$: Observable<{ status: 'open' | 'close', content: any }>;

  constructor(
    private modalService: ModalTableService
  ) { }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}
