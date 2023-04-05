"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[894],{42:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:2},o="Quick-Start",r={unversionedId:"quickstart/index",id:"quickstart/index",title:"Quick-Start",description:"The Quick-Start guide explains how to, in few steps, get from an API to a functional Qt plugin.",source:"@site/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/template-qtcpp/quickstart/",draft:!1,editUrl:"https://github.com/apigear-io/template-qtcpp/edit/main/docs/quickstart/index.md",tags:[],version:"current",lastUpdatedBy:"dphan10",lastUpdatedAt:1680680300,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/template-qtcpp/intro"},next:{title:"Features",permalink:"/template-qtcpp/features/"}},p={},s=[{value:"1. Install the code generator",id:"1-install-the-code-generator",level:2},{value:"2. Get the template",id:"2-get-the-template",level:2},{value:"Installation via CLI",id:"installation-via-cli",level:3},{value:"Installation via Studio",id:"installation-via-studio",level:3},{value:"Clone from github",id:"clone-from-github",level:3},{value:"3. Set up project",id:"3-set-up-project",level:2},{value:"Solution file",id:"solution-file",level:3},{value:"API module file",id:"api-module-file",level:3},{value:"4. Generate code",id:"4-generate-code",level:2},{value:"Generate via CLI",id:"generate-via-cli",level:3},{value:"Generate via Studio",id:"generate-via-studio",level:3},{value:"5. Use the generated Qt project.",id:"5-use-the-generated-qt-project",level:2},{value:"Create and run an example",id:"create-and-run-an-example",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quick-start"},"Quick-Start"),(0,l.kt)("p",null,"The Quick-Start guide explains how to, in few steps, get from an API to a functional ",(0,l.kt)("em",{parentName:"p"},"Qt")," plugin.\nSteps 1 and 3 are universal for other technologies. In the step 2 you will choose a concrete ",(0,l.kt)("em",{parentName:"p"},"Qt")," template.\nFor more general information about first steps with ApiGear ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apigear.io/docs/start/first_steps"},"First Steps")),(0,l.kt)("p",null,"The quick start enables only basic features: the ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/api"},"api")," generation and simple ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/stubs"},"stub")," implementation.\nFor all available features check the ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/"},"overview"),"."),(0,l.kt)("h2",{id:"1-install-the-code-generator"},"1. Install the code generator"),(0,l.kt)("p",null,"Get the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apigear-io/studio-releases/releases"},"ApiGear Studio")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apigear-io/cli/releases"},"ApiGear CLI"),". For more information check the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apigear.io/docs/start/install"},"ApiGear documentation"),"."),(0,l.kt)("h2",{id:"2-get-the-template"},"2. Get the template"),(0,l.kt)("p",null,"There are several options to get the template. Installation via the ",(0,l.kt)("em",{parentName:"p"},"Studio")," or the ",(0,l.kt)("em",{parentName:"p"},"CLI"),". Alternatively it is possible to clone or download from github."),(0,l.kt)("h3",{id:"installation-via-cli"},"Installation via CLI"),(0,l.kt)("p",null,"When using the ",(0,l.kt)("em",{parentName:"p"},"CLI")," only the highlighted line is imported. You can always check whether the installation was successful via the ",(0,l.kt)("inlineCode",{parentName:"p"},"template list")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apigear template list\nlist of templates from registry and cache\nname                       | installed | registry | url\napigear-io/template-qtcpp | false     | true     | https://github.com/apigear-io/template-qtcpp.git\n...\n# highlight-next-line\n$ apigear template install apigear-io/template-qtcpp\n$ apigear template list\nlist of templates from registry and cache\nname                       | installed | registry | url\napigear-io/template-qtcpp | true      | true     | https://github.com/apigear-io/template-qtcpp.git\n...\n")),(0,l.kt)("h3",{id:"installation-via-studio"},"Installation via Studio"),(0,l.kt)("p",null,"From within the studio the installation is really simple."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open an existing project or create an new one"),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Templates")," tab"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Install")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"apigear-io/template-qtcpp")," entry")),(0,l.kt)("h3",{id:"clone-from-github"},"Clone from github"),(0,l.kt)("p",null,"In case you want to check or modify the source code of the template, it is easier to clone or download the repository. The repository does not need to be part of the project, but can be stored anywhere on the computer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apigear-io/template-qtcpp.git\n")),(0,l.kt)("h2",{id:"3-set-up-project"},"3. Set up project"),(0,l.kt)("p",null,"For a project we usually need two files. The solution which specifies what ",(0,l.kt)("inlineCode",{parentName:"p"},"APIs")," and which template to use for it. And at least one ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," module file.\nBoth should ideally be in a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"apigear")," next to each other."),(0,l.kt)("p",null,"Alternatively, you can also use the ",(0,l.kt)("em",{parentName:"p"},"Studio")," to create a new project and modify the two example files."),(0,l.kt)("h3",{id:"solution-file"},"Solution file"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apigear.io/docs/start/first_steps#create-a-solution"},"solution")," file.\nThe example below specifies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"module files in ",(0,l.kt)("em",{parentName:"li"},"line 8"),", here the ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld.module.yaml")," module with ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello")," API"),(0,l.kt)("li",{parentName:"ul"},"the output directory for generated files in ",(0,l.kt)("em",{parentName:"li"},"line 9")),(0,l.kt)("li",{parentName:"ul"},"a template used to generate the code in ",(0,l.kt)("em",{parentName:"li"},"line 10"),", here the ",(0,l.kt)("inlineCode",{parentName:"li"},"apigear-ui/template-qtcpp")," template. This can also be a path to a local copy of the template."),(0,l.kt)("li",{parentName:"ul"},"the enabled features of the template in ",(0,l.kt)("em",{parentName:"li"},"line 13"),", here the ",(0,l.kt)("inlineCode",{parentName:"li"},"stubs")," feature, a simple implementation of interfaces. For all available features check the ",(0,l.kt)("a",{parentName:"li",href:"/template-qtcpp/features/"},"overview"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',title:'"helloworld.solution.yaml"',showLineNumbers:!0},'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1"\n\nlayers:\n  - name: qt_hello_world\n    inputs:\n      - helloworld.module.yaml\n    output: ../qt_hello_world\n    template: apigear-io/template-qtcpp\n    force: true\n    features:\n      - stubs\n')),(0,l.kt)("admonition",{title:"Layers",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can extend this solution file with other layers, each for the different technology with  different template. The module.yaml is technology independent and may be used for any template.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Set the force parameter to true if you want to always override all the generated files. With option set to false some files, like implementation (stub feature) won't be updated. All the API files are always updated.")),(0,l.kt)("h3",{id:"api-module-file"},"API module file"),(0,l.kt)("p",null,"Use your favorite text editor to create the ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld.module.yaml")," with the example content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helloworld.module.yaml" showLineNumbers',title:'"helloworld.module.yaml"',showLineNumbers:!0},'schema: apigear.module/1.0\nname: io.world\nversion: "1.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n')),(0,l.kt)("h2",{id:"4-generate-code"},"4. Generate code"),(0,l.kt)("p",null,"With the output directory set as in example, both ",(0,l.kt)("em",{parentName:"p"},"ApiGear")," files reside in an ",(0,l.kt)("inlineCode",{parentName:"p"},"apigear")," subfolder next to the ",(0,l.kt)("em",{parentName:"p"},"Qt")," generated files.\nIn this case the folder structure should look similar to this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2qt_hello_world\n # highlight-next-line\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2517 \ud83d\udcc2implementation\n \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n")),(0,l.kt)("p",null,"Using the solution file from the previous paragraph the code will be generated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"qt_hello_world")," folder.\nWith subfolder for each module, here ",(0,l.kt)("inlineCode",{parentName:"p"},"io_world")," as the name of module (defined in line 2 of ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld.module.yaml"),").\nIt contains both features generated: a basic api and a stub implementation."),(0,l.kt)("h3",{id:"generate-via-cli"},"Generate via CLI"),(0,l.kt)("p",null,"The following snippet shows how the CLI can be run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apigear generate solution apigear/helloworld.solution.yaml \n10:52:20 INF generated 21 files in 30ms. (20 write, 0 skip, 1 copy) topic=gen\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generate")," tells the CLI that it should generate code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"solution")," specifies that we want to run a solution file")),(0,l.kt)("h3",{id:"generate-via-studio"},"Generate via Studio"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the project"),(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Solutions")," tab"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Run")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld.solution.yaml")," entry")),(0,l.kt)("h2",{id:"5-use-the-generated-qt-project"},"5. Use the generated Qt project."),(0,l.kt)("p",null,"The generated code supports ",(0,l.kt)("em",{parentName:"p"},"Qml")," and ",(0,l.kt)("em",{parentName:"p"},"C++")," implementations. The following paragraphs show how you can use it.\nYou can start your project loading the top level CMakeLists.txt in ",(0,l.kt)("inlineCode",{parentName:"p"},"qt_hello_world")," folder."),(0,l.kt)("p",null,"The 'api.h' contains all definitions of the enums and structs for your module, as well as the QObject abstract base classes for your Interfaces.\nFrom now on you can simply include the header files for the api interface or the stub implementation and use it.\nFor more details on generated features please check ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/api"},"api")," and ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/stubs"},"stubs")," "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'Check the "example" feature to see how to use your API directly in qml with the generated wrappers.')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For the pure virtual interface see the pure C++ template ")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For the simulation check ",(0,l.kt)("a",{parentName:"p",href:"/template-qtcpp/features/olink"},"the olink feature")," which provides middle layer on your code side and the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apigear.io/docs/advanced/simulation/intro"},"simulation")," explained.")),(0,l.kt)("h3",{id:"create-and-run-an-example"},"Create and run an example"),(0,l.kt)("p",null,"Prepare an ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," folder in the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-world/qt_hello_world")," directory with a main.cpp like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <QGuiApplication>\n#include "io_world/implementation/hello.h"\nint main(int argc, char *argv[])\n{\n    QGuiApplication app(argc, argv);\n    io_world::Hello myHelloInstance;\n\n\n    // Try out properties: subscribe for changes\n    myHelloInstance.connect(&myHelloInstance, &io_world::AbstractHello::lastChanged,\n                            []( const io_world::Message& last){ qDebug() << "last property changed ";});\n    // and ask for change.\n    io_world::Message messageForProperty;\n    messageForProperty.m_content = QString("New message");\n    myHelloInstance.setLast(messageForProperty);\n\n    // Check the signals with subscribing for its change\n    myHelloInstance.connect(&myHelloInstance, &io_world::AbstractHello::justSaid,\n                            [](const io_world::Message& msg){ qDebug() << "justSaid signal emitted ";});\n    // and emit one.\n    io_world::Message messageForSignal;\n    messageForSignal.m_content = QString("Message from signal");\n    emit myHelloInstance.justSaid(messageForSignal);\n\n    // Play around executing operations, maybe they emit signals? or change the properties?\n    auto method_result = myHelloInstance.say(io_world::Message(), io_world::When::Now);\n\n    return app.exec();\n}\n')),(0,l.kt)("p",null,"add a CMakeLists.txt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"project(MyExample)\ncmake_minimum_required(VERSION 3.20)\n\nfind_package(Qt5 REQUIRED COMPONENTS Gui)\n\nset(CMAKE_CXX_STANDARD 14)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nadd_executable(MyExample main.cpp)\n\nfind_package(io_world QUIET COMPONENTS io_world_impl)\ntarget_link_libraries(MyExample io_world_impl Qt5::Gui)\n")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"example")," subdirectory to the hello-world/qt_hello_world/CMakeLists.txt. Now you can build the application and the libraries with it and run your example."))}u.isMDXComponent=!0}}]);