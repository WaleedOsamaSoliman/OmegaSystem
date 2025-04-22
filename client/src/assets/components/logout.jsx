import { Modal, Button, Text, useToaster, Message } from "rsuite";
import { useContext } from "react";
import mainContext from "../context/main";
import logout from "../actions/logout";
const LogOut = () => {
  const [, setMainData] = useContext(mainContext);
  const toaster = useToaster();
  const handleClose = () => {
    setMainData((e) => {
      const updated = JSON.parse(JSON.stringify(e));
      updated.modal = null;
      return updated;
    });
  };
  return (
    
    <Modal
      style={{ direction: "rtl" }}
      backdrop={true}
      keyboard={true}
      open={open}
      onClose={handleClose}
    >
      <Modal.Header>
        <Modal.Title>تسجيل الخروج</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Text>هل أنت متأكد من انك تريد تسجيل الخروج من البرنامج ؟</Text>
      </Modal.Body>
      <Modal.Footer
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          style={{ width: 60 }}
          onClick={async () => {
            const r = await logout();
            if (r.state) {
              window.location.reload();
            } else {
              const reason = r.reason;
              if (reason === "server.error") {
                toaster.push(
                  <Message showIcon type="error">
                    <strong>مشكلة في الخادم الخلفي أثناء تسجيل الخروج </strong>
                  </Message>,

                  { placement: "topCenter", duration: 3000 }
                );
              } else {
                toaster.push(
                  <Message showIcon type="error">
                    <strong>مشكلة في الخادم الأمامي اثناء تسجيل الخروج</strong>
                  </Message>,

                  { placement: "topCenter", duration: 3000 }
                );
              }
            }
          }}
          appearance="primary"
          color={"red"}
        >
          نعم
        </Button>
        <Button
          style={{ width: 50 }}
          onClick={handleClose}
          appearance="primary"
        >
          لا
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default LogOut;
