import Modal from "react-modal"
import {  useContext } from "react"
import MainContext from "@context/main"
import LogOut from  "@components/logout"

Modal.setAppElement("#root");


export default ()=>{
    const [mainData , setMainData] = useContext(MainContext)

    let RenderedComponent ;


    const handleCloseModal = ()=>{
        setMainData((e)=>{
            const updated = JSON.parse(JSON.stringify(e));
            updated.modal = null
            return updated;
        });
    }
    
    if (!mainData.modal) { 
        return null
    }
    switch(mainData.modal) { 
        case "logout" :
            RenderedComponent = <LogOut/>
            break 
        default:
            return null
    }
    return (
        <Modal 
            isOpen ={true} 
        >
            
            {RenderedComponent}
        </Modal>
    )
}