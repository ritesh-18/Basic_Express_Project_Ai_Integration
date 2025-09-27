# Basic_Express_Project_Ai_Integration

Ye project ek **Express server** hai jo **TypeScript** ke sath bana hai.

## 1. Project Setup

### Folder Creation
```bash
mkdir express-ts-app
cd express-ts-app
```
### Initialize npm
```bash
npm init -y
```
### Install Dependencies
```bash
# Runtime
npm install express

# Development
npm install --save-dev typescript ts-node nodemon @types/node @types/express
```
### Initialize TypeScript
```bash
npx tsc --init
```
### Update tsconfig
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Project Structure
```
express-ts-app/
│── src/
│   └── index.ts
│── package.json
│── tsconfig.json
│── .gitignore
```
### Update package.json file
```
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```
### How to run
```bash
#Dev Mode
npm run dev

#Prod Mode
npm run build
npm start
```
### Create .gitignore file
```bash
# add these files/folder
node_modules/
dist/
.env

```

