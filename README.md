# Seed Project for Learning Rxjs using Typescipt 

## what's this proejct?

It's a seed project that using typescript to learn RxJs.

## what should I preinstall?
node and typescript.

## How this project generate?(for begginer)

1.generate tsconfig.json
```bash
tsc --init
```
2.change stric to false because there is some compile issue when import the entire core set of Rx(import Rx from 'rxjs/Rx';)

3.generate package.json
```bash
npm --init
```
4.change npm script in package.json

5.add rxjs package
```bash
npm install rxjs
```

6.add es6-shim.d.ts(which is used by your editor to give you code hinting/intellisense)

```bash
npm install @type/es6-shim --ambient
```
