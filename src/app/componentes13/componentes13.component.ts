import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componentes13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componentes13.component.html',
  styleUrl: './componentes13.component.css'
})
export class Componentes13Component {

  //vetor
  vetor:Produto[] = [];

  //construtor
  constructor(private servico:ProdutoService){}

  //visibilidade dos botões
  btnCadastrar:boolean = true;

  //objeto de formulário
  formulario = new FormGroup({
    id:     new FormControl(null),
    nome:   new FormControl(''),
    valor:  new FormControl(null)
  })

  //Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  //Método para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //Método de cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();
    });
  }

  //metodo para adicionar um produto especifico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id:   this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor:this.vetor[indice].valor
    });

    this.btnCadastrar = false
  }

  //metodo de alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {
      
      //obter indice do obj alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
      return this.formulario.value.id === obj.id;
      });

      //alterar vetor
      this.vetor[indiceAlterado] = retorno;

      //Limpar o formulario
      this.formulario.reset();

      //visibilidade dos botoes
      this.btnCadastrar =true;
    });
  }

  //REMOVER PRODUTOS
  remover(){

    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {

      //obter indice do vetor removido
      let indiceRemovido = this.vetor.findIndex(obj => {

        return obj.id === this.formulario.value.id;
      });

      //remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      //limmpar o foemulario
      this.formulario.reset();

      //visibilidade dos botoes
      this.btnCadastrar = true;
    });
  }

}
