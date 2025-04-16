import { useEffect  , useState , useContext} from "react";
import { CheckTree, SelectPicker } from "rsuite";
import axios from "axios"
import {useToaster , Message} from "rsuite"
import addUserContext from "@context/addUser.js"

const titles = {
  general : "عامة",
  reports : "تقارير" , 
  sales : "مبيعات" ,
  buys : "مشتريات" ,
  inventory : "المخازن" , 
  admin : "صلاحيات المدير" , 
  suppliers : "الموردين" , 
  customers : "العملاء" , 
  "cash-flow" : "حركة النقدية" , 
  employee : "موظفين" , 
  others : "خصائص اضافيه" , 
  app : "عن التطبيق",


}

const  App = () => {
  const [addUserdata , setAddUserdata] = useContext(addUserContext)
  const [checkTreeData , setCheckTreeData]  =  useState([]);
  const [defaultValues , setDefaultValues] = useState([])
  const [permessions , setPermessions ] = useState([])
  const [role , setRole ] =useState("");
  const toaster = useToaster()



  // get all permessions from database while mounting the component for the first time
  useEffect(async()=>{
   
    // 
    await axios.post("/api/v1/permessions/get" , {type:"*"})
    .then((res)=>{
      
      switch (res.data.state) { 
        case true : 


          const data = res.data.permessions || []
          setPermessions(data)
          const types = []
          // isolate data depending on the class property to types [classes]

          // get all classes 
         data.map((permession)=>{
            if (! types.includes(permession.class)) { 
              types.push(permession.class)
            }
          })


          // create data array protoype
          
          const prototype = {}
          types.map((type)=>{
            // prototype[type] = {label : type , value :`all.${type}.permessions`  , children : []}
            prototype[type] = {label : type , value :`?`  , children : []}

          })


          data.map((permession)=>{

            prototype[permession.class].children.push({
              label : permession.title , 
              value : permession.name ,
            })
          })



        
        
         Object.keys(prototype).map((key)=>{

          prototype[key].label = titles[key];
         })
        //  console.log(">> prototype : " , prototype)
         setCheckTreeData((e)=>{return Object.values(prototype)})

     


        //  console.log("check tree Data :" , checkTreeData)
        break;
        case false : 
        toaster.push(<Message type = "error" showIcon closable>
          خطأ في الخادم الخلفي : {res.data.error}
        </Message> , {placement : "topCenter" , duration : 5000})
        break
      }
    })
    .catch((err)=>{
     
      toaster.push(<Message type = "error" showIcon closable>
        خطأ في الخادم أثناء عملية جلب الصلاحيات من قاعدة البيانات , من فضلك قم بإعادة تشغيل البرنامج وحاول مجددا
        <br/>
        الخطأ :{err.toString()}
      </Message> , {placement : "topCenter" , duration : 5000})
    })
  } , [])

    // change the default Permessions ACcording to the type of the user [normal , supervisor or admin]
    useEffect(()=>{

      let values = []
      if (role === "normal") { 
  
        values = permessions.filter((permession)=>{
          return permession.isNormalUser === 1
        }).map((permession)=>{
          return permession.name
        })
        
      }else if (role == "supervisor") { 
        values = permessions.filter((permession)=>{
          return permession.isSuperVisor === 1
        }).map((permession)=>{
          return permession.name
        })
  
      }else if (role === "admin")  { 
        values = permessions.filter((permession)=>{
          return permession.isAdmin === 1
        }).map((permession)=>{
          return permession.name
        })
      }
      setDefaultValues(values)
      setAddUserdata((i)=>{

        const updated = JSON.parse(JSON.stringify(i))
        updated.permessions = values ;
        return  updated;
      })
    }, [role])
    
  return (
    <>
    <span>نوع الحساب : </span>
    <SelectPicker
      placeholder="اختار نوع الحساب"
      value = {role}
      data={[
        { label: "عادي", value: "normal" },
        {
          label: "مشرف",
          value: "supervisor",
        },
        {
          label: "مدير",
          value: "admin",
        },
      ]}
      onChange = {(e)=>{
      //  edit Default Values depending on the selected role 
      
        setRole(e)
      }}
      searchable={false}
    />
    <br />
    <div style = {{width : "100%" , direction :"ltr",  height : "100%" , backgroundColor : "#fff" , borderRadius : 5 ,flex:1 }}>
    <br/>
    <CheckTree uncheckableItemValues = {['?']}value = {[...defaultValues]} defaultExpandAll = {true} showIndentLine = {true} showIcon = {true} data={checkTreeData} searchable = {true} onChange = {(e)=>{
      setDefaultValues(e)
      setAddUserdata((i)=>{

        const updated = JSON.parse(JSON.stringify(i))
        updated.permessions = e ;
        return  updated;
      })
     
    }} />
    </div>
    
  </>
  )

}




  export default App