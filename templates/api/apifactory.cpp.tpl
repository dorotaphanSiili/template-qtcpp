#include "apifactory.h"
#include "simu.h"


ApiFactoryInterface *ApiFactory::s_instance(nullptr);

ApiFactory::ApiFactory(QObject *parent)
    : QObject(parent)
{
}

void ApiFactory::set(ApiFactoryInterface *instance)
{
    if(s_instance) {
        qFatal("Can not set factory when factory already set");
    }
    s_instance = instance;
}

ApiFactoryInterface * ApiFactory::get()
{
    if(s_instance) {
        return s_instance;
    }
    s_instance = new ApiFactory(QCoreApplication::instance());
    return s_instance;
}

{{- range .Module.Interfaces }}

Abstract{{.Name}}* ApiFactory::create{{Camel .Name}}(QObject *parent) 
{
    return new Simulation{{.Name}}(parent);
};
{{- end }}