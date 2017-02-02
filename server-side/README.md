#Cubbles meets Angular2 (server side loading)
This repository contains some examples how to integrate Cubbles in an Angular2 application.

[Want to get to know the Cubbles Platform?](https://cubbles.github.io/)

##See examples in action

???


##Run locally
This sample uses [Node.js](https://nodejs.org/en/), the best and fastest way to get an Angular2 application is the [angular-cli](https://github.com/angular/). 
For server side rendering check [Angular Universal](https://universal.angular.io/). There is a fork of the angular-cli repository, especially for creating
Angular Universal apps, its called [universal-cli](https://www.npmjs.com/package/universal-cli).

You can just clone this repository and run 
```
npm install
```

or just follow this steps and create your own demo:

1. install angular-cli and universal-cli globally
```
npm install -g angular-cli
npm install -g universal-cli
```

2. generate a new Angular2 application, with everything you need  
```
ung new cubbles-angular2-integration --universal
cd cubbles-angular2-integration
```

3. create three components, universal-cli will also add them to app.node.ts and app.browser.ts
```
ung generate component demo1
```
...

When you are ready for a visual test just run:
```
ung serve
```

and a Node.js server will be running on port 4200.