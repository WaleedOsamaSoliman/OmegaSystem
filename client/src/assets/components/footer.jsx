import LiveDateTime from "@components/sub/liveDateTime.jsx";
import { Divider } from "rsuite";
import mainContext from "@context/main";
import { useContext } from "react";
export default function Footer() {
  const [context] = useContext(mainContext);
  console.log(context);
  return (
    <>
      <LiveDateTime />
      <Divider vertical />
      <span className="organization">
        المؤسسه {":"} {context?.organization?.name || "غير معروف"}
      </span>
      <Divider vertical />
      <span className="branch">
        الفرع : {context?.organization?.branch || "غير معروف"}
      </span>
      <Divider vertical />

      <span className="localhost">سيرفر محلي ( اتصال بدون انترنت )</span>
      <Divider vertical />
      <span className="username">
        المستخدم الحالي :{" "}
        <span className="name">{context?.user?.nickname || "غير معروف"}</span>
      </span>
      <Divider vertical />
    </>
  );
}
