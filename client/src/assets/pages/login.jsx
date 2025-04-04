import "@css/login.css";
import { Form, ButtonToolbar, Button, Schema, Loader } from "rsuite";
import { useState } from "react";
import axios from "axios";

const { StringType } = Schema.Types;
const model = Schema.Model({
  username: StringType().isRequired("ادخل اسم المستخدم"),
  password: StringType().isRequired("ادخل كلمة المرور"),
});

const App = function () {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container">
      {loading ? (
        <Loader
          style={{ zIndex: 99 }}
          backdrop
          center
          size={"lg"}
          content="جاري التحقق ..."
          vertical
        />
      ) : null}

      <h2>تسجيل الدخول</h2>
      <span>أوميجا لإدارة الصيدليات</span>
      <Form
        model={model}
        onSubmit={async (e) => {
          setDisableSubmit(true);
          setLoading(true);
          const res = await axios.post("/api/v1/account/login", e);
          console.log(res.data);
          switch (res.data.state) {
            case true:
              console.log("Logged in succesffuly");
              break;
            case false:
              console.log("Incorrect Credentials");
              break;
            default:
              console.log("Error !!! ");
              break;
          }
          setLoading(false);
          setTimeout(() => {
            setDisableSubmit(false);
          }, 1000);
        }}
      >
        <Form.Group controlId="username">
          <Form.ControlLabel>اسم المستخدم</Form.ControlLabel>
          <Form.Control name="username" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.ControlLabel>كلمة المرور</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button
              disabled={disableSubmit}
              type={"submit"}
              appearance="primary"
              style={{ flex: 1 }}
            >
              تسجيل الدخول
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default App;
