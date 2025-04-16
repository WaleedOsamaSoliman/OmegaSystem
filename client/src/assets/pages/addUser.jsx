import { Tabs , Button, ButtonGroup, Message, useToaster } from "rsuite";
import PersonalInfoTab from "@components/addUser/PersonalInfo";
import LoginInfoTab from "@components/addUser/loginInfo";
import PermessionsTab from "@components/addUser/permessions.jsx";
import Context from "@context/addUser";
import { useState } from "react";
import Notification from "@components/sub/notification";

import Confirm from "@actions/confirmAddUserSubmit";

import preloadObj from "@preload/addUser";
import axios from "axios";

export default function AddUser() {
  const [activeTab, setActiveTab] = useState(1);
  const toaster = useToaster();
  const [disableSaveBtn , setDisableSaveBtn] = useState(false)
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
            style = {{height : "100%" , flex:1}}
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

            <Tabs.Tab eventKey={3} title="الصلاحيات" style = {{height : "100%"}}>
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
            disabled ={disableSaveBtn}
            onClick={() => {

              setDisableSaveBtn(true)

              setTimeout(()=>{
                setDisableSaveBtn(false)

              },1000)
              console.log(">>pre load " , preload)
              const confirming = new Confirm(preload, [
                "nickname",
                "phone",
                "username",
                "password",
                "confirm-password",
                "permessions"
              ]);
              const res = confirming.confirm();
              if (!res.state) { 
                if (res.reason === "field.required") { 
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

                    case "permessions" : 
                    field = "الصلاحيات"
                    setActiveTab(3);
                    break

                  
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
                  )
                }else if (res.reason === "password.not.match")  { 
                  toaster.push(
                    <Message
                      style={{ width: 400, textAlign: "center" }}
                      type={"error"}
                      closable
                      showIcon
                    >
                      <span>
                        <strong style={{ color: "#252525", fontSize: 18 }}>
                          كلمة المرور
                        </strong>{" "}
                        غير مطابقة !
                      </span>
                    </Message>,
                    {
                      placement: "topCenter",
                      duration: 5000,
                    }
                  )
                }else { 
                  // add more false conditions
                  return false 
                }
              }else { 
                axios.post("/api/v1/account/add" , preload)
                .then((res)=>{
                  console.log(res)
                  if (! res.data.state)  { 
                    let errMessage ;
                    switch (res.data.reason) { 
                      case "username.exists" :
                        console.log("Hela");
                        Notification({
                          message : "اسم المستخدم موجود ب الفعل" , 
                          type : "error"
                        })  
                        break;
                        default :
                        
                          errMessage =  res.data.reason;
                          console.log("Hela");
                          Notification({
                            message : errMessage , 
                            type : "error"
                          })
                          break;

                    }
                  }
                  if (res.data.state) { 
                    const message =  <Message type="success"  showIcon header="تمت العملية بنجاح">
                    <p>
                     تم إنشــاء المستخدم بنـجــاح
                    </p>
                   
                  </Message>
                  toaster.push(message , {placement : "topCenter" , duration : 10000})
                  }else { 
                    const message =  <Message type="warning" bordered showIcon>
                    <strong>تحذير!</strong> You can use the `Message` component to display a warning message.
                  </Message>
                  }
                  toaster.push(message , {placement : "topCenter" , duration : 5000})

                })
                .catch ((err)=>{
                 const errMessage =   <Message showIcon type="error">
                 <strong>خطأ أثناء ارسال الطلب الي  الخادم الخلفي : !</strong> {err.toString()}
               </Message>
               toaster.push(errMessage , {placement : "topCenter" , duration : 5000})
                })
              }
             
            }}
          >
            حفظ
          </Button>
        </ButtonGroup>
      </div>
    </Context.Provider>
  );
}
