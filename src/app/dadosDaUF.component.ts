import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './dadosDaUF.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})

export class dadosDaUFComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_uf: UF;
    municipios_atendidos: Dados[] = [];
    meu_id = 31;
    media: number = 0;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.minha_uf = this.defineUF();
        this.media = this.calcularMunicipios();
    }

    defineUF(): UF {
      for (let uf of this.ufs) {
          if (uf.id == this.meu_id) return uf;
      }
    }

    calcularMunicipios(): number {
      var qnt = 0;
      var total = 0;
      for (let mun of this.dados_da_samu){
        if (mun.uf_id == this.meu_id){
          qnt++;
          total+=mun.valor;
          this.municipios_atendidos.push(mun);
        }
      }
        return total/qnt;
    }
}
