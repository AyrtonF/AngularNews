# AngularNews

![Mockup da aplicação](angularnewsdocs/Models/Mockup/mockup1.png)
![Diagrama de Classes](angularnewsdocs/Models/classes/diagrama-de-classes.mermaid)
![Modelo de Banco de Dados](angularnewsdocs/Models/database/diagrama_bd1.png)
![Fluxograma de Uso](angularnewsdocs/UseCase/fluxo_trabalho.png)
![Mapa Mental](angularnewsdocs/Models/mindmap/mindmap1.png)

## Descrição do Projeto

O **AngularNews** é um Web App desenvolvido com Angular (Ionic Framework), focado em fornecer notícias personalizadas ao usuário. O sistema permite o cadastro, autenticação, escolha de categorias, favoritos e consumo de notícias em tempo real via APIs públicas, oferecendo uma experiência fluida, responsiva e moderna.

## Como baixar o repositório

```bash
git clone https://github.com/SEU_USUARIO/AngularNews.git
cd AngularNews
```

## Pré-requisitos

- Node.js (>=18.x)
- Angular CLI (`npm install -g @angular/cli`)
- Ionic CLI (`npm install -g @ionic/cli`)
- MySQL (para o backend)
- (Opcional) Firebase CLI
- Conta no GitHub

## Estrutura de Pastas

```
AngularNews/
│
├── angularnewsapi/          # Projeto backend (Node.js/Express)
├── angularnewsapp/          # Projeto frontend (Angular/Ionic)
├── angularnewsdocs/         # Documentação
│   ├── Models/
│   │   ├── classes/         # Diagramas de classes
│   │   ├── database/        # Diagramas de banco de dados
│   │   ├── mindmap/         # Mapa mental do projeto
│   │   └── Mockup/          # Mockups e protótipos de tela
│   ├── Sql/                 # Scripts SQL e modelos de dados
│   └── UseCase/             # Casos de uso, fluxogramas, tutoriais, etc.
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── TODO.md
```

## Contribuindo

Para contribuir com o projeto, siga os passos abaixo ou consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md):

1. Faça um fork do projeto;
2. Crie um branch para sua feature/correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça suas alterações e commits:
    ```bash
    git add .
    git commit -m "Minha contribuição"
    ```
4. Envie seu branch:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request no GitHub.

Mais detalhes e o fluxo completo estão disponíveis em [tutorial_fluxo_trabalho.pdf](angularnewsdocs/UseCase/tutorial_fluxo_trabalho.pdf).

## Documentação

- [Diagramas de Classes](angularnewsdocs/Models/classes/)
- [Modelo de Banco de Dados](angularnewsdocs/Models/database/)
- [Mapa Mental](angularnewsdocs/Models/mindmap/)
- [Mockups e Protótipos](angularnewsdocs/Models/Mockup/)
- [Casos de Uso](angularnewsdocs/UseCase/)
- [Fluxograma de Trabalho](angularnewsdocs/UseCase/fluxo_trabalho.png)
- [Tutorial de Git e Ferramentas](angularnewsdocs/UseCase/tutorial_fluxo_trabalho.pdf)

## Autores

- [Seu Nome](https://github.com/SEU_USUARIO)
- [Colaboradores](#)

## Licença

Este projeto está licenciado sob a [Creative Commons BY 4.0](LICENSE).

---
