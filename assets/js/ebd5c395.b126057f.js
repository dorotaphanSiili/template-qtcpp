"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78],{2807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),r=n(814),o=n(7784);const l={sidebar_position:1},p="API",s={unversionedId:"features/api",id:"features/api",title:"API",description:"The feature api is the bare minimum for the code generation. What you receive is:",source:"@site/docs/features/api.md",sourceDirName:"features",slug:"/features/api",permalink:"/template-qtcpp/features/api",draft:!1,editUrl:"https://github.com/apigear-io/template-qtcpp/edit/main/docs/features/api.md",tags:[],version:"current",lastUpdatedBy:"dphan10",lastUpdatedAt:1680680300,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Features",permalink:"/template-qtcpp/features/"},next:{title:"Stubs",permalink:"/template-qtcpp/features/stubs"}},m={},d=[{value:"File overview for module",id:"file-overview-for-module",level:3},{value:"Api",id:"api-1",level:3},{value:"Enums",id:"enums",level:4},{value:"Structs",id:"structs",level:4},{value:"Interfaces",id:"interfaces",level:4},{value:"Qml Wrappers",id:"qml-wrappers",level:3},{value:"Providing backend to Qml Wrapper.",id:"providing-backend-to-qml-wrapper",level:3},{value:"Other",id:"other",level:3}],c={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("p",null,"The feature ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," is the bare minimum for the code generation. What you receive is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"abstract ",(0,i.kt)("inlineCode",{parentName:"li"},"QObject")," base class for each ",(0,i.kt)("em",{parentName:"li"},"interface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"enums")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"structs")," with a basic implementation"),(0,i.kt)("li",{parentName:"ul"},"qml wrappers and utilities to use your interfaces in qml.")),(0,i.kt)("h3",{id:"file-overview-for-module"},"File overview for module"),(0,i.kt)("p",null,"With an example API"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hello World API (click to expand)"),(0,i.kt)(r.Z,{language:"yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z)),(0,i.kt)("p",null,"the following file structure will be generated. The purpose and content of each file is explained below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2523 \ud83d\udcc2qt_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcapi.cpp\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcapi.h\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcapifactory.cpp\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcapifactory.h\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdciapifactory.h\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcjson.adapter.h\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcqmlhello.cpp\n \u2503 \u2503 \u2503  \u2523 \ud83d\udcdcqmlhello.h\n \u2503 \u2503 \u2503  \u2517 \ud83d\udcdcCMakeLists.txt\n ...\n")),(0,i.kt)("h3",{id:"api-1"},"Api"),(0,i.kt)("p",null,"Files ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcapi.h")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcapi.cpp")," contain the api: interfaces, data structures and enums."),(0,i.kt)("h4",{id:"enums"},"Enums"),(0,i.kt)("p",null,"Each enum is exposed to qml and their metatype is declared with ",(0,i.kt)("inlineCode",{parentName:"p"},"Q_DECLARE_METATYPE"),".\nFor convenience of use each enum has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toEnum")," function converts given ",(0,i.kt)("inlineCode",{parentName:"li"},"quint8")," to enum value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QDataSteram")," in and out operators for the enum.")),(0,i.kt)("h4",{id:"structs"},"Structs"),(0,i.kt)("p",null,"Each struct has its fields exposed for qml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="api.h"',title:'"api.h"'},"...\nstruct IO_WORLD_API_EXPORT Message\n{\n    Q_GADGET\n    Q_PROPERTY(QString content MEMBER m_content )\n...\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We generate the import/export statements (here IO_WORLD_API_EXPORT) for all the classes and structs that have an implementation in a ",(0,i.kt)("em",{parentName:"p"},"cpp")," file and may be used outside of the library.")),(0,i.kt)("p",null,"For convenience of use each structure has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"equality comparison operators"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"QDataSteram")," in and out operators for the generated struct ",(0,i.kt)("inlineCode",{parentName:"li"},"Message"),"."),(0,i.kt)("li",{parentName:"ul"},"the factory of structures with ",(0,i.kt)("inlineCode",{parentName:"li"},"Q_INVOKABLE")," ",(0,i.kt)("inlineCode",{parentName:"li"},"create()")," method, here for ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageFactory"),", to make an instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Message")," in qml.")),(0,i.kt)("p",null,"The struct metatype is declared with ",(0,i.kt)("inlineCode",{parentName:"p"},"Q_DECLARE_METATYPE"),". That may not be enough if you want to bind to fields of the struct in qml. In that case you need to register your ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," either using a ",(0,i.kt)("a",{parentName:"p",href:"/template-qtcpp/features/qmlplugin"},"plugin")," or in your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.cpp")," - see example below. The example shows also registering the ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageFactory")," class - necessary if you need to instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," in qml. Factory registration can be achieved in more than one way - we're showing' registering it as singleton and importing the singleton in qml file - no instances needed. But also you can try registering it with ",(0,i.kt)("inlineCode",{parentName:"p"},"qmlRegisterType")," and create an instance (either in qml, or in c++ and set it as context variable)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'showLineNumbers  title="main.cpp"',showLineNumbers:!0,"":!0,title:'"main.cpp"'},'registerTypes()\n{\n    auto versionMajor = 1;\n    auto versionMinor = 0;\n    // register struct\n    qRegisterMetaType<io_world::Message>();\n\n    // register struct factory\n    auto createIoWorldMessageFactorySingleton = [](QQmlEngine *engine, QJSEngine *scriptEngine) -> QObject* {\n         Q_UNUSED(engine)\n         Q_UNUSED(scriptEngine)\n         return new io_world::MessageFactory();\n    };\n    const std::string uriIoWorldMessageFactory = io_world_module_name + ".MessageFactorySingleton";\n    qmlRegisterSingletonType<io_world::MessageFactory>(uriIoWorldMessageFactory.c_str(), versionMajor, versionMinor, "IoWorldMessageFactory", createIoWorldMessageFactorySingleton);\n\n    // you also may want to register your enums:\n    qmlRegisterUncreatableType<io_world::When>(io_world_module_name, versionMajor, versionMinor, "IoWorldWhen", "An enum can not be created");\n\n    // and interfaces:\n    qmlRegisterType<io_world::QmlHello>(io_world_module_name, versionMajor, versionMinor, "IoWorldHello");\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'The qml plugin uses the version information form helloworld.module.yaml to register types. When registering "by hand" you should also use the same version.')),(0,i.kt)("h4",{id:"interfaces"},"Interfaces"),(0,i.kt)("p",null,"Base interface version for Qt template is a QObject Abstract base class, here ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractHello"),". ",(0,i.kt)("br",null),"\nIt contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a pure virtual ",(0,i.kt)("inlineCode",{parentName:"li"},"getters")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"setters")," for each property")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"   virtual void setLast(const Message& last) = 0;\n   virtual Message last() const = 0;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pure virtual functions for each operation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual int say(const Message& msg, When::WhenEnum when) = 0;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"signals: for each api signal and for each api property - on property changed signal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"signals:\n    void justSaid(const Message& msg);\n    void lastChanged(const Message& last);\n")),(0,i.kt)("h3",{id:"qml-wrappers"},"Qml Wrappers"),(0,i.kt)("p",null,"Files ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcqmlhello.h")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcqmlhello.cpp")," contain a qml wrapper for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," interface.",(0,i.kt)("br",null),"\nThe qml wrapper requires providing an implemented ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractHello")," instance. For that factory files are necessary: ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdciapifactory.h")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcapifactory.h")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdcapifactory.cpp"),". The functionality is explained ",(0,i.kt)("a",{parentName:"p",href:"api#providing-backend-to-qml-wrapper"},"below"),"."),(0,i.kt)("p",null,"The Qml wrapper (simplified version)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'showLineNumbers  title="qmlhello.h"',showLineNumbers:!0,"":!0,title:'"qmlhello.h"'},"class IO_WORLD_API_EXPORT QmlHello : public AbstractHello\n{\n    Q_OBJECT\n    ...\n    Q_PROPERTY(Message last READ last WRITE setLast NOTIFY lastChanged)\n    ...\n    Q_INVOKABLE int say(const Message& msg, When::WhenEnum when) override;\n    ...\nQ_SIGNALS:\n    void lastChanged(const Message& last);\n}\n")),(0,i.kt)("p",null,"The qml wrapper makes the interface usable from qml:",(0,i.kt)("br",null),"\nLine 5 shows exposed properties, with emitting signal on property changed from qml (",(0,i.kt)("inlineCode",{parentName:"p"},"NOTIFY lastChanged"),") - hence overriding signal for property changed (line 10). ",(0,i.kt)("br",null),"\nLine 7 shows the function exposed as a callable from qml.  ",(0,i.kt)("br",null),"\nThe wrapper forwards the calls to backend and all the signals from backend to qml wrapper."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The signals defined in the api shall be emitted by the backend and handled in qml, not the other way around. When the signal is emitted in qml, it won't reach the backend implementation.")),(0,i.kt)("p",null,"To use QmlHello you just need to create an instance of it in your Qml code with a proper (registered) name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"import QtQuick 2.15\nimport QtQuick.Layouts 1.2\nimport io_world 1.0\n\nApplicationWindow {\n    id: appWindow\n    visible: true\n    width: 300\n    height: 300\n\n    IoWorldHello { id: qmlIoWorldHello }\n")),(0,i.kt)("p",null,"Here QmlHello is registered as ",(0,i.kt)("inlineCode",{parentName:"p"},"IoWorldHello")," (The module name combined with the Interface name). You can do it either by using a ",(0,i.kt)("a",{parentName:"p",href:"/template-qtcpp/features/qmlplugin"},"plugin")," or in your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.cpp")," with e.g. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'qmlRegisterType<io_world::QmlHello>(io_world, 1, 0, "IoWorldHello");\n')),(0,i.kt)("p",null,"which puts ",(0,i.kt)("inlineCode",{parentName:"p"},"IoWorldHello")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"io_world 1.0")," module."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'The qml plugin uses the version information form helloworld.module.yaml to register types. When registering "by hand" you should also use the same version.')),(0,i.kt)("h3",{id:"providing-backend-to-qml-wrapper"},"Providing backend to Qml Wrapper."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"QmlHello")," is instantiated in qml without any handle to get or set the backend. Therefore, the global ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiFactory")," class of ",(0,i.kt)("inlineCode",{parentName:"p"},"IApiFactory")," type is added to provide a flexible and extensible way to create it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"QmlHello")," class creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," backend object by itself using the global ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiFactory"),". By providing your ",(0,i.kt)("inlineCode",{parentName:"p"},"IApiFactory")," implementation, you will be able to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," backend of your choice. "),(0,i.kt)("p",null,"Here is an example code snippet that shows how to prepare your ",(0,i.kt)("inlineCode",{parentName:"p"},"IApiFactory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="io_world/customfactory.h"',title:'"io_world/customfactory.h"'},'#pragma once\n\n#include "io_world/api/iapifactory.h"\n// #include "your CustomHello header file"\n#include <QtCore>\n\nclass CustomFactory : public QObject, public IApiFactory\n{\npublic:\n    CustomFactory(..., QObject *parent = nullptr); //provide any extra resources your factory needs.\n\n    std::shared_ptr<AbstractHello> createHello(QObject *parent = nullptr) override\n    {\n        return make_shared<CustomHello>(...); // provide any resource your CustomHello needs.\n    }\n};\n\n')),(0,i.kt)("p",null,"and set in code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include "io_world/api/apifactory.h"\n#include "io_world/customfactory.h"\n\n#include <QtCore>\n#include <QGuiApplication>\n#include <QQmlApplicationEngine>\n\nint main(int argc, char *argv[]){\n\n    io_world::CustomFactory io_worldFactory();\n    // Setting the CustomFactory as a global factory. From now, each qml object will create backend with it.\n    io_world::ApiFactory::set(&io_worldFactory); \n\n    // Starting your application after setting the factory.\n    const QUrl url(QStringLiteral("qrc:/main.qml"));\n    QGuiApplication app(argc, argv);\n    QQmlApplicationEngine engine;\n\n    engine.load(url);\n    ...\n')),(0,i.kt)("p",null,"this way, on every ",(0,i.kt)("inlineCode",{parentName:"p"},"QmlHello")," instantiation, your ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomFactory::createHello")," is called, and the returned object is used by ",(0,i.kt)("inlineCode",{parentName:"p"},"QmlHello"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can check the ",(0,i.kt)("inlineCode",{parentName:"p"},"qml example")," or factories provided by other features. For instance ",(0,i.kt)("a",{parentName:"p",href:"/template-qtcpp/features/olink"},"olink"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Your IApiFactory implementation needs to be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiFactory")," once, before the QML file is loaded.")),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdc CMakeLists.txt")," for building this module, describing it's dependencies, and exposing built package for other features that will use it.\n",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdc json.adapter.h")," prepares adapters for structs to easy read from or write to ",(0,i.kt)("inlineCode",{parentName:"p"},"nlohmann::json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Message message = json.get<Message>();\nnlohmann::json message = message;\n")))}h.isMDXComponent=!0}}]);