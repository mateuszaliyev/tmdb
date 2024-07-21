# tmdb

## About

tmdb is a simple user interface for searching movies and TV shows via
[TMDB](https://themoviedb.org/)'s API.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository.

```bash
git clone https://github.com/mateuszaliyev/tmdb.git
```

```bash
git clone git@github.com:mateuszaliyev/tmdb.git
```

Go to the project directory.

```bash
cd tmdb
```

Install dependencies.

```bash
pnpm install
```

Duplicate `.env.local.example` file and rename it to `.env.local`. Fill in your
own
[TMDB API Key](https://developer.themoviedb.org/docs/authentication-application).

## Usage

Run the development server.

```bash
pnpm dev
```

Lint code with [ESLint](https://eslint.org/).

```bash
pnpm lint
```

Format code with [Prettier](https://prettier.io/).

```bash
pnpm format
```

Build application for production.

```bash
pnpm build
```

Start production server.

```bash
pnpm start
```

## License

[MIT](./LICENSE)
