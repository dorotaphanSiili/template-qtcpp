{{- /* Copyright (c) ApiGear UG 2020 */ -}}
{{ cppGpl .Module }}
{{- $module_id := (snake .Module.Name)}}
{{- $class := printf "OLink%s" .Interface.Name }}
{{- $module := .Module.Name }}
{{- $iface := .Interface.Name }}
#pragma once

#include <QtCore>
#include <QtPromise>

#include "{{snake .Module.Name}}/api/api.h"
#include "olink/clientnode.h"

using namespace ApiGear;
using namespace ApiGear::ObjectLink;

class {{$class}} : public Abstract{{.Interface.Name}}, public IObjectSink
{
    Q_OBJECT
public:
    explicit {{$class}}(ClientRegistry& registry, QObject *parent = nullptr);
    virtual ~{{$class}}() override;

    void applyState(const nlohmann::json& fields);

{{- range .Interface.Properties }}
    {{qtReturn "" .}} {{.Name}}() const override;
    void set{{Camel .Name}}({{qtParam "" .}}) override;
    void set{{Camel .Name}}Local({{qtParam "" .}});
{{- end }}

{{- range .Interface.Operations }}
    {{qtReturn "" .Return}} {{.Name}}({{qtParams "" .Params}}) override;
    QtPromise::QPromise<{{qtReturn "" .Return}}> {{.Name}}Async({{qtParams "" .Params}});
{{- end }}
signals:
    void isReady();
public:
    virtual std::string olinkObjectName() override;
    virtual void olinkOnSignal(std::string name, nlohmann::json args) override;
    virtual void olinkOnPropertyChanged(std::string name, nlohmann::json value) override;
    virtual void olinkOnInit(std::string name, nlohmann::json props, IClientNode *node) override;
    virtual void olinkOnRelease() override;
private:
{{- range .Interface.Properties }}
    {{qtReturn "" .}} m_{{.Name}};
{{- end }}
    bool m_isReady;
    IClientNode *m_node;
    ClientRegistry& m_registry;
};