"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[640],{7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));n(814);const o={sidebar_position:5},r="Qml Plugin",s={unversionedId:"features/qmlplugin",id:"features/qmlplugin",title:"Qml Plugin",description:"You may want to use a Qml plugin for your module. This may be handy when you don't want to register structs (with qRegisterMetaType) or the interfaces (with qmlRegisterType) on compile time, in the main. Instead you can use the structs and the interfaces as an external module.",source:"@site/docs/features/qmlplugin.md",sourceDirName:"features",slug:"/features/qmlplugin",permalink:"/template-qtcpp/features/qmlplugin",draft:!1,editUrl:"https://github.com/apigear-io/template-qtcpp/edit/main/docs/features/qmlplugin.md",tags:[],version:"current",lastUpdatedBy:"dphan10",lastUpdatedAt:1680680300,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Monitor",permalink:"/template-qtcpp/features/monitor"}},l={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"qml-plugin"},"Qml Plugin"),(0,i.kt)("p",null,"You may want to use a ",(0,i.kt)("a",{parentName:"p",href:"https://doc.qt.io/qtcreator/creator-qml-modules-with-plugins.html"},"Qml plugin")," for your module. This may be handy when you don't want to register structs (with ",(0,i.kt)("inlineCode",{parentName:"p"},"qRegisterMetaType"),") or the interfaces (with ",(0,i.kt)("inlineCode",{parentName:"p"},"qmlRegisterType"),") on compile time, in the main. Instead you can use the structs and the interfaces as an external module."),(0,i.kt)("p",null,"The plugin registers all the types and all you have to do is just use it in your CMakeList.\nFor the qt 5.15 you  you should add a line to your application CMakeLists.txt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'set(QML_IMPORT_PATH  ${PLUGIN_BINARY_PATH} CACHE STRING "" FORCE)\nset(QML2_IMPORT_PATH  ${PLUGIN_BINARY_PATH} CACHE STRING "" FORCE)\n')),(0,i.kt)("p",null,"usually the ",(0,i.kt)("inlineCode",{parentName:"p"},"${PLUGIN_BINARY_PATH}")," is somewhere in your ",(0,i.kt)("inlineCode",{parentName:"p"},"CMAKE_BINARY_DIR")," and ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"imports")," folder"),(0,i.kt)("p",null,"in our example code we set it to simplest combination of those two. We define a variable in main CMakeLists.txt in case of many modules, the plugins will end in same directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="main',metastring:'CMakeLists.txt"','CMakeLists.txt"':!0},'set(IMPORTS_PATH "${CMAKE_BINARY_DIR}/imports" CACHE STRING "Path where the plugins are deployed")\n')),(0,i.kt)("p",null,"and then in each plugin we just use it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="plugin',metastring:'CMakeLists.txt"','CMakeLists.txt"':!0},"set(OUTPUT_PATH ${IMPORTS_PATH}/io/world)\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"/io/world")," is the module name"),(0,i.kt)("p",null,"If you run your application outside of ",(0,i.kt)("em",{parentName:"p"},"Qt Creator")," you need to add the import paths (paths where the plugins are) to runtime. You can either set the QML_IMPORT_PATH and QML2_IMPORT_PATH environment variables - for ad-hoc import paths (for debugging or testing) or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"QQmlEngine::addImportPath()")," function for fixed import paths that should always be available. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    QGuiApplication app(argc, argv);\n    QQmlApplicationEngine engine;\n    app.addLibraryPath(the-directory);\n")),(0,i.kt)("p",null,"When building and running with ",(0,i.kt)("em",{parentName:"p"},"Qt Creator")," in theory it should be enough to have import paths in the CMake, but you may also need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"QML_IMPORT_PATH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QML2_IMPORT_PATH")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"run environment")," in project settings, even if the settings are using the build environment variables that already contain those."),(0,i.kt)("p",null,"Read more on ",(0,i.kt)("a",{parentName:"p",href:"https://doc.qt.io/qt-6/qtqml-syntax-imports.html#qml-import-path"},"import paths")))}m.isMDXComponent=!0}}]);