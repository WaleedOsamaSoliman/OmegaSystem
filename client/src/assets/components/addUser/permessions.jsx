import { CheckTree, SelectPicker } from "rsuite";

const data = [
  {
    label: "تقارير",
    value: "1",
    children: [
      {
        label: "اظهار فواتير البيع خلال فتره",
        value: "view.sales.report.period",
      },
      {
        label: "Node 1-2",
        value: "1-2",
      },
    ],
  },
  {
    label: "مبيعات",
    value: "2",
    children: [
      {
        label: "Node 2-1",
        value: "2-1",
      },
      {
        label: "Node 2-2",
        value: "2-2",
      },
    ],
  },
];

const App = () => (
  <>
    <span>نوع الحساب : </span>
    <SelectPicker
      placeholder="اختار نوع الحساب"
      data={[
        { label: "عادي", value: "normal" },
        {
          label: "مشرف",
          value: "supervisor",
        },
        {
          label: "مدير",
          value: "admin",
        },
      ]}
      searchable={false}
    />
    <br />
    <CheckTree
      style={{ direction: "rtl" }}
      data={data}
      uncheckableItemValues={["1", "2", "2-1-1", "2-1-2"]}
      defaultExpandAll
    />
  </>
);

export default App;
