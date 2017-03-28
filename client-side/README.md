#Cubbles meets Angular2 (client side rendering)
This repository contains some examples how to integrate Cubbles in an Angular2 application.

[Want to get to know the Cubbles Platform?](https://cubbles.github.io/)

##See examples in action

???


##Run locally
This sample uses [Node.js](https://nodejs.org/en/), the best and fastest way to get an Angular2 application is the [angular-cli](https://github.com/angular/). 

You can just clone this repository and run 
```
npm install
```

or just follow this steps and create your own demo:

1. install angular-cli globally
```
npm install -g angular-cli@1.0.0-beta.28.3
```

2. generate a new Angular2 application, with everything you need  
```
ng new cubbles-angular2-integration
cd cubbles-angular2-integration
```

3. create 3 components, angular-cli will also add them to app.module.ts
```
ng generate component demo1
ng generate component demo2
ng generate component demo3
```

4. create the directive for the cubbles component, just copy-paste the content from this repository
```
ng generate directive pie-chart
ng generate directive date-input
```

...

When you are ready for a visual test just run:
```
ng serve
```

and a Node.js server will be running on port 4200.