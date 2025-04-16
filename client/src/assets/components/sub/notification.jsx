import {Message    , Notification,  useToaster } from "rsuite"
export default function Component ({message , type = 'success' ,  header = "", alignItems = "flex-start",category ="message"  , placement = "topCenter" , duration = 5000 ,showIcon = true , closable = true }){
    const toaster = useToaster()
    if  (category === "message") {
        return toaster.push(<Message type={type} closable showIcon>
        <span>
          <strong style={{ color: "#252525", fontSize: 18 }}>{message}</strong>
        </span>
      </Message> , {placement  , duration })
    }else { 
        return (
            toaster.push(<Notification
                type = {type}
                closable = {closable}
                showIcon = {showIcon}   
                header = {header}
                alignItems = {alignItems}
                
            >
                {message}
            </Notification> , {placement  , duration })
        )
    }
   
}