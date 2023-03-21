# TO DO LIST

<h1> Introdução </h1>

<p> O projeto de "to do list" foi desenvolvido com o intuíto de reforçar conhecimentos sobre HTML, CSS e JavaScript adquiridos no Workshop 4 da Pizza (Slice 1) pelo mentor Iury Coelho.</p>

<h1> Descrição do projeto </h1> 
<p> O projeto tem como finalidade possibilitar o usuário de escrever sua lista de tarefas à fazer do dia a dia de forma simples para que este se organize melhor com tasks à serem cumpridas. </p>

<h1>Usabilidade</h1>
<p> Inicialmente, é exibida uma tela para o usuário em formato vertical para melhor visualização deste de qualquer dispositivo que será acessado, tanto de um desktop quanto de um dispositivo mobile. É exibido um campo de texto com o título do projeto e um campo editável onde o usuário deve escrever as tarefas que serão adicionadas na sua lista do dia, a tarefa será adicionada a lista após o usuário clicar no botão superior central "adicionar tarefa". 
<p>Após concluir uma tarefa da lista, o usuário poderá selecionar o campo da tarefa em questão e esta mudará seu estilo com um "risco" e a cor verde, simbolizando que já foi concluída. Quando o usuário tiver uma ou mais tarefas concluídas,  é possível apagá-las da lista apenas clicando no botão inferior central "limpar concluídos". </p> <br>

<img width="700" src="https://media.github.ford.com/user/53663/files/4d7ec990-ceef-4eaa-91e0-a099745e7552">

<h1> Funções utilizadas</h1>
<details>
<summary>escrever tarefa</summary><br>
<p> Para a função de escrever as tarefas, foi utilizado a tag input type="text" em html para criar a primeira interação com o usuário, onde este colocará as tarefas do dia a serem realizadas. 
</details>

<details>
<summary>adicionar tarefas</summary><br>
<p> Em JavaScript, na função addTask(); foi criado uma varíavel de input, onde será adicionada em MyUL, este ID representa a lista, então será criado um elemento único que se agrupará a lista através do metodo DOM aprendido no workshop appendChild. </p>
</details> 

<details>
<summary>marcar tarefas</summary><br>
<p> Para marcar as tarefas, utilizei o método Toggle no script. Esse método possibilita a marcação das tarefas que foram inseridas através de um evento de click do elemento da lista criada anteriormente. 
</details>

<details>
<summary>limpar tarefas concluídas</summary><br>
<p>Através do método Toggle, a tarefa que foi atribuída como 'done' , a função clearDoneTasks agrupará todas as tarefas selecionadas e será realizada uma condição 'for' para realizar a limpeza das tarefas que foram concluídas. </p>
</details> 

<details>
<summary> Atribuições futuras</summary><br>
<p>Como atribuições futuras, pretendo adicionar um array no projeto, com um campo novo de 'tarefas já realizadas', mostrando o horário e data de quando a tarefa foi concluída pelo usuário. Também gostaria de implementar uma data prazo que será estimada pelo usuário para a realização das tarefas. Assim, o projeto viraria um 'to do list' mais geral, com planos semanais, mensais ou anuais, e não somente terá uma função simples de tarefas do dia à dia. </p>
</details>

