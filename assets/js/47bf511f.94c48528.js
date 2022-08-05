"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[215],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7500:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Quick Start",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/quickstart.md"},p=void 0,s={unversionedId:"quickstart",id:"version-0.5.x/quickstart",title:"Quick Start",description:"This guide gets you started with ZIO gRPC with a simple working example.",source:"@site/versioned_docs/version-0.5.x/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/zio-grpc/docs/quickstart",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/quickstart.md",tags:[],version:"0.5.x",frontMatter:{title:"Quick Start",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/quickstart.md"},sidebar:"version-0.5.x/someSidebar",previous:{title:"Introduction",permalink:"/zio-grpc/docs/"},next:{title:"Basics Tutorial",permalink:"/zio-grpc/docs/basics"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get the example code",id:"get-the-example-code",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Update a gRPC service",id:"update-a-grpc-service",level:2},{value:"Update the app",id:"update-the-app",level:2},{value:"Update the server",id:"update-the-server",level:3},{value:"Update the client",id:"update-the-client",level:3},{value:"Run the updated app",id:"run-the-updated-app",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide gets you started with ZIO gRPC with a simple working example."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jdk.java.net"},"JDK")," version 8 or higher"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.scala-sbt.org/"},"SBT"))),(0,l.kt)("h2",{id:"get-the-example-code"},"Get the example code"),(0,l.kt)("p",null,"The example code is part of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalapb/zio-grpc"},"zio-grpc")," repository."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalapb/zio-grpc/archive/v0.5.0.zip"},"Download the repo as a zip file")," and unzip it, or clone the repo:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/scalapb/zio-grpc\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change to the examples directory:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd zio-grpc/examples/helloworld\n")))),(0,l.kt)("h2",{id:"run-the-example"},"Run the example"),(0,l.kt)("p",null,"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From another terminal, run the client:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),(0,l.kt)("p",null,"Congratulations! You\u2019ve just run a client-server application with ZIO gRPC."),(0,l.kt)("h2",{id:"update-a-grpc-service"},"Update a gRPC service"),(0,l.kt)("p",null,"In this section you\u2019ll update the application by adding an extra server method. The gRPC service is defined using ",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"protocol buffers"),". To learn more about how to define a service in a ",(0,l.kt)("inlineCode",{parentName:"p"},".proto")," file see ",(0,l.kt)("a",{parentName:"p",href:"/zio-grpc/docs/basics"},"Basics Tutorial"),". For now, all you need to know is that both the server and the client stub have a ",(0,l.kt)("inlineCode",{parentName:"p"},"SayHello()")," RPC method that takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloRequest")," parameter from the client and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloReply")," from the server, and that the method is defined like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/protobuf/helloworld.proto")," and add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"SayHelloAgain()")," method with the same request and response types as ",(0,l.kt)("inlineCode",{parentName:"p"},"SayHello()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n  // Sends another greeting\n  rpc SayHelloAgain (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),(0,l.kt)("p",null,"Remember to save the file!"),(0,l.kt)("h2",{id:"update-the-app"},"Update the app"),(0,l.kt)("p",null,"The next time we compile the app (using ",(0,l.kt)("inlineCode",{parentName:"p"},"compile")," in sbt), ZIO gRPC will regenerate ",(0,l.kt)("inlineCode",{parentName:"p"},"ZioHelloworld.scala")," which contains a trait with the service definition. The trait has an abstract method for which RPC method. Therefore, with the new method added to the trait, we expect the compilation of ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldServer.scala")," to fail, since the method ",(0,l.kt)("inlineCode",{parentName:"p"},"sayHelloAgain")," will be undefined."),(0,l.kt)("p",null,"Let's implement the new method in the server and call it from the client."),(0,l.kt)("h3",{id:"update-the-server"},"Update the server"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldServer.scala"),", and add the following method to ",(0,l.kt)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'def sayHelloAgain(request: HelloRequest) =\n  ZIO.succeed(HelloReply(s"Hello again, ${request.name}"))\n')),(0,l.kt)("h3",{id:"update-the-client"},"Update the client"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldClient.scala"),", and update the definition of the ",(0,l.kt)("inlineCode",{parentName:"p"},"myAppLogic")," method in ",(0,l.kt)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'def myAppLogic =\n  for {\n    r <- GreeterClient.sayHello(HelloRequest("World"))\n    _ <- putStrLn(r.message)\n    s <- GreeterClient.sayHelloAgain(HelloRequest("World"))\n    _ <- putStrLn(s.message)\n  } yield ()\n')),(0,l.kt)("h2",{id:"run-the-updated-app"},"Run the updated app"),(0,l.kt)("p",null,"If you still have the previous version of the server running, stop it by hitting ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),". Then run the server and client like you did before inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From another terminal, run the client:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),(0,l.kt)("h2",{id:"whats-next"},"What's next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Work through the ",(0,l.kt)("a",{parentName:"li",href:"/zio-grpc/docs/basics"},"Basics Tutorial"),".")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'This document, "ZIO gRPC: Quick Start", is a derivative of ',(0,l.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/java/quickstart/"},'"gRPC ',"\u2013",' Quick Start"')," by ",(0,l.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC Authors"),", used under ",(0,l.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0"},"CC-BY-4.0"),'. "ZIO gRPC: Quick Start" is licensed under ',(0,l.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0"},"CC-BY-4.0")," by Nadav Samet."))))}m.isMDXComponent=!0}}]);