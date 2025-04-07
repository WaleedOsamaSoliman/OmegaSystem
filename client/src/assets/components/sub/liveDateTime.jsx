import { useState, useEffect } from "react";
export default function Component() {
  const [liveDate, setLiveDate] = useState(new Date());

  useEffect(() => {
    const r = setInterval(() => {
      setLiveDate(new Date());
    }, 1000);

    return () => {
      clearInterval(r);
    };
  }, []);

  return (
    <span className="date">
      {liveDate.toLocaleString("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}{" "}
    </span>
  );
}
