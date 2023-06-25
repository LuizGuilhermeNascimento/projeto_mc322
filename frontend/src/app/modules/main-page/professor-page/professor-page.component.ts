import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Acompanhamento,
  AcompanhamentoJson,
} from 'src/app/models/acompanhamento.model';
import { Aluno, ListAlunos } from 'src/app/models/aluno.model';
import { Treino } from 'src/app/models/treino.model';
import { AcompanhamentoService } from 'src/app/services/acompanhamento/acompanhamento.service';
import { AlunoService } from 'src/app/services/aluno/aluno.service';
import { keys } from 'src/app/services/local-storage/keys.json';
import { LocalStorageService } from 'src/app/services/local-storage/localstorage.service';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css'],
})
export class ProfessorPageComponent implements OnInit {
  acompanhamentos: Acompanhamento[];
  alunosAssociados: Aluno[] = [];
  novoAcompanhamento: AcompanhamentoJson;
  idProfessor: string;
  tiposTreino: string[] = [];
  numTipos: number = 0;
  campoVazio: boolean = false;
  treinos: Treino[];
  nomeAlunoNovoAcomp: string;
  alunoEncontrado: boolean = true;
  numTreinosCorreto: boolean = true;

  constructor(
    private acompanhamentoService: AcompanhamentoService,
    private localStorageService: LocalStorageService,
    private alunoService: AlunoService,
    private router: Router
  ) {
    this.acompanhamentos = [];
    this.idProfessor = localStorageService.getItem<string>(keys.idKey) ?? '';
  }

  ngOnInit(): void {
    console.log(this.idProfessor);
    let responseAcomp =
      this.acompanhamentoService.getAcompanhamentosDoProfessor(
        this.idProfessor
      );
    responseAcomp.subscribe(
      (acompanhamentos) => (this.acompanhamentos = acompanhamentos)
    );
    this.buscarAlunos();
    this.gerarAcompanhamentoVazio();
  }

  private buscarAlunos(): void {
    const responseAlunos = this.alunoService.getTodosAlunos();
    responseAlunos.subscribe({
      next: (alunos: ListAlunos) => {
        this.alunosAssociados = alunos.list;
      },
    });
  }

  gerarAcompanhamentoVazio() {
    this.novoAcompanhamento = {
      alunoId: '',
      professorId: this.idProfessor,
      treinos: [],
      treinosMeta: 0,
    };
  }

  possuiTreinosVazios(): boolean {
    let treinoVazio: boolean = false;
    this.novoAcompanhamento.treinos.forEach((treino) => {
      if (treino.nome == '' || treino.descricao == '') {
        treinoVazio = true;
      }
    });
    return treinoVazio;
  }

  adicionarTreino() {
    if (this.possuiTreinosVazios()) {
      this.campoVazio = true;
      return;
    }
    this.campoVazio = false;
    switch (this.numTipos) {
      case 1:
        this.tiposTreino.push('A');
        this.novoAcompanhamento.treinos.push({
          tipo: 'A',
          nome: '',
          descricao: '',
        });
        break;
      case 2:
        this.tiposTreino.push('B');
        this.novoAcompanhamento.treinos.push({
          tipo: 'B',
          nome: '',
          descricao: '',
        });
        break;
      case 3:
        this.tiposTreino.push('C');
        this.novoAcompanhamento.treinos.push({
          tipo: 'C',
          nome: '',
          descricao: '',
        });
        break;
      case 4:
        this.tiposTreino.push('D');
        this.novoAcompanhamento.treinos.push({
          tipo: 'D',
          nome: '',
          descricao: '',
        });
        break;
      case 5:
        this.tiposTreino.push('E');
        this.novoAcompanhamento.treinos.push({
          tipo: 'E',
          nome: '',
          descricao: '',
        });
        break;
    }
    this.numTipos++;
  }
  verificarCamposVazios() {
    this.campoVazio =
      this.nomeAlunoNovoAcomp == '' || this.novoAcompanhamento.treinosMeta == 0;
  }
  changeMetaTreinos(meta: HTMLInputElement) {
    this.novoAcompanhamento.treinosMeta = parseInt(meta.value);
    if (!(parseInt(meta.value) >= 10 && parseInt(meta.value) <= 30)) {
      this.numTreinosCorreto = false;
    } else {
      this.numTreinosCorreto = true;
    }
  }
  changeNomeAluno(nomeAluno: HTMLInputElement) {
    if (!this.alunoExiste() || nomeAluno.value == '') {
      this.alunoEncontrado = false;
      return;
    }
    this.alunoEncontrado = true;
  }

  alunoExiste(): boolean {
    let existe: boolean = false;
    this.alunosAssociados.forEach((aluno) => {
      if (aluno.nome == this.nomeAlunoNovoAcomp) {
        existe = true;
      }
    });
    return existe;
  }

  setAlunoId() {
    this.alunosAssociados.forEach((aluno) => {
      if (aluno.nome == this.nomeAlunoNovoAcomp) {
        this.novoAcompanhamento.alunoId = aluno.id;
      }
    });
  }

  onSubmit() {
    this.verificarCamposVazios();
    this.setAlunoId();
    console.log(this.novoAcompanhamento);
    let responseNovoAcomp = this.acompanhamentoService.createAcompanhamento(
      this.novoAcompanhamento
    );
    responseNovoAcomp.subscribe((object) => console.log(object));
    this.gerarAcompanhamentoVazio();
  }

  logOut(): void {
    this.localStorageService.clear();
    this.router.navigate(['']);
  }
}
