import {
  Form,
  SelectPicker,
  TagInput,
  Button,
  ButtonGroup,
  Schema,
} from "rsuite";

import { useContext } from "react";
import context from "@context/addUser";
import preload from "@preload/addUser";

export default function PersonalInfoTab() {
  const [info, setInfo] = useContext(context);

  return (
    <Form layout="inline">
      <Form.Group controlId="name">
        <Form.ControlLabel>الاسم بالكامل : </Form.ControlLabel>
        <Form.Control
          name="name"
          style={{ width: 160 }}
          onChange={(e) => {
            setInfo({ ...info, nickname: e });
          }}
        />
        <Form.HelpText tooltip>
          من فضلك ادخل الاسم الثلاثي باللغه العربيه
        </Form.HelpText>
        <Form.HelpText>مطلوب</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.ControlLabel>رقم الهاتف : </Form.ControlLabel>
        <Form.Control
          name="phone"
          type={"tel"}
          autoComplete="off"
          style={{ width: 160 }}
          onChange={(e) => {
            setInfo({ ...info, phone: e });
          }}
        />
        <Form.HelpText>مطلوب</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.ControlLabel> النوع : </Form.ControlLabel>
        <SelectPicker
          onClean={() => {
            setInfo({ ...info, gender: preload.gender });
          }}
          onSelect={(e) => {
            setInfo(() => {
              setInfo({ ...info, gender: e });
            });
          }}
          data={[
            { label: "ذكر", value: "m" },
            { label: "أنثي", value: "f" },
          ]}
          searchable={false}
          placeholder="اختار "
        />
      </Form.Group>

      <br />
      <Form.Group controlId="birthdate">
        <Form.ControlLabel>تاريخ الميلاد : </Form.ControlLabel>
        <Form.Control
          name="birthdate"
          type={"Date"}
          autoComplete="off"
          style={{ width: 200 }}
          onChange={(e) => {
            e === "" ? (e = preload.birthDate) : null;
            setInfo({ ...info, birthDate: e });
          }}
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.ControlLabel> العناوين المتاحه : </Form.ControlLabel>
        <TagInput
          style={{ width: 250 }}
          size="md"
          onChange={(e) => {
            setInfo({ ...info, address: e });
          }}
        />
        <Form.HelpText tooltip>
          من فضلك أكتب العنوان ثم إضغط إنتر وقم ب الكتابة مجددا اذا كنت تريد
          اضافه اكثر من عنوان
        </Form.HelpText>
      </Form.Group>

      <br />

      <Form.Group controlId="personalId">
        <Form.ControlLabel>الرقم القومي : </Form.ControlLabel>
        <Form.Control
          name="personalId"
          type={"tel"}
          autoComplete="off"
          style={{ width: 200 }}
        />
      </Form.Group>

      <Form.Group controlId="graduation">
        <Form.ControlLabel>المؤهل : </Form.ControlLabel>
        <Form.Control
          name="graduation"
          type={"text"}
          autoComplete="off"
          style={{ width: 250 }}
          onChange={(e) => {
            setInfo({ ...info, graduation: e });
          }}
        />
      </Form.Group>

      <Form.Group controlId="social-state">
        <Form.ControlLabel>الحاله الإجتماعيه : </Form.ControlLabel>
        <SelectPicker
          data={[
            { label: "أعزب", value: "single" },
            { label: "متزوج", value: "married" },
          ]}
          searchable={false}
          placeholder={"اختار"}
          onClean={() => {
            setInfo({ ...info, socialState: preload.socialState });
          }}
          onSelect={(e) => {
            console.log(e);
            setInfo({ ...info, socialState: e });
          }}
        />
      </Form.Group>

      <br />
    </Form>
  );
}
