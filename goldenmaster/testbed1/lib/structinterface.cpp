/**
NO TITLE
Copyright (C) 2020 ApiGear UG

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


#include "structinterface.h"

#include <QtQml>

#include "../api/agent.h"

StructInterface::StructInterface(QObject *parent)
    : AbstractStructInterface(parent)
    , m_propBool(StructBool())
    , m_propInt(StructInt())
    , m_propFloat(StructFloat())
    , m_propString(StructString())
{
}

StructInterface::~StructInterface()
{
}

void StructInterface::setPropBool(const StructBool& propBool)
{
    if (m_propBool != propBool) {
        m_propBool = propBool;
        emit propBoolChanged(propBool);
        StructInterfaceAgent::trace_state(this);
    }
}

StructBool StructInterface::propBool() const
{
    return m_propBool;
}

void StructInterface::setPropInt(const StructInt& propInt)
{
    if (m_propInt != propInt) {
        m_propInt = propInt;
        emit propIntChanged(propInt);
        StructInterfaceAgent::trace_state(this);
    }
}

StructInt StructInterface::propInt() const
{
    return m_propInt;
}

void StructInterface::setPropFloat(const StructFloat& propFloat)
{
    if (m_propFloat != propFloat) {
        m_propFloat = propFloat;
        emit propFloatChanged(propFloat);
        StructInterfaceAgent::trace_state(this);
    }
}

StructFloat StructInterface::propFloat() const
{
    return m_propFloat;
}

void StructInterface::setPropString(const StructString& propString)
{
    if (m_propString != propString) {
        m_propString = propString;
        emit propStringChanged(propString);
        StructInterfaceAgent::trace_state(this);
    }
}

StructString StructInterface::propString() const
{
    return m_propString;
}

StructBool StructInterface::funcBool(const StructBool& paramBool)
{
    qDebug() << Q_FUNC_INFO;
    StructInterfaceAgent::trace_funcBool(this, paramBool);
    return StructBool();
}

StructBool StructInterface::funcInt(const StructInt& paramInt)
{
    qDebug() << Q_FUNC_INFO;
    StructInterfaceAgent::trace_funcInt(this, paramInt);
    return StructBool();
}

StructFloat StructInterface::funcFloat(const StructFloat& paramFloat)
{
    qDebug() << Q_FUNC_INFO;
    StructInterfaceAgent::trace_funcFloat(this, paramFloat);
    return StructFloat();
}

StructString StructInterface::funcString(const StructString& paramString)
{
    qDebug() << Q_FUNC_INFO;
    StructInterfaceAgent::trace_funcString(this, paramString);
    return StructString();
}
