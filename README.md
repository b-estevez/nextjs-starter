# <img src="https://user-images.githubusercontent.com/729972/155242158-157ca88c-9047-4671-bd09-2bbef7035022.png" width="25"> Zesty.io + Next.js

> Quick start [Next.js](https://nextjs.org/) v12 with [Zesty.io]() as a data source

## Getting Started

0. Requirements

- [Node.js 16](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

1. Install

```Bash
npx create-next-app --example https://github.com/zesty-io/nextjs-starter
```

*The install process will let you use an existing account or create a new. When using an existing account you will be prompted to select from your available instances.*

2. Change directory to your project

```Bash
# Use the name you chose for your directory
cd my-app
```

3. Start development server

```Bash
npm run dev
```

4. Open application

open browser to http://localhost:3000/

## Syncing Zesty.io Models

As you develop your Zesty.io instance you will commonly add new models. When you want to sync the latest models this is done with the following command at the root of your project.

```
npm run sync
```

This will create new files where needed, but will not overwrite existing files.
