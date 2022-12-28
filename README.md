<h1 align="center">
Milton Carlos Katoo personal website
</h1>

<p align="center">Personal Web Page using javascript.</p>
<p align="center">Deployed <a href="https://www.ikatoo.com.br/">here</a>.</p>

<p align="center">
  <a href="https://github.com/mckatoo/ikatoo/graphs/contributors">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/mckatoo/ikatoo?color=%23FF2A2A&logoColor=%23FF2A2A&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/mckatoo/ikatoo?color=%23FF2A2A&logo=mit&style=flat" alt="License">
  </a>
</p>

<hr>

## Participants

| [<img src="https://avatars.githubusercontent.com/u/7876852?v=4" width="75px;"/>](https://github.com/mckatoo) |
| :------------------------------------------------------------------------------------------------------------------------: |


| [Milton Carlos Katoo](https://github.com/mckatoo)

## Techs

### Infra
  - [x] Docker
  - [x] Keycloak
  - [x] Postgres
  - [X] RabbitMQ
  - [ ] MongoDB

### Languages and Frameworks
  - [x] Express
  - [x] React.js
  - [x] Styled Components
  - [x] TypeScript

## Ideas to implement

- [ ] Add "scroll to new messages" button
- [ ] Add state management (switch between Servers and Channels)
- [ ] Back-end integration (roles, permissions, mentions, friend requests and more)

## Usage

1. Create env files based on .env.example files.
├── auth
│   ├── .env
│   ├── .env-example
├── keycloak
│   ├── .env
│   ├── .env-example
<br />
1. Run `docker compose up -d --build` on keycloak directory<br />
2. Run `yarn install && yarn start` on auth directory and access `http://localhost:3000`.<br />

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.
