import {Message    , Notification } from "rsuite"
export default function Component ({message , type = 'success' , bordered = true ,showIcon = true , closable = true }){
   
  return (
    <Message type={type} closable= {closable} showIcon = {showIcon} bordered = {bordered}>
      <strong>{message}</strong>
    </Message>
  )
   
}