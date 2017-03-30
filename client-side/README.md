#Client Side Integration in Action

Online demo: <https://rawgit.com/iCubbles/demo.cubbles-angular2-integration/master/client-side/dist/index.html>


##Developer Notes
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
./node_modules/.bin/ng new cubbles-angular2-integration
cd cubbles-angular2-integration
```

3. create 3 components, angular-cli will also add them to app.module.ts
```
./node_modules/.bin/ng  generate component demo1
./node_modules/.bin/ng  generate component demo2
./node_modules/.bin/ng  generate component demo3
```

4. create the directive for the cubbles component, just copy-paste the content from this repository
```
./node_modules/.bin/ng generate directive pie-chart
```

...

When you are ready for a visual test just run:
```
./node_modules/.bin/ng serve
```

and a Node.js server will be running on <http://localhost:4200> 