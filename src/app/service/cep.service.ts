import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http: HttpClient) { }

  // Responsável pela consulta na api externa
  buscarCepService(cep: string) {
    return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)

    // ---------------------- Esta forma não está funcionando -----------------------
    // return new Promise((resolve, reject) => {
    //   this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
    //     .subscribe((rs: any) => {
    //       resolve(this.recuperarCepForm(rs.json()));
    //     },
    //       (error) => {
    //         reject(error.json());
    //       }
    //     )
    // })
  }
  // recuperarCepForm(cepRes: any): Cep {
  //   let cep = new Cep();
  //   cep.cep = cepRes.cep;
  //   cep.logradouro = cepRes.logradouro;
  //   cep.bairro = cepRes.bairro;
  //   cep.localidade = cepRes.localidade;
  //   cep.uf = cepRes.uf;
  //   return cep;
  // }
}
