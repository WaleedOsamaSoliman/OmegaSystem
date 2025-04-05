import { Nav, Dropdown } from "rsuite";

export default function Menu() {
  const minWidth = 200;
  const Navbar = () => {
    return (
      <>
        <div id="header">
          <Dropdown
            title="عامة"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Menu style={{ right: "100%" }} title="المستخدم الحالي">
              <Dropdown.Item shortcut="⌘ ⇧ S"> بيانات المستخدم</Dropdown.Item>
              <Dropdown.Item shortcut="⌘ P"> صلاحيات المستخدم</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item shortcut="CTRL + A">كشكول النواقص</Dropdown.Item>
            <Dropdown.Item shortcut="CTRL + C">تسجيل الخروج</Dropdown.Item>
            <Dropdown.Item shortcut="CTRL + X"> اغلاق البرنامج</Dropdown.Item>
          </Dropdown>
          <Dropdown
            title="صلاحيات المدير"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Menu style={{ right: "100%" }} title="المستخدمين">
              <Dropdown.Item shortcut="⌘ ⇧ S"> قائمة المستخدمين</Dropdown.Item>
              <Dropdown.Item shortcut="⌘ P">تعديل بيانات مستخدم</Dropdown.Item>
              <Dropdown.Item shortcut="⌘ ⇧ S">إضـافه مستخدم جديد</Dropdown.Item>
              <Dropdown.Item shortcut="⌘ ,">الغاء تفعيل مستخدم</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item shortcut="CTRL + SHIFT + U">
              {" "}
              تحديث البرنامج
            </Dropdown.Item>

            <Dropdown.Item shortcut="⌘ N">
              {" "}
              نسخ احتياطي لقاعدة البيانات
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            title="المخازن"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E"> جرد وضبط كميات صنف</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تعديل تاريخ صلاحية صنف
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">تعديل بيانات صنف</Dropdown.Item>
          </Dropdown>
          <Dropdown
            title="مبيعات"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ S">فاتورة مبيعات جديده</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ P">مرتجع مبيعات من فاتورة</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              اقفال الفواتير المعلقه
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="مشتريات"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ S">فاتورة شراء جديده</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ P">مرتجع شراء من فاتورة</Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="تقارير"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ S">تقرير مبيعات من فتره</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ P">
              تقرير مرتجع مبيعات من فتره
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير توريدات من فتره
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير مصروفات من فتره
            </Dropdown.Item>

            <Dropdown.Item shortcut="⌘ P">تقرير تسليم الدرج</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير حضور وانصراف الموظفين
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">تقرير حركة بيع صنف</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير مبيعات موظف خلال فتره
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير خصومات خلال فتره{" "}
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">تقرير ربح المؤسسه</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              تقرير أصناف منتهية الصلاحيه من فتره
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="العملاء"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E"> قائمة العملاء </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> إضافه عميل</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> تعديل بيانات عميل</Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="الموردين"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E"> قائمة الموردين</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">فواتير شراء مورد</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> أصناف شراء من مورد</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> حساب مورد</Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="حركة نقديه"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E"> توريد نقديه</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> صرف نقديه</Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="الموظفين"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E">تسجيل حضور</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> تسجيل انصراف</Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="خصائص إضافيه"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E">
              إقتراح الطلب التلقائي
            </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">بحث عن أفضل سعر </Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E">
              مقارنة اصناف شركات ومخازن
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="عن البرنامج"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Item shortcut="⌘ ⇧ E">من نحن</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> اصدار البرنامج</Dropdown.Item>
            <Dropdown.Item shortcut="⌘ ⇧ E"> تواصل معنا</Dropdown.Item>
          </Dropdown>
        </div>
      </>
    );
  };
  return <Navbar />;
}
