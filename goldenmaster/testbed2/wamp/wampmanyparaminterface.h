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
#pragma once

#include <QtCore>
#include <QtPromise>

#include "../api/api.h"
#include "../shared/wampclient.h"

using namespace ApiGear;

class WampManyParamInterface : public AbstractManyParamInterface
{
    Q_OBJECT
public:
    explicit WampManyParamInterface(QObject *parent = nullptr);
    virtual ~WampManyParamInterface() override;

    void applyState(const json& fields);
    int prop1() const override;
    void setProp1(int prop1) override;
    void setProp1Local(int prop1);
    int prop2() const override;
    void setProp2(int prop2) override;
    void setProp2Local(int prop2);
    int prop3() const override;
    void setProp3(int prop3) override;
    void setProp3Local(int prop3);
    int prop4() const override;
    void setProp4(int prop4) override;
    void setProp4Local(int prop4);
    int func1(int param1) override;
    QtPromise::QPromise<int> func1Async(int param1);
    int func2(int param1, int param2) override;
    QtPromise::QPromise<int> func2Async(int param1, int param2);
    int func3(int param1, int param2, int param3) override;
    QtPromise::QPromise<int> func3Async(int param1, int param2, int param3);
    int func4(int param1, int param2, int param3, int param4) override;
    QtPromise::QPromise<int> func4Async(int param1, int param2, int param3, int param4);
void notifySig1(WAMP::EventArg arg);
void notifySig2(WAMP::EventArg arg);
void notifySig3(WAMP::EventArg arg);
void notifySig4(WAMP::EventArg arg);

private:
    int m_prop1;
    int m_prop2;
    int m_prop3;
    int m_prop4;
};
