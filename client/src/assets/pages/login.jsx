import "@css/login.css";
import { Form, ButtonToolbar, Button, Schema, Loader } from "rsuite";
import { useState } from "react";
const { StringType } = Schema.Types;
const model = Schema.Model({
  username: StringType().isRequired("ادخل اسم المستخدم"),
  password: StringType().isRequired("ادخل كلمة المرور"),
});

const App = function () {
  const [credentials, setCredentials] = useState({});
  const [loading, setLoading] = useState(true);
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
        onSubmit={(e) => {
          setCredentials(e);
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
            <Button type={"submit"} appearance="primary" style={{ flex: 1 }}>
              Submit
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default App;
