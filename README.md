# Repositório do projeto Gerenciador de Senhas 🔏

## O que foi desenvolvido 💻

- Neste projeto, foi desenvolvido um gerenciador de senhas. Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

    * Cadastrar senhas para serviços que ela utiliza na internet.
    * Visualizar as próprias senhas cadastradas e as informações do serviço utilizado.
    * Esconder as senhas salvas.
    * Remover os dados armazenados anteriormente.

## Habilidade na criação do projeto 📌

* Ler o estado de um componente e utilizá-lo para alterar o que é exibido na tela.
* Atualizar o estado de um componente.
* Listar componentes de maneira dinâmica.
* Criar formulários.
* Renderizar componentes de maneira condicional.
* Transmitir informações entre componentes por meio de props.
* Transmitir informações de componentes-filhos para componentes-pais via callbacks.

## Tecnologias usadas 🚀
* Typecript
* React
* HTML
* CSS
* Biblioteca sweetalert2

## ANTES DE INICIALIZAR A APLICAÇÃO ⚡ 
- Clone o repositório
    * git@github.com:paulofonseca182/password-manager.git

- Entre na pasta do repositório na sua máquina.

- Instale as dependências
    * npm install

- Inicialize o projeto
    * Utilize o comando npm rum dev dentro da pasta raiz para rodar o projeto em sua máquina.

## TASKS ✏️

- Crie um título para a aplicação
    * Adicione um título à sua aplicação.
        * O título deve estar em uma tag h1.
        * O título deve conter o texto Gerenciador de senhas.
        * Você pode escolher onde colocar o título, mas ele deve estar dentro do componente App.

- Crie um componente Form
    * Crie um componente chamado Form.
    * Esse componente deve ser renderizado no App e deve possuir:
        * m input do tipo text com o texto Nome do serviço como label.
        * m input do tipo text com o texto Login como label.
        * m input do tipo password com o texto Senha como label.
        * m input do tipo text com o texto URL como label.
        * m button com o texto Cadastrar.
        * Um button com o texto Cancelar.

- Renderize condicionalmente o formulário
    * Renderize um botão com o texto "Cadastrar nova senha"
    * Inicialmente a aplicação deverá exibir apenas o botão com o texto "Cadastrar nova senha".
    * Ao clicar no botão "Cadastrar nova senha":
        * ele deverá desaparecer;
        * o componente Form  deverá ser renderizado.
    * Ao clicar no botão do formulário com o texto Cancelar:
        * o formulário deverá desaparecer.
        * o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

- Valide os campos do formulário
    * O botão Cadastrar do formulário só poderá estar habilitado caso todas as verificações a seguir sejam atendidas.
        * O input com o "nome do serviço" deve estar preenchido.
        * O input com o "login" deve estar preenchido.
        * O input com a "senha" deve estar preenchido.
            * A senha deve ter no mínimo 8 caracteres.
            * A senha deve ter no máximo 16 caracteres.
            * A senha deve ter letras e números.
            * A senha deve ter algum caractere especial.
    * Caso alguma das verificações acima não seja atendida, o botão Cadastrar deverá estar desabilitado.

- Crie um display para a validação da senha
    * Quando o formulário for renderizado, as seguintes mensagens também deverão ser renderizadas na tela:
        * "Possuir 8 ou mais caracteres".
        * "Possuir até 16 caracteres".
        * "Possuir letras e números".
        * "Possuir algum caractere especial".
    * Os elementos podem ser renderizados em qualquer lugar da página, com qualquer tag html, desde que estejam visíveis.

- Implemente a função do botão "Cadastrar" do formulário
    * Implemente a função "Cadastrar" do formulário, de modo que a aplicação liste todos os serviços cadastrados.
    * Se nenhum serviço estiver cadastrado, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada na tela.
    * Ao clicar no botão "Cadastrar" do formulário, as informações do serviço deverão ser renderizadas da seguinte forma:
        * O Nome do serviço deverá ser renderizado dentro de um link que, quando clicado, deverá direcionar a pessoa usuária para a URL cadastrada.
        * O Login cadastrado deverá ser renderizado.
        * A Senha cadastrada deverá ser renderizada e estar visível.
    * Deve ser possível cadastrar mais de um serviço.
    * Ao cadastrar um novo serviço, este deve aparecer ao final da lista.
    * Após cadastrar um novo serviço:
        * O formulário deverá desaparecer.
        * O botão com o texto "Cadastrar nova senha" deverá ser renderizado

- Permita apagar um serviço cadastrado
    * Para cada serviço cadastrado, adicione um botão que, ao ser clicado, remove da lista o serviço correspondente. Esse botão deve ter o atributo data-testid="remove-btn".
    * Caso todos os serviços cadastrados sejam removidos, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada.

- Implemente um checkbox para esconder/mostrar as senhas
    * A aplicação deve renderizar um input do tipo checkbox e que tenha uma label com o texto "Esconder senhas". Esse checkbox deve começar desmarcado.
        * Com o checkbox desmarcado, todas as senhas cadastradas devem estar visíveis.
        * Com o checkbox marcado, todas as senhas cadastradas devem estar "escondidas", renderizando exatamente o seguinte texto: ******.
    * O checkbox pode ser implementado em qualquer lugar da aplicação.

- No formulário, implemente um botão para esconder/mostrar a senha que está sendo digitada
    * Crie outro botão no formulário:
        * Adicione o atributo data-testid="show-hide-form-password".
        * Ao ser clicado, o input com a label Senha deverá ter seu tipo alterado de "password" para "text", de modo que a senha fique visível.
        * Ao ser clicado, caso o input esteja com o tipo "text", seu tipo deve ser alterado para "password, de modo que a senha fique escondida.

- Exibe um alerta ao cadastrar um novo serviço corretamente
    * Ao clicar no botão "Cadastrar" do formulário, utilize a biblioteca sweetalert2 para mostrar um alerta que informe à pessoa usuária que um novo serviço foi cadastrado.
    * O alerta deverá:
        * esaparecer após 1500ms (1.5 segundo).
        * Mostrar a mensagem "Serviço cadastrado com sucesso".
