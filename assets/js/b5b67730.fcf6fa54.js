"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Installing ZIO gRPC",sidebar_label:"Installing",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md"},c=void 0,s={unversionedId:"installation",id:"installation",title:"Installing ZIO gRPC",description:"Determining the right version",source:"@site/../zio-grpc-docs/target/mdoc/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zio-grpc/docs/installation",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md",tags:[],version:"current",frontMatter:{title:"Installing ZIO gRPC",sidebar_label:"Installing",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/installation.md"},sidebar:"someSidebar",previous:{title:"Basics Tutorial",permalink:"/zio-grpc/docs/basics"},next:{title:"Generated code",permalink:"/zio-grpc/docs/generated-code"}},p={},u=[{value:"Determining the right version",id:"determining-the-right-version",level:2},{value:"Installation using SBT (Recommended)",id:"installation-using-sbt-recommended",level:2},{value:"Generating code using ScalaPBC (CLI)",id:"generating-code-using-scalapbc-cli",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"determining-the-right-version"},"Determining the right version"),(0,i.kt)("p",null,"The version of zio-grpc needs to be compatible with the version of ScalaPB in order to\navoid unintended evictions and ensure binary compatibility:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ScalaPB"),(0,i.kt)("th",{parentName:"tr",align:null},"ZIO gRPC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.11.x"),(0,i.kt)("td",{parentName:"tr",align:null},"0.5.x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.10.x"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4.x")))),(0,i.kt)("h2",{id:"installation-using-sbt-recommended"},"Installation using SBT (Recommended)"),(0,i.kt)("p",null,"If you are building with sbt, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.6")\n\nlibraryDependencies +=\n  "com.thesamet.scalapb.zio-grpc" %% "zio-grpc-codegen" % "0.6.0-rc6"\n')),(0,i.kt)("p",null,"Then, add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'PB.targets in Compile := Seq(\n    scalapb.gen(grpc = true) -> (sourceManaged in Compile).value / "scalapb",\n    scalapb.zio_grpc.ZioCodeGenerator -> (sourceManaged in Compile).value / "scalapb"\n)\n\nlibraryDependencies ++= Seq(\n    "io.grpc" % "grpc-netty" % "1.50.1",\n    "com.thesamet.scalapb" %% "scalapb-runtime-grpc" % scalapb.compiler.Version.scalapbVersion\n)\n')),(0,i.kt)("p",null,"This configuration will set up the ScalaPB code generator alongside the ZIO gRPC code generator.\nUpon compilation, the source generator will process all proto files under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/protobuf"),".\nThe ScalaPB generator will generate case classes for all messages as well as methods to serialize and deserialize those messages. The ZIO gRPC code generator will generate code as described in the ",(0,i.kt)("a",{parentName:"p",href:"/zio-grpc/docs/generated-code"},"generated code section"),"."),(0,i.kt)("h2",{id:"generating-code-using-scalapbc-cli"},"Generating code using ScalaPBC (CLI)"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"http://scalapb.github.io/scalapbc.html"},"installation instructions for ScalaPBC"),".")),(0,i.kt)("p",null,"If you are using ScalaPBC to generate Scala code from the CLI, you can invoke the zio code generator like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scalapbc \\\n--plugin-artifact=com.thesamet.scalapb.zio-grpc:protoc-gen-zio:0.6.0-rc6:default,classifier=unix,ext=sh,type=jar\\\n-- e2e/src/main/protobuf/service.proto --zio_out=/tmp/out --scala_out=grpc:/tmp/out \\\n-Ie2e/src/main/protobuf -Ithird_party -Iprotobuf\n")),(0,i.kt)("p",null,"You will need to add to your project the following libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.thesamet.scalapb::scalapb-runtime-grpc:0.11.13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.thesamet.scalapb.zio-grpc:zio-grpc-core:0.6.0-rc6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.grpc:grpc-netty:1.50.1"))))}m.isMDXComponent=!0}}]);