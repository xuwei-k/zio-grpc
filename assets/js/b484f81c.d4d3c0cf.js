"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5090:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],c={title:"Generated Code Reference",sidebar_label:"Generated code",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md"},s=void 0,l={unversionedId:"generated-code",id:"generated-code",title:"Generated Code Reference",description:"Packages and code location",source:"@site/../zio-grpc-docs/target/mdoc/generated-code.md",sourceDirName:".",slug:"/generated-code",permalink:"/zio-grpc/docs/next/generated-code",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md",tags:[],version:"current",frontMatter:{title:"Generated Code Reference",sidebar_label:"Generated code",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md"},sidebar:"someSidebar",previous:{title:"Installing",permalink:"/zio-grpc/docs/next/installation"},next:{title:"Context and Dependencies",permalink:"/zio-grpc/docs/next/context"}},p={},d=[{value:"Packages and code location",id:"packages-and-code-location",level:2},{value:"Service trait",id:"service-trait",level:2},{value:"Running the server",id:"running-the-server",level:3},{value:"Client trait",id:"client-trait",level:2},{value:"Using the client as a layer",id:"using-the-client-as-a-layer",level:3},{value:"Using a Scoped client",id:"using-a-scoped-client",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"packages-and-code-location"},"Packages and code location"),(0,i.kt)("p",null,"For each proto file that contains services definition, ZIO gRPC generates a Scala\nobject that will contain service definitions for all services in that file. The\nobject name would be the proto file name prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"Zio"),". It would reside in the same Scala package that ScalaPB will use for definitions in that file."),(0,i.kt)("p",null,"You can read more on how ScalaPB determines the Scala package name and how can this be customized in ",(0,i.kt)("a",{parentName:"p",href:"https://scalapb.github.io/generated-code.html#default-package-structure"},"ScalaPB's documentation"),"."),(0,i.kt)("h2",{id:"service-trait"},"Service trait"),(0,i.kt)("p",null,"Inside the object, for each service ",(0,i.kt)("inlineCode",{parentName:"p"},"MyService")," that is defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},".proto")," file, the following structure is generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait MyService {\n  // methods for each RPC\n  def sayHello(request: HelloRequest):\n    ZIO[Any, Status, HelloReply]\n}\n")),(0,i.kt)("p",null,"The trait ",(0,i.kt)("inlineCode",{parentName:"p"},"MyService")," is to be extended when implementing a server for this service."),(0,i.kt)("p",null,"It is common that services need to extract information from the request context, for example the caller's identity. To accomplish that, there is another trait ",(0,i.kt)("inlineCode",{parentName:"p"},"ZMyService")," which takes one\ntype parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," type parameter represents any domain object that you would like your RPC methods to receive.  Later on, we will see how to convert between a ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext")," which represents the underlying context of the requset with your domain model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object MyServiceImpl extends MyService {\n  def sayHello(request: HelloRequest): ZIO[Any, Status, HelloReply] = ???\n}\n")),(0,i.kt)("p",null,"Learn more about using ",(0,i.kt)("a",{parentName:"p",href:"/zio-grpc/docs/next/context"},"context and dependencies")," in the next section."),(0,i.kt)("h3",{id:"running-the-server"},"Running the server"),(0,i.kt)("p",null,"The easiest way to run a service, is to create an object that extends ",(0,i.kt)("inlineCode",{parentName:"p"},"scalapb.zio_grpc.ServerMain"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import scalapb.zio_grpc.{ServerMain, ServiceList}\n\nobject MyMain extends ServerMain {\n  def services = ServiceList.add(ServiceNameImpl)\n\n  // Default port is 9000\n  override def port: Int = 8980\n}\n")),(0,i.kt)("p",null,"You can also override ",(0,i.kt)("inlineCode",{parentName:"p"},"def port: Int")," to set a port number (by default port 9000 is used)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ServiceList")," contains additional methods to add services to the service list that can be used when the service must be created effectfully, resourcefully (scoped), or provided through a layer."),(0,i.kt)("h2",{id:"client-trait"},"Client trait"),(0,i.kt)("p",null,"The generated client follows ",(0,i.kt)("a",{parentName:"p",href:"https://zio.dev/docs/howto/howto_use_layers"},"ZIO's module pattern"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type ServiceNameClient = ServiceNameClient.Service\n\nobject ServiceNameClient {\n  trait ZService[Context] {\n    // methods for use as a client\n    def sayHello(request: HelloRequest):\n      ZIO[Context, Status, HelloReply]\n  }\n  type Service = ZService[Any]\n\n  // accessor methods\n  def sayHello(request: HelloRequest):\n    ZIO[ServiceNameClient, Status, HelloReply]\n\n  def scoped[R](\n      managedChannel: ZManagedChannel,\n      options: CallOptions =\n          io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[SafeMetadata] =\n          scalapb.zio_grpc.SafeMetadata.make\n  ): zio.Managed[Throwable, ZService[R]]\n\n  def live[Context](\n      managedChannel: ZManagedChannel,\n      options: CallOptions =\n          io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[scalapb.zio_grpc.SafeMetadata] =\n          scalapb.zio_grpc.SafeMetadata.make\n  ): zio.ZLayer[Any, Throwable, ZService[Context]]\n}\n")),(0,i.kt)("p",null,"We have two ways to use a client: through a managed resource, or through a layer. In both cases, we start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManagedChannel"),", which represents a communication channel to a gRPC server as a managed resource. Since it is scoped, proper shutdown of the channel is guaranteed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type ZManagedChannel[R] = ZIO[Scope, Throwable, ZChannel[R]]\n")),(0,i.kt)("p",null,"Creating a channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import scalapb.zio_grpc.ZManagedChannel\nimport io.grpc.ManagedChannelBuilder\n\nval channel = ZManagedChannel(\n  ManagedChannelBuilder\n    .forAddress("localhost", 8980)\n    .usePlaintext()\n)\n// channel: ZManagedChannel = OnSuccess(\n//   trace = "scalapb.zio_grpc.ZManagedChannel.apply(ZManagedChannel.scala:11)",\n//   first = Sync(\n//     trace = "scalapb.zio_grpc.ZManagedChannel.apply(ZManagedChannel.scala:11)",\n//     eval = zio.ZIO$$$Lambda$13029/1589055045@997351a\n//   ),\n//   successK = zio.ZIO$$$Lambda$12958/1546281062@3c929ddc\n// )\n')),(0,i.kt)("h3",{id:"using-the-client-as-a-layer"},"Using the client as a layer"),(0,i.kt)("p",null,"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManagedChannel")," represent a virtual connection to a conceptual endpoint to perform RPCs. A channel can have many actual connection to the endpoint. Therefore, it is very common to have a single service client for each RPC service you need to connect to. You can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZLayer")," to provide this service using the ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," method on the client companion object. Then simply write your logic using the accessor methods. Finally, inject the layer using ",(0,i.kt)("inlineCode",{parentName:"p"},"provideLayer")," at the top of your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\nimport zio._\nimport zio.Console._\n\n// create layer:\nval clientLayer = ServiceNameClient.live(channel)\n// clientLayer: ZLayer[Any, Throwable, ServiceNameClient] = Fold(\n//   self = Suspend(self = zio.ZLayer$$$Lambda$12961/587163724@7861342),\n//   failure = zio.ZLayer$$Lambda$13047/1007743318@47f2c452,\n//   success = zio.ZLayer$$Lambda$13045/185430004@721cfee\n// )\n\nval myAppLogicNeedsEnv = for {\n  // use layer through accessor methods:\n  res <- ServiceNameClient.unary(Request())\n  _ <- printLine(res.toString)\n} yield ()\n// myAppLogicNeedsEnv: ZIO[ServiceNameClient, Object, Unit] = OnSuccess(\n//   trace = "repl.MdocSession.MdocApp.myAppLogicNeedsEnv(generated-code.md:41)",\n//   first = OnSuccess(\n//     trace = "myexample.testservice.ZioTestservice.ServiceNameAccessors.unary(ZioTestservice.scala:75)",\n//     first = Sync(\n//       trace = "myexample.testservice.ZioTestservice.ServiceNameAccessors.unary(ZioTestservice.scala:75)",\n//       eval = zio.ZIO$ServiceWithZIOPartiallyApplied$$$Lambda$12957/2053504683@37ae15f5\n//     ),\n//     successK = zio.ZIO$$$Lambda$12958/1546281062@3c929ddc\n//   ),\n//   successK = <function1>\n// )\n\n// myAppLogicNeedsEnv needs access to a ServiceNameClient. We turn it into\n// a self-contained effect (IO) by providing the layer to it:\nval myAppLogic1 = myAppLogicNeedsEnv.provideLayer(clientLayer)\n// myAppLogic1: ZIO[Any, Object, Unit] = DynamicNoBox(\n//   trace = "repl.MdocSession.MdocApp.myAppLogic1(generated-code.md:46)",\n//   update = 1L,\n//   f = zio.ZIO$$$Lambda$13113/265019640@51c41\n// )\n\nobject LayeredApp extends zio.ZIOAppDefault {\n  def run: UIO[ExitCode] = myAppLogic1.exitCode\n}\n')),(0,i.kt)("p",null,"Here the application is broken to multiple value assignments so you can see the types.\nThe first effect ",(0,i.kt)("inlineCode",{parentName:"p"},"myAppLogicNeedsEnv")," uses accessor functions, which makes it depend on  an environment of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceNameClient"),". It chains the ",(0,i.kt)("inlineCode",{parentName:"p"},"unary")," RPC with printing the result to the console, and hence the final inferred effect type is ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceNameClient"),". Once we provide our custom layer, the effect type is ",(0,i.kt)("inlineCode",{parentName:"p"},"ZEnv"),", which we can use with ZIO's ",(0,i.kt)("inlineCode",{parentName:"p"},"exit")," method."),(0,i.kt)("h3",{id:"using-a-scoped-client"},"Using a Scoped client"),(0,i.kt)("p",null,"As an alternative to using ZLayer, you can use the client as a scoped resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\n\nval clientManaged = ServiceNameClient.scoped(channel)\n// clientManaged: ZIO[Scope, Throwable, ServiceNameClient] = OnSuccess(\n//   trace = "myexample.testservice.ZioTestservice.ServiceNameClient.scoped(ZioTestservice.scala:124)",\n//   first = OnSuccess(\n//     trace = "myexample.testservice.ZioTestservice.ServiceNameClientWithResponseMetadata.scoped(ZioTestservice.scala:189)",\n//     first = OnSuccess(\n//       trace = "scalapb.zio_grpc.ZManagedChannel.apply(ZManagedChannel.scala:11)",\n//       first = Sync(\n//         trace = "scalapb.zio_grpc.ZManagedChannel.apply(ZManagedChannel.scala:11)",\n//         eval = zio.ZIO$$$Lambda$13029/1589055045@997351a\n//       ),\n//       successK = zio.ZIO$$$Lambda$12958/1546281062@3c929ddc\n//     ),\n//     successK = zio.ZIO$$Lambda$12968/357320655@51049847\n//   ),\n//   successK = zio.ZIO$$Lambda$12968/357320655@58536336\n// )\n\nval myAppLogic = ZIO.scoped {\n  clientManaged.flatMap { client =>\n    for {\n      res <- client.unary(Request()).mapError(_.asRuntimeException)\n    } yield res\n  }\n}\n// myAppLogic: ZIO[Any, Throwable, Response] = OnSuccess(\n//   trace = "repl.MdocSession.MdocApp.myAppLogic(generated-code.md:66)",\n//   first = OnSuccess(\n//     trace = "repl.MdocSession.MdocApp.myAppLogic(generated-code.md:66)",\n//     first = Sync(\n//       trace = "repl.MdocSession.MdocApp.myAppLogic(generated-code.md:66)",\n//       eval = zio.Scope$ReleaseMap$$$Lambda$13055/1032444426@ae280c2\n//     ),\n//     successK = zio.ZIO$$Lambda$12968/357320655@1f95c474\n//   ),\n//   successK = zio.ZIO$ScopedPartiallyApplied$$$Lambda$13057/1606865803@375a34d3\n// )\n')),(0,i.kt)("p",null,"Since the service acquistion can fail with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),", and the RPC effects of ZIO gRPC can fail with ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," (which is not a subtype of ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),"), we use ",(0,i.kt)("inlineCode",{parentName:"p"},"mapError")," to map the RPC error to a ",(0,i.kt)("inlineCode",{parentName:"p"},"StatusRuntimeException"),". This way, the resulting effect can fail with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),"."))}m.isMDXComponent=!0}}]);