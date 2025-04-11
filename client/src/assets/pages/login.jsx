import "@css/login.css";
import { Form, ButtonToolbar, Button, Schema, Loader } from "rsuite";
import { useState, useContext } from "react";
import axios from "axios";
import { useToaster, Message } from "rsuite";

import mainContext from "@context/main";

const { StringType } = Schema.Types;
const model = Schema.Model({
  username: StringType().isRequired("ادخل اسم المستخدم"),
  password: StringType().isRequired("ادخل كلمة المرور"),
});

const App = function () {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const toaster = useToaster();
  const [, setMainPreload] = useContext(mainContext);

  return (
    <div className="container" id="container">
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
          let messageBox;

          setDisableSubmit(true);
          setLoading(true);
          axios
            .post("/api/v1/account/login", e)
            .then((res) => {
              console.log(res.data);
              switch (res.data.state) {
                case true:
                  messageBox = (
                    <Message showIcon type={"success"} closable>
                      <strong>
                        تم تسجيل الدخول بنجــاح , لحظات و سيتم تحويلك !
                      </strong>
                    </Message>
                  );

                  console.log("Logged in succesffuly");

                  //  save the login data in the main COntext to use this info later in any part of applcation
                  setMainPreload((e) => {
                    const updated = JSON.parse(JSON.stringify(e));
                    updated.is_logged = true;
                    updated.user = res.data.user;
                    updated.organization = res.data.organizationInfo;
                    updated.permessions = res.data.permessions;
                    return updated;
                  });

                  break;
                case false:
                  if (res.data.reason === "username.not.found") {
                    messageBox = (
                      <Message showIcon type={"warning"} closable>
                        <strong>لا يوجد مستخدم بهذا الاسم</strong>
                      </Message>
                    );
                  } else if (res.data.reason === "password.wrong") {
                    messageBox = (
                      <Message showIcon type={"warning"} closable>
                        <strong>كلمة المرور خاطئة</strong>
                      </Message>
                    );
                  } else if (res.data.reason === "already.logged") {
                    messageBox = (
                      <Message showIcon type={"warning"} closable>
                        <strong>
                          لقد قمت بتسجيل الدخول ب الفعل سيتم تحويلك الأن{" "}
                        </strong>
                      </Message>
                    );
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  } else {
                    messageBox = (
                      <Message showIcon type={"warning"} closable>
                        <strong>
                          خطأ غير معروف في الخادم الخلفي اثناء تسجيل الدخول
                        </strong>
                      </Message>
                    );
                  }

                  console.log("Incorrect Credentials");
                  break;

                default:
                  console.log("Error !!! ");
                  messageBox = (
                    <Message showIcon type={"error"} closable>
                      <strong>
                        خطأ أثناء تنفيذ الطلب في قاعدة البيانات . من فضلك تأكد
                        من الاتصال بقاعدة البيانات وحاول لاحقا
                      </strong>
                    </Message>
                  );
                  break;
              }
            })
            .catch((err) => {
              console.log(err);
              messageBox = (
                <Message type="error" showIcon closable>
                  <strong>خطأ اثناء ارسال الطلب الي قاعدة البيانات</strong>
                </Message>
              );
            })
            .finally(() => {
              setLoading(false);
              setTimeout(() => {
                setDisableSubmit(false);
              }, 1000);
              toaster.push(messageBox, {
                placement: "topCenter",
                duration: 5000,
              });
            });
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
