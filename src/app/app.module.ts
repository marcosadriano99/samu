import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UFService} from './services/uf.service';
import { SamuService} from './services/samu.service';
import { resumoComponent} from './resumo.component';
import { AppComponent } from './app.component';
import { todosOsDadosComponent } from './todosOsDados.component';
import { dadosDaUFComponent } from './dadosDaUF.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    resumoComponent,
    todosOsDadosComponent,
    dadosDaUFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: resumoComponent
    },

    {
    path: 'todosOsDados',
    component: todosOsDadosComponent
    },

    {
    path: 'dadosDaUF',
    component: dadosDaUFComponent
    }
    ])
  ],
  providers: [UFService, SamuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
