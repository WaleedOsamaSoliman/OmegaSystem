import { Tabs, Button, ButtonGroup, Message, useToaster } from "rsuite";
import PersonalInfoTab from "@components/addUser/PersonalInfo";
import LoginInfoTab from "@components/addUser/loginInfo";
import PermessionsTab from "@components/addUser/permessions.jsx";
import Context from "@context/addUser";
import { useState } from "react";

import Confirm from "@actions/confirmAddUserSubmit";

import preloadObj from "@preload/addUser";

export default function AddUser() {
  const [activeTab, setActiveTab] = useState(1);
  const toaster = useToaster();
  const [preload, setPreload] = useState(
    JSON.parse(JSON.stringify(preloadObj))
  );

  return (
    <Context.Provider value={[preload, setPreload]}>
      <div className="container">
        <span className="page-title">اضافة مستخدم جديد</span>
        <div className="container-inner">
          <Tabs
            appearance="pills"
            activeKey={activeTab}
            onSelect={(e) => {
              setActiveTab(e);
            }}
          >
            <Tabs.Tab eventKey={1} title="البيانات الشخصية">
              <PersonalInfoTab />
            </Tabs.Tab>

            <Tabs.Tab eventKey={2} title="بيانات تسجيل الدخول ">
              <LoginInfoTab />
            </Tabs.Tab>

            <Tabs.Tab eventKey={3} title="الصلاحيات">
              <PermessionsTab />
            </Tabs.Tab>
          </Tabs>
        </div>
        <ButtonGroup>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            style={{ width: 100 }}
            appearance={"primary"}
            color={"red"}
          >
            اعادة
          </Button>
          <Button
            style={{ width: 200 }}
            appearance={"primary"}
            color={"cyan"}
            onClick={() => {
              const confirming = new Confirm(preload, [
                "nickname",
                "phone",
                "username",
                "password",
              ]);
              const res = confirming.confirm();
              if (!res.state) {
                let field;
                switch (res.field) {
                  case "username":
                    field = "إسم المستخدم";
                    setActiveTab(2);
                    console.log("active tab : ", activeTab);

                    break;

                  case "phone":
                    field = "رقم الهاتف";
                    setActiveTab(1);

                    break;
                  case "nickname":
                    field = "الاسم بالكامل";
                    setActiveTab(1);
                    break;

                  case "password":
                    field = "كلمة المرور";
                    setActiveTab(2);

                    break;

                  case "confirmPassword":
                    field = "تأكيد كلمة المرور";
                    setActiveTab(2);

                    break;
                  default:
                    field = res.field;
                    break;
                }
                toaster.push(
                  <Message
                    style={{ width: 400, textAlign: "center" }}
                    type={"error"}
                    closable
                    showIcon
                  >
                    <span>
                      <strong style={{ color: "#252525", fontSize: 18 }}>
                        {field}
                      </strong>{" "}
                      مطلوب !
                    </span>
                  </Message>,
                  {
                    placement: "topCenter",
                    duration: 5000,
                  }
                );
                return false;
              }
              return true;
            }}
          >
            حفظ
          </Button>
        </ButtonGroup>
      </div>
    </Context.Provider>
  );
}
