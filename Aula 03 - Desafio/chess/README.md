1- Faça um componente personalizado para armazenar e validar CPF 
2- Adicione a tela de criação de contas 
3- Faça um componente card que possa armazenar uma imagem e um texto
4- Tente criar vários posts na tela de feed com base nesses cards

Passo a passo de como organizamos:

ng generate component pages/feed
ng generate component pages/register
ng generate component components/card
ng generate component components/cpf-input
ng generate service services/post

Primeiro temos que desenvolver a lógica do calculo de validação de cpf
