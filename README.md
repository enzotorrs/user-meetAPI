# DESCRIÇÃO
uma api de reuniões tem autenticação de usuarios e usuarios atrelados as reuniões

# REQUISITOS
## Reuniões
#### rota "/meets"
- POST: deve receber um objeto (json) que contem startDate (Date) durationInHours (number) alertTimeInHours (number) e salvar no banco (mysql)
- GET: deve devolver um objeto (json) que contem as propiedades no banco e a api deve ter um interceptor que pega as propriedades no banco e calcula o status (string)
- DELETE: deve receber o id da reunião verificar se existe e apagar
- PUT: deve receber o id da reunião verificar se existe se existir substituir a reunião pela enviada no corpo da requisição
- todas as rotas devem passar por auteticação por token JWT
- todas as execeções gerados pelas rotas devem ser pegas pela camada de execeções
- status: o status deve ser calculado a partir das propriedades da reunião. Deve ser "inAlert" se no periodo de alerta antes da reunião começar; deve ser "active" se a reunião estiver em andamento; deve ser "done" para o resto ou seja antes do "inAlert" e depois do "active"

## Usuarios
#### rota "/users"
- POST: deve receber um objeto contento o novo usuario e so deve ser cadastrado se o usario logado fazendo a requisição for super-usuario
- GET: deve devolver todo os usuarios
- DELETE: deve receber o id do usuario a ser deletado e so deve ser deletado se o usuario logado for super-usuario
- PUT: deve receber o id do usuario a ser mudado e so substituir o usuario se ele existir e o usuario logado for super-usuario
#### rota "/users/auth/login"
- POST: deve receber usuario e senha do usuario a ser logado e fazer a validação se o usuario existe e a senha correponde e se for validado deve retornar o acess token (JWT) que deve ser adcionado os headers de cada requisição

