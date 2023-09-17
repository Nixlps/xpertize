# xpertize 

Página de conversão feita para a Xpertize

# Instalação

Para rodar o projeto, comece instalando as dependências 

### `npm install`

Em seguida, para abrir o modo desenvolvimento digite

### `npm start`

# Estrutura

- Para uma maior facilidade na manutenção, as folhas de estilo e scripts foram dívidos por escopo em arquivos separados e concatenados com o gulp. 

- O bundle de produção é gerado pelo gulp na pasta **dist**. Os arquivos CSS e JS contidos lá estão minificados e _não devem ser alterados diretamente_

- Pushes na branch `main` fazem com que os arquivos do bundle de produção vá automaticamente para o servidor de hospedagem via FTP 

### [<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

