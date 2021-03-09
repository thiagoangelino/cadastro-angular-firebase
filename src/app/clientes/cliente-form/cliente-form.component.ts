import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/cliente/models/cliente';
import { ClienteService } from 'src/app/cliente/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal:NgbActiveModal,
    private ClienteService :ClienteService
    ) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: ['',Validators.required],
      endereco: ['',Validators.required],
      casado: false,
    })
  }

  salvarCliente(){
    if(this.clienteForm.invalid){
      return;
    }

    let cliente : Cliente = this.clienteForm.value;
    cliente.dataMod = new Date();
    cliente.dataCad = new Date();
    this.ClienteService.salvarClientes(cliente)
    .then(response => this.handleSuccessSave(response, cliente))
    .catch(err => console.error(err));
  }

  handleSuccessSave(response: DocumentReference<unknown>, cliente: Cliente){
    this.activeModal.dismiss({cliente: cliente, id: response.id, CreateMode: true});
  }
}
