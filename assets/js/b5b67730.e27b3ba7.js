"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Installing ZIO gRPC",sidebar_label:"Installing",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md"},c=void 0,s={unversionedId:"installation",id:"installation",title:"Installing ZIO gRPC",description:"Determining the right version",source:"@site/../zio-grpc-docs/target/mdoc/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zio-grpc/docs/next/installation",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md",tags:[],version:"current",frontMatter:{title:"Installing ZIO gRPC",sidebar_label:"Installing",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md"},sidebar:"someSidebar",previous:{title:"Basics Tutorial",permalink:"/zio-grpc/docs/next/basics"},next:{title:"Generated code",permalink:"/zio-grpc/docs/next/generated-code"}},p={},u=[{value:"Determining the right version",id:"determining-the-right-version",level:2},{value:"Installation using SBT (Recommended)",id:"installation-using-sbt-recommended",level:2},{value:"Generating code using ScalaPBC (CLI)",id:"generating-code-using-scalapbc-cli",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"determining-the-right-version"},"Determining the right version"),(0,i.kt)("p",null,"The version of zio-grpc needs to be compatible with the version of ScalaPB in order to\navoid unintended evictions and ensure binary compatibility:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ScalaPB"),(0,i.kt)("th",{parentName:"tr",align:null},"ZIO gRPC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.11.x"),(0,i.kt)("td",{parentName:"tr",align:null},"0.5.x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.10.x"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4.x")))),(0,i.kt)("h2",{id:"installation-using-sbt-recommended"},"Installation using SBT (Recommended)"),(0,i.kt)("p",null,"If you are building with sbt, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.6")\n\nlibraryDependencies +=\n  "com.thesamet.scalapb.zio-grpc" %% "zio-grpc-codegen" % "0.6.0-M1"\n')),(0,i.kt)("p",null,"Then, add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'PB.targets in Compile := Seq(\n    scalapb.gen(grpc = true) -> (sourceManaged in Compile).value / "scalapb",\n    scalapb.zio_grpc.ZioCodeGenerator -> (sourceManaged in Compile).value / "scalapb"\n)\n\nlibraryDependencies ++= Seq(\n    "io.grpc" % "grpc-netty" % "1.41.2",\n    "com.thesamet.scalapb" %% "scalapb-runtime-grpc" % scalapb.compiler.Version.scalapbVersion\n)\n')),(0,i.kt)("p",null,"This configuration will set up the ScalaPB code generator alongside the ZIO gRPC code generator.\nUpon compilation, the source generator will process all proto files under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/protobuf"),".\nThe ScalaPB generator will generate case classes for all messages as well as methods to serialize and deserialize those messages. The ZIO gRPC code generator will generate code as described in the ",(0,i.kt)("a",{parentName:"p",href:"/zio-grpc/docs/next/generated-code"},"generated code section"),"."),(0,i.kt)("h2",{id:"generating-code-using-scalapbc-cli"},"Generating code using ScalaPBC (CLI)"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"See ",(0,i.kt)("a",{parentName:"h5",href:"http://scalapb.github.io/scalapbc.html"},"installation instructions for ScalaPBC"),".")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"If you are using ScalaPBC to generate Scala code from the CLI, you can invoke the zio code generator like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scalapbc \\\n--plugin-artifact=com.thesamet.scalapb.zio-grpc:protoc-gen-zio:0.6.0-M1:default,classifier=unix,ext=sh,type=jar\\\n-- e2e/src/main/protobuf/service.proto --zio_out=/tmp/out --scala_out=grpc:/tmp/out \\\n-Ie2e/src/main/protobuf -Ithird_party -Iprotobuf\n")),(0,i.kt)("p",null,"You will need to add to your project the following libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.thesamet.scalapb::scalapb-runtime-grpc:0.11.8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.thesamet.scalapb.zio-grpc:zio-grpc-core:0.6.0-M1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.grpc:grpc-netty:1.41.2"))))}m.isMDXComponent=!0}}]);