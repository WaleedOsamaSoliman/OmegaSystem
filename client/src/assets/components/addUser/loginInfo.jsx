import { Form } from "rsuite";
import { useContext } from "react";
import context from "@context/addUser";
export default function LoginInfo() {
  const [data, setData] = useContext(context);
  return (
    <Form layout="inline">
      <Form.Group controlId="username">
        <Form.ControlLabel>اسم المستخدم : </Form.ControlLabel>
        <Form.Control
          name="username"
          type={"text"}
          autoComplete="off"
          style={{ width: 200 }}
          onChange={(e) => {
            setData({ ...data, username: e });
          }}
        />
        <Form.HelpText>مطلوب</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.ControlLabel>كلمة المرور : </Form.ControlLabel>
        <Form.Control
          name="password"
          type={"password"}
          autoComplete="off"
          style={{ width: 200 }}
          placeholder={"*******"}
          onChange={(e) => {
            setData({ ...data, password: e });
          }}
        />
        <Form.HelpText tooltip>
          كلمة السر الافتراضية هي : {data.password}
        </Form.HelpText>
        <Form.HelpText>مطلوب</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="confirm-password">
        <Form.ControlLabel> تأكيد كلمة المرور : </Form.ControlLabel>
        <Form.Control
          name="confirm-password"
          type={"password"}
          autoComplete="off"
          style={{ width: 200 }}
          placeholder={"*******"}
          onChange={(e) => {
            setData({ ...data, confirmPassword: e });
          }}
        />
        <Form.HelpText>مطلوب</Form.HelpText>
      </Form.Group>
    </Form>
  );
}
