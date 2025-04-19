import { Tabs , Button, ButtonGroup, Message, useToaster } from "rsuite";
import {HashRouter , useNavigate} from "react-router"
import PersonalInfoTab from "@components/addUser/PersonalInfo";
import LoginInfoTab from "@components/addUser/loginInfo";
import PermessionsTab from "@components/addUser/permessions.jsx";
import Context from "@context/addUser";
import { useState } from "react";
import Confirm from "@actions/confirmAddUserSubmit";
import preloadObj from "@preload/addUser";
import axios from "axios";

export default function AddUser() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const toaster = useToaster();  
  const [preload, setPreload] = useState(
    JSON.parse(JSON.stringify(preloadObj))
  );
  const messageOptions = {duration : 5000 , placement : "topCenter"}

  const [disableAction , setDisableAction] = useState(false)


  const addUserHandle = ()=>{
    setDisableAction(true)
    const i  = setTimeout(()=>{
      setDisableAction(false)
    } , 2000)


    const confirming = new Confirm(preload, [
      "nickname",
      "phone",
      "username",
      "password",
      "confirm-password",
      "permessions"
    ]);
    const res = confirming.confirm();
    if (!res.state && res.reason === "field.required") { 
          let field;
          let switchToTab = 0
          
        switch (res.field) {
          case "username":
            field = "إسم المستخدم";
            switchToTab = 2
            break;
          case "phone":
            field = "رقم الهاتف";
            switchToTab=1
            break;
            case  "password" : 
            field = "كلمة المرور";
            switchToTab=2
            break;
            case "confirm-password" : 
            field = "تأكيد كلمة المرور";
            switchToTab=2
            break;

          case "nickname":
            field = "الاسم بالكامل";
            switchToTab=1
            break;

          case "permessions" : 
          field = "الصلاحيات"
          switchToTab=3
          break

          default:
            field = res.field;
            switchToTab = 1
            break;
        }
         setActiveTab(switchToTab)
        
          return toaster.push(<Message bordered showIcon  closable type = "error"><strong>{field} مطلوب</strong></Message> , messageOptions)
           
      }
    if (!res.state && res.reason === "password.not.match")  { 
      return toaster.push(<Message bordered showIcon  closable type = "error"><strong>كلمة المرور غير متطابقة</strong></Message>, messageOptions)
    }

    

    axios.post("/api/v1/account/add" , preload)
    .then((res)=>{
      console.log(res.data)
      if (! res.data.state && res.data.reason === "username.exists") return toaster.push(<Message bordered showIcon  closable type = "error"><strong>اسم المستخدم موجود ب الفعل</strong></Message>  , messageOptions)
      if (! res.data.state && res.data.reason === "nickname.exists") return toaster.push(<Message bordered showIcon  closable type = "error"><strong>الاسم بالكامل موجود ب الفعل</strong></Message> , messageOptions )
      if (res.data.state) {
        // reset the preload
        toaster.push(<Message bordered showIcon   type = "success"><strong>تم إنشــاء المستخدم بنجـــاح</strong></Message> , messageOptions)
        navigate("/home" , {replace : true})
        setPreload(JSON.parse(JSON.stringify(preloadObj)))
        setActiveTab(1)
        return
      }

      return   toaster.push(<Message bordered showIcon  closable type = "error"><strong>{res.data.reason} </strong></Message> , messageOptions) 


    })
    .catch ((err)=>{
        return toaster.push(<Message bordered showIcon  closable type = "error"><strong>{err.toString()} </strong></Message> , messageOptions)
      })
      .finally(()=>{
      })
    
   
  }


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
            onClick={()=>{window.location.reload()}}
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
            disabled ={disableAction}
            onClick={()=>{addUserHandle()}}>
            حفظ
          </Button>
        </ButtonGroup>
      </div>
    </Context.Provider>
  );
}
