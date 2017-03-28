#Cubbles meets Angular2 (server side rendering)
This repository contains some examples on how to integrate Cubbles into an Angular2 based application.

[Want to learn more about the Cubbles Platform?](https://cubbles.github.io/)

##See examples in action

As the server side rendering needs server-side functionality this can't be served directly form Github.

This sample uses [Node.js](https://nodejs.org/en/), the best and fastest way to get an Angular2 application is the [angular-cli](https://github.com/angular/). 
For server side rendering check [Angular Universal](https://universal.angular.io/). There is a fork of the angular-cli repository, especially for creating
Angular Universal apps, its called [universal-cli](https://www.npmjs.com/package/universal-cli).

### PreRequisits

1. install angular-cli and universal-cli globally
```
$ npm install -g angular-cli@1.0.0-beta.28.3
$ npm install -g universal-cli@1.0.0-alpha.universal.3

```

2. Clone this repository and run 
```
cd server-side 
npm install
```

### Run it
```
$ ung serve
```
... and a local node.js server makes the application available on [http://localhost:4200](http://localhost:4200)
 
