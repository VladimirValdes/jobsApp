import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  forma: FormGroup;

  @Input() modalActive: boolean;
  @Output() modalActiveChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() guardar: EventEmitter<any> = new EventEmitter();
  @Output() fields: EventEmitter<any> = new EventEmitter();


  constructor( private fb: FormBuilder) {
          this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario(): void {
        this.forma = this.fb.group({
          location: [],
          fullTime: []
        });
  }

  submit(): void {

    const fieldsModal = {
      location: this.forma.controls.location.value,
      fullTime: this.forma.controls.fullTime.value,
    };

    console.log(fieldsModal);
    this.fields.emit(fieldsModal);

    this.closeModal();
    this.guardar.emit();
  }

  closeModal(): void {
    this.modalActiveChanged.emit(false);
    console.log(this.modalActive);
  }

}
