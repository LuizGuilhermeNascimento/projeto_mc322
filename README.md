# projeto_mc322
Participantes
  <table>
      <thead>
          <tr>
              <th>Nome</th>
              <th>RA</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Eliel Oliveira da Silva</td>
              <td>221437</td>
          </tr>
          <tr>
              <td>Luiz Guilherme Nascimento</td>
              <td>789012</td>
          </tr>
          <tr>
              <td>Victor Wu</td>
              <td>345678</td>
          </tr>
      </tbody>
  </table>

# Como Executar a Aplicação:

Versões utilizadas:

  <table>
      <thead>
          <tr>
              <th>Dependencia</th>
              <th>Versão</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Java</td>
              <td>17.0.6</td>
          </tr>
          <tr>
              <td>Maven</td>
              <td>3.9.2</td>
          </tr>
          <tr>
              <td>Node</td>
              <td>18.13.0</td>
          </tr>
          <tr>
              <td>npm</td>
              <td>9.7.1</td>
          </tr>
      </tbody>
  </table>

### Executando:

> na pasta projeto_mc322/api
```
mvn spring-boot:run
```

Se tudo der certo, a api deve rodar no localhost:8080. <i>(caso esse comando não funcione, é possível executar pelas IDE's vscode/intellij clicando no botão)</i>


> na pasta projeto_mc322/frontend
```
npm i
```
```
npx ng serve
```

Se tudo der certo, o site deve rodar no localhost:4200

Utilizamos o Intellij para trabalhar na pasta api, e o Visual Studio Code para trabalhar na pasta frontend. No entanto, o Visual Studio Code pode ser utilizado para ambas.
  
# Frameworks e funcionamento geral do sistema
O sistema foi dividido em duas partes: o backend (na pasta api), contendo as regras de negócio da aplicação, bem como o gerenciamento dos dados em arquivo, feito com o framework <b>Spring Boot</b> em java, e o frontend (pasta frontend :D), contendo a contrução da parte gráfica utilizando o framework web <b>Angular</b>, em <b>Typescript</b>.

Basicamente, o backend consiste em uma <b>API Rest</b>, que permite a criação de rotas especificias para obter e enviar dados, enquanto que essas rotas são acessadas pelo frontend através de requisições <b>HTTP</b> (get, post, delete, put,...)

![diagrama-funcionamento-api](https://github.com/LuizGuilhermeNascimento/projeto_mc322/assets/52840354/c06a8972-f3df-457f-b593-5a86d56b367a)

 
 
># O Projeto
O projeto consiste em uma aplicação de uma academia, que permite um que um professor acompanhe o desenvolvimento do aluno. O professor receita um treino ao aluno, e quando a meta for atingida, o professor troca o treino do aluno.

Segue o diagrama UML do projeto:

![UML_final_322 drawio](https://github.com/LuizGuilhermeNascimento/projeto_mc322/assets/52840354/48f9c183-94df-4bf9-bc81-c3146c271229)
