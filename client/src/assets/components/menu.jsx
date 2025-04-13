import CreateMenuTab from "./sub/createMenuTab"
export default function Menu() {



  // create the static main menu items 
  

  const Navbar = () => {
    return (
      <>
        <div id="header">
          <CreateMenuTab name = "general" label = "عامة" subLabels ={{"current.user"  : "المستخدم الحالي"}}/>
          <CreateMenuTab name = "admin" label = "صلاحيات المدير" subLabels  = {{users : "المستخدمين" , app : "التطبيق"}}/>
          <CreateMenuTab name = "inventory" label = "المخازن" />
          <CreateMenuTab name = "sales"  label = "مبيعات" />
          <CreateMenuTab name = "buys" label = "مشتريات" />
          <CreateMenuTab name = "reports" label = "تقارير" />
          <CreateMenuTab name = "customers" label = "عملاء" />
          <CreateMenuTab name = "suppliers" label = "موردين" />
          <CreateMenuTab name = "cash-flow" label = "حركة النقدية" />
          <CreateMenuTab name = "employee" label = "موظفين" />
          <CreateMenuTab name = "others" label = "خصائص اضافيه" />
          <CreateMenuTab name = "app" label = "عن التطبيق"/>
        </div>
      </>
    );
  };
  return <Navbar />;
}
