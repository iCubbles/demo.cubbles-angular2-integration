#Cubbles meets Angular2
This repository contains some examples how to integrate Cubbles in an Angular2 application.

All about the Cubbles Platform at <https://cubbles.github.io/>

##Server side rendering vs client side rendering

We prepared two different scenarios, the default Angular2 way is to load and render almost every content client side. The root of the application looks like this:
```
<html>
...
<body>
        <app-root></app-root>
</body>
...
</html>
```

This is the response of the webserver, everything else is loaded by the client. 
Another approach is the let Node.js render the Angular2 code on server side.