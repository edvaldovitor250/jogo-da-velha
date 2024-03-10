<body>
  <header>
    <h1>Jogo da Velha</h1>
  </header>
  <main>
    <h2>Índice</h2>
    <ol>
      <li><a href="#visão-geral">Visão Geral</a></li>
      <li><a href="#tela-do-dashboard">Tela do Incial</a></li>
      <li><a href="#project-structure">Regra do Jogo</a></li>
      <li><a href="#business-rules">Funcionalidades</a></li>
      <li><a href="#business-rules">Instruções de Uso</a></li>
      <li><a href="#funcionamento-dos-filtros">Instruções de Uso</a></li>
      <li><a href="#instruções-de-inicialização-do-projeto">Instruções de Inicialização do Projeto</a></li>
      <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
    </ol>
    <section id="visão-geral">
  <section id="overview">
  <h2>Visão Geral</h2>
  <p> O jogo da velha é um jogo de estratégia simples para dois jogadores, X e O, que alternam entre si marcando as células de uma grade 3x3. O jogador que conseguir formar uma linha horizontal, vertical ou diagonal com suas marcações vence o jogo. Se todas as células forem marcadas e nenhum jogador conseguir formar uma linha, o jogo termina em empate.</p>
</section>

<section id="dashboard-screen">
  <h2>Tela Inicial</h2>
  
  ![tela-incial-jogo-da-velha](https://github.com/edvaldovitor250/jogo-da-velha/assets/116117189/416db46f-21d5-46c6-8f23-a36de011851d)


</section>



<section id="project-structure">
   <h3>Regras do Jogo</h3>
  <ul>
    <li>Cada jogador deve escolher uma marcação, X ou O, para representá-lo durante o jogo.</li>
    <li>Os jogadores alternam suas jogadas, colocando sua marcação em uma célula vazia da grade.</li>
    <li>O jogo continua até que um dos jogadores vença ou o tabuleiro fique completamente preenchido sem formar uma linha.</li>
    <li>Um jogador vence quando consegue formar uma linha horizontal, vertical ou diagonal com suas marcações.</li>
    <li>Se todas as células forem preenchidas e nenhum jogador vencer, o jogo termina em empate.</li>
  </ul>

  <h3>Implementação</h3>
  <p>
    A implementação do jogo da velha é feita utilizando HTML para estruturar o tabuleiro, CSS para estilizar o visual e JavaScript para controlar a lógica do jogo. A grade do jogo é representada por uma matriz de células, onde cada célula pode conter a marcação de um jogador ou estar vazia. As interações do jogador são controladas através de eventos de clique nas células do tabuleiro.
  </p>
</section>

<section id="business-rules">
   <h3>Funcionalidades</h3>
  <ul>
    <li>Alternância entre jogadores (X e O) a cada jogada.</li>
    <li>Verificação automática de vitória ou empate após cada jogada.</li>
    <li>Reinicialização do jogo ao clicar em um botão de reinício.</li>
  </ul>
</section>
    <section id="funcionamento-dos-filtros">
      <h2>Instruções de Uso</h2>
      <p>Baixe os arquivos do projeto ou clone o repositório.<br>
      Abra o arquivo index.html em um navegador da web.<br>
      O relógio começará a exibir a hora atual.<br>
      Como Contribuir:<br>
      Sinta-se à vontade para contribuir com este projeto! Você pode propor melhorias no código, corrigir bugs ou adicionar novos recursos. Basta seguir estas etapas.</p>
    </section>
    <section id="tela---cliente">
      <h2>Instruções de Inicialização do Projeto</h2>
      <ol>
        <li>Para iniciar o projeto, basta abrir o arquivo <code>index.html</code> no seu navegador web preferido.</li>
        <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/8b9fb383-d9e5-44b8-9e54-dff95d16fb44" alt="Visual Studio Code - index.html">
        <li>Em seguida, é recomendado ter a extensão do Live Server instalada no Visual Studio Code:</li>
        <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/88c85725-2358-4f13-b6ed-1e9270f87beb" alt="Extensão Live Server">
        <li>Após isso, basta clicar no botão "Go Live" para iniciar o servidor local e visualizar o projeto:</li>
        <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/2635408a-c84c-471a-ae64-23182c556615" alt="parte3">
      </ol>
    </section>
    <section id="tecnologias-utilizadas">
      <h2>Tecnologias Utilizadas</h2>
      <table>
        <thead>
          <tr>
            <th><img src="https://skillicons.dev/icons?i=html" alt="HTML5"> HTML</th>
            <th><img src="https://skillicons.dev/icons?i=css" alt="CSS"> CSS</th>
            <th><img src="https://skillicons.dev/icons?i=js" alt="JavaScript"> JavaScript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🔖 5</td>
            <td>🔖 3</td>
            <td>🔖 ES6</td>
          </tr>
        </tbody>
      </table>
    </section>
    <footer>
      <p>Autor: Este projeto foi desenvolvido por Edvaldo Vitor.</p>
      <p>Licença: Este projeto está licenciado sob a MIT License.</p>
    </footer>
  </main>
</body>
