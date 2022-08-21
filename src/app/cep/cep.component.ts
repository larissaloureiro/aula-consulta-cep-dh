import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  constructor(private _cepService: CepService) { }

  buscarCep(valor: any, form: any) {
    this._cepService.buscarCepService(valor)
      .subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf
    })
  }

  ngOnInit(): void {
  }

}
