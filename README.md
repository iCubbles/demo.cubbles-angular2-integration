#Cubbles meets Angular2
This repository contains some examples how to integrate Cubbles in an Angular2 application.

[Want to get to know the Cubbles Platform?](https://cubbles.github.io/)

##Server side loading vs client side loading

We prepared two different scenarios, the default Angular2 way is to load almost every content client side. The root of the application looks like this:
```
<html>
...
<body>
        <app-root></app-root>
</body>
...
</html>
```

This is the Response of Webserver, everything else is then loaded by the client. 
Another approach is the let Node.js render the Angular2 code server side.