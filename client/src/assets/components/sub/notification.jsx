import {Message    , Notification } from "rsuite"
export default function Component ({message , type = 'success' ,  header = "", alignItems = "flex-start",category ="message"   ,showIcon = true , closable = true }){
    if  (category === "message") {
       return    (<Message type={type} closable= {closable} showIcon = {showIcon}>
        <span>
          <strong style={{ color: "#252525", fontSize: 18 }}>{message}</strong>
        </span>
      </Message> )
    }else { 
        return (
          <Notification
                type = {type}
                closable = {closable}
                showIcon = {showIcon}   
                header = {header}
                alignItems = {alignItems}
                
            >
                {message}
            </Notification> 
        )
    }
   
}