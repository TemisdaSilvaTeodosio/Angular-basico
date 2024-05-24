import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componentes11',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './componentes11.component.html',
  styleUrl: './componentes11.component.css'
})
export class Componentes11Component {

  // nome:string;

  // idade:number = null;

  //objeto de formulário

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl('null', [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  //visibilidade dos botoes

  btnCadastrar:boolean = true;

  //vetor

  vetor:Pessoa[] = [];

  //armazenar indice da pessoa selecionada
  indice:number = -1;

  //função de CADASTRO

  cadastrar() {

    //cadastro no vetor
    this.vetor.push(this.formulario.value as unknown as Pessoa);

    //limpeza dos inputs
    this.formulario.reset();

    //visualização via console
    //console.table(this.vetor);
  }

  // Função de SELEÇÃO
  selecionar(indice:number){

    // Atribuir o índice da pessoa
    this.indice = indice;

    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    // Visibilidade dos botões
    this.btnCadastrar = false;

  }

  //funçaõ de ALTERAÇÃO
  alterar() {

    //alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpar os inputs
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }

  //função de REMOÇÃO
  remover() {

    //remover pessoa do vetor
    this.vetor.splice(this.indice, 1)

    //Limpeza do inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

  //função de CANCELAMENTO

  cancelar() {

    //limpeza dos inputs
    this.formulario.reset();

    //visibilidade dos botoes
    this.btnCadastrar = true;
    
  }
}
