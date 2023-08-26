"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[539],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=["components"],l={title:"Generated Code Reference",sidebar_label:"Generated code",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md"},c=void 0,s={unversionedId:"generated-code",id:"version-0.5.x/generated-code",title:"Generated Code Reference",description:"Packages and code location",source:"@site/versioned_docs/version-0.5.x/generated-code.md",sourceDirName:".",slug:"/generated-code",permalink:"/zio-grpc/docs/0.5.x/generated-code",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md",tags:[],version:"0.5.x",frontMatter:{title:"Generated Code Reference",sidebar_label:"Generated code",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/generated-code.md"},sidebar:"version-0.5.x/someSidebar",previous:{title:"Installing",permalink:"/zio-grpc/docs/0.5.x/installation"},next:{title:"Context and Dependencies",permalink:"/zio-grpc/docs/0.5.x/context"}},p={},d=[{value:"Packages and code location",id:"packages-and-code-location",level:2},{value:"Service trait",id:"service-trait",level:2},{value:"Running the server",id:"running-the-server",level:3},{value:"Client trait",id:"client-trait",level:2},{value:"Using the client as a layer",id:"using-the-client-as-a-layer",level:3},{value:"Using a Managed Client",id:"using-a-managed-client",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"packages-and-code-location"},"Packages and code location"),(0,r.kt)("p",null,"For each proto file that contains services definition, ZIO gRPC generates a Scala\nobject that will contain service definitions for all services in that file. The\nobject name would be the proto file name prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"Zio"),". It would reside in the same Scala package that ScalaPB will use for definitions in that file."),(0,r.kt)("p",null,"You can read more on how ScalaPB determines the Scala package name and how can this be customized in ",(0,r.kt)("a",{parentName:"p",href:"https://scalapb.github.io/generated-code.html#default-package-structure"},"ScalaPB's documentation"),"."),(0,r.kt)("h2",{id:"service-trait"},"Service trait"),(0,r.kt)("p",null,"Inside the object, for each service ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceName")," that is defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file, the following structure is generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZServiceName[R, Context] {\n  // methods for each RPC\n  def sayHello(request: HelloRequest):\n    ZIO[R with Context, Status, HelloReply]\n}\ntype ServiceName = ZServiceName[Any, Any]\n")),(0,r.kt)("p",null,"The trait ",(0,r.kt)("inlineCode",{parentName:"p"},"ZServiceName")," is to be extended when implementing a server for this service. The trait takes two type parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Context"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," representes the dependencies of the service. All the effects being returned by these methods depend on ",(0,r.kt)("inlineCode",{parentName:"li"},"R")," to encode this dependency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Context")," represents any domain object that you would like your RPC methods to have available in the environment.")),(0,r.kt)("p",null,"You can set both ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," when implementing a service to indicate that the service does not have any dependencies or expectations from the environment. Since it is very common situation, especially when getting started, you can have your service implementation extends ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceName")," which is a type alias to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZServiceName[Any, Any]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ServiceNameImpl extends ServiceName {\n}\n")),(0,r.kt)("p",null,"Learn more about using ",(0,r.kt)("a",{parentName:"p",href:"/zio-grpc/docs/0.5.x/context"},"context and dependencies")," in the next section."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Why ",(0,r.kt)("inlineCode",{parentName:"strong"},"Any")," means that there are no dependencies?")," All Scala objects are instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"Any"),". Therefore, any object that is provided as a dependency to our service would satisfy being of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Any"),". In other words, there is no specific instance type required.")),(0,r.kt)("h3",{id:"running-the-server"},"Running the server"),(0,r.kt)("p",null,"The easiest way to run a service, is to create an object that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"scalapb.zio_grpc.ServerMain"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import scalapb.zio_grpc.{ServerMain, ServiceList}\n\nobject MyMain extends ServerMain {\n  def services = ServiceList.add(ServiceNameImpl)\n\n  // Default port is 9000\n  override def port: Int = 8980\n}\n")),(0,r.kt)("p",null,"You can also override ",(0,r.kt)("inlineCode",{parentName:"p"},"def port: Int")," to set a port number (by default port 9000 is used)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ServiceList")," contains additional methods to add services to the service list that can be used when the service must be created effectfully, or wrapped in a managed, or provided to you as a layer."),(0,r.kt)("h2",{id:"client-trait"},"Client trait"),(0,r.kt)("p",null,"The generated client follows ",(0,r.kt)("a",{parentName:"p",href:"https://zio.dev/docs/howto/howto_use_layers"},"ZIO's module pattern"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type ServiceNameClient = Has[ServiceNameClient.Service]\nobject ServiceNameClient {\n  trait ZService[R] {\n    // methods for use as a client\n    def sayHello(request: HelloRequest):\n      ZIO[R, Status, HelloReply]\n  }\n  type Service = ZService[Any]\n\n  // accessor methods\n  def sayHello(request: HelloRequest):\n    ZIO[ServiceNameClient, Status, HelloReply]\n\n  def managed[R](\n      managedChannel: ZManagedChannel[R],\n      options: CallOptions =\n          io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[SafeMetadata] =\n          scalapb.zio_grpc.SafeMetadata.make\n  ): zio.Managed[Throwable, ZService[R]]\n\n  def live[R](\n      managedChannel: ZManagedChannel[R],\n      options: CallOptions =\n          io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[scalapb.zio_grpc.SafeMetadata] =\n          scalapb.zio_grpc.SafeMetadata.make\n  ): zio.ZLayer[R, Throwable, ServiceNameClient]\n}\n")),(0,r.kt)("p",null,"We have two ways to use a client: through a managed resource, or through a layer. In both cases, we start by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManagedChannel"),", which represents a communication channel to a gRPC server as a managed resource. Since it is wrapped in ",(0,r.kt)("a",{parentName:"p",href:"https://zio.dev/docs/datatypes/datatypes_managed"},"ZIO's ",(0,r.kt)("inlineCode",{parentName:"a"},"Managed")),", proper shutdown of the channel is guaranteed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type ZManagedChannel[R] = Managed[Throwable, ZChannel[R]]\n")),(0,r.kt)("p",null,"Creating a channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import scalapb.zio_grpc.ZManagedChannel\nimport io.grpc.ManagedChannelBuilder\n\nval channel = ZManagedChannel(\n  ManagedChannelBuilder\n    .forAddress("localhost", 8980)\n    .usePlaintext()\n)\n// channel: ZManagedChannel[Any] = zio.ZManaged$$anon$2@69497154\n')),(0,r.kt)("h3",{id:"using-the-client-as-a-layer"},"Using the client as a layer"),(0,r.kt)("p",null,"A single ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManagedChannel")," represent a virtual connection to a conceptual endpoint to perform RPCs. A channel can have many actual connection to the endpoint. Therefore, it is very common to have a single service client for each RPC service you need to connect to. You can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZLayer")," to provide this service using the ",(0,r.kt)("inlineCode",{parentName:"p"},"live")," method on the client companion object. Then simply write your logic using the accessor methods. Finally, inject the layer using ",(0,r.kt)("inlineCode",{parentName:"p"},"provideCustomLayer")," at the top of your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\nimport zio._\nimport zio.console._\n\n// create layer:\nval clientLayer = ServiceNameClient.live(channel)\n// clientLayer: ZLayer[Any, Throwable, Has[ServiceNameClient.ZService[Any, Any]]] = Managed(\n//   self = zio.ZManaged$$anon$2@25f8138d\n// )\n\nval myAppLogicNeedsEnv = for {\n  // use layer through accessor methods:\n  res <- ServiceNameClient.unary(Request())\n  _ <- putStrLn(res.toString)\n} yield ()\n// myAppLogicNeedsEnv: ZIO[Has[ServiceNameClient.ZService[Any, Any]] with Any with Console, Object, Unit] = zio.ZIO$FlatMap@2aacd69\n\n// myAppLogicNeedsEnv needs access to a ServiceNameClient. We turn it into\n// a self-contained effect (IO) by providing the layer to it:\nval myAppLogic1 = myAppLogicNeedsEnv.provideCustomLayer(clientLayer)\n// myAppLogic1: ZIO[ZEnv, Object, Unit] = zio.ZIO$CheckInterrupt@71b27fca\n\nobject LayeredApp extends zio.App {\n  def run(args: List[String]): URIO[ZEnv, ExitCode] = myAppLogic1.exitCode\n}\n")),(0,r.kt)("p",null,"Here the application is broken to multiple value assignments so you can see the types.\nThe first effect ",(0,r.kt)("inlineCode",{parentName:"p"},"myAppLogicNeedsEnv")," uses accessor functions, which makes it depend on  an environment of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceNameClient"),". It chains the ",(0,r.kt)("inlineCode",{parentName:"p"},"unary")," RPC with printing the result to the console, and hence the final inferred effect type is ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceNameClient with Console"),". Once we provide our custom layer, the effect type is ",(0,r.kt)("inlineCode",{parentName:"p"},"ZEnv"),", which we can use with ZIO's run method."),(0,r.kt)("h3",{id:"using-a-managed-client"},"Using a Managed Client"),(0,r.kt)("p",null,"As an alternative to using ZLayer, you can use the client through a managed resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\n\nval clientManaged = ServiceNameClient.managed(channel)\n// clientManaged: Managed[Throwable, ServiceNameClient.ZService[Any, Any]] = zio.ZManaged$$anon$2@66c5251c\n\nval myAppLogic = for {\n  res <- clientManaged.use(\n    client =>\n      client.unary(Request()).mapError(_.asException)\n  )\n} yield res\n// myAppLogic: ZIO[Any with Any, Throwable, Response] = zio.ZIO$FlatMap@1a4cd330\n")),(0,r.kt)("p",null,"Since the service acquistion (through the ZManaged) can fail with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),", and the RPC effects of ZIO gRPC can fail with ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," (which is not a subtype of ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),"), we use ",(0,r.kt)("inlineCode",{parentName:"p"},"mapError")," to map the RPC error to a ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusException"),". This way, the resulting effect can fail with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),"."))}u.isMDXComponent=!0}}]);