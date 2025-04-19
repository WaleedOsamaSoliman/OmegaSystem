import {useContext } from "react"
import mainContext   from "@context/main"
import {Dropdown} from "rsuite"
export default function  CreateMenuTab({    name  , label = "غير معروف" , subLabels = {} }) { 
    const minWidth = 200;

    const [mainState , setMainState ] = useContext(mainContext)
    const permessions = mainState.permessions || [];
    
    const filtered = permessions.filter((item)=>{
        return item.class === name  && item.inmenu === 1 
    })

    if (filtered.length === 0 && name !== "app") { 
        return (
            <></>
        )
    }
   
    const generalItems = [
        <Dropdown.Item
        onClick={async () => {
          setMainState((e) => {
            const updated = JSON.parse(JSON.stringify(e));
            updated.modals.logout = true;
            return updated;
          });
        }}
        shortcut="CTRL + C"
      >
        تسجيل الخروج
      </Dropdown.Item>,
      <Dropdown.Item shortcut="CTRL + X"> اغلاق البرنامج</Dropdown.Item>
    ]

    
  

      const subTitles = subLabels

      const subItems = filtered.filter((item)=>{
        return item.subclass !== "";
      })
      const subClasses = [...  new Set(subItems.map((item)=>{return item.subclass}))]


      const subMenus = subClasses.map((classItem)=>{

        let Children =[];
        return (
            <Dropdown.Menu style={{ right: "100%" }} title= {Object.keys(subTitles).includes(classItem)? subTitles[classItem]: classItem}>
       
            {
                    subItems.filter((item)=>{return item.subclass === classItem}).map((item) =>{
                        Children.push (
                            <Dropdown.Item onClick = {()=>{window.open(`#/${item.href}`, "_blank")}}  href = {item.href} shortcut = {item.shortcut} key={item.name}>
                                {item.title}
                            </Dropdown.Item>
                        )
                    })
            
                }
            {
            Children.map((item)=>{return item})
            }
</Dropdown.Menu >
        ) 
    })
    
      
 
   

    if (filtered.length !== 0) { 
        const mainItems = filtered.filter((i)=>{return i.subclass === ""})
        return (
            <Dropdown 
            title = {label}
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
            >

                {mainItems.map((item)=>{
                    return (
                        <Dropdown.Item onClick = {()=>{window.open(`#/${item.href}` , "_blank")}} href = {item.href} shortcut = {item.shortcut} key={item.name}>
                            {item.title}
                        </Dropdown.Item>
                    )
                })}
                {subMenus}
                {name === "general" && generalItems} 
            </Dropdown>
           
        )
    }

    if (name === "app") { 
        return (
            <Dropdown 
            title = "عن البرنامج"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
            >
                 <Dropdown.Item shortcut="⌘ ⇧ E">من نحن</Dropdown.Item>
        <Dropdown.Item shortcut="⌘ ⇧ E"> اصدار البرنامج</Dropdown.Item>
        <Dropdown.Item href = "#contact-us" shortcut="⌘ ⇧ E"> تواصل معنا</Dropdown.Item>
                </Dropdown>
        )
    }
    
   


   return (
    <Dropdown
        title  = {name}
    >
           </Dropdown>
    )
}


