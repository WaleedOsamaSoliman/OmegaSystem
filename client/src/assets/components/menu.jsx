import { Nav, Dropdown } from "rsuite";
import { useContext } from "react";
import mainContext from "../context/main";
export default function Menu() {
  const [mainState, setMainContext] = useContext(mainContext);
  const userPermessions =
    mainState?.user?.permessions?.toLowerCase().split(",") || [];

  console.log("user permessions : ", userPermessions);
  const hasPermession = (permessionName) => {
    if (
      userPermessions.includes(permessionName.toLowerCase()) ||
      userPermessions.includes("*")
    )
      return true;

    return false;
  };

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
              {hasPermession("show.user.info") ? (
                <Dropdown.Item shortcut="⌘ ⇧ S"> بيانات المستخدم</Dropdown.Item>
              ) : (
                false
              )}

              {hasPermession("show.user.permessions") ? (
                <Dropdown.Item shortcut="⌘ P"> صلاحيات المستخدم</Dropdown.Item>
              ) : null}
            </Dropdown.Menu>
            {hasPermession("show.missing.book") ? (
              <Dropdown.Item shortcut="CTRL + A">كشكول النواقص</Dropdown.Item>
            ) : null}
            <Dropdown.Item
              onClick={async () => {
                setMainContext((e) => {
                  const updated = JSON.parse(JSON.stringify(e));
                  updated.modals.logout = true;
                  return updated;
                });
              }}
              shortcut="CTRL + C"
            >
              تسجيل الخروج
            </Dropdown.Item>
            <Dropdown.Item shortcut="CTRL + X"> اغلاق البرنامج</Dropdown.Item>
          </Dropdown>
          <Dropdown
            title="صلاحيات المدير"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            <Dropdown.Menu style={{ right: "100%" }} title="المستخدمين">
              {hasPermession("show.users.list") ? (
                <Dropdown.Item shortcut="⌘ ⇧ S">
                  {" "}
                  قائمة المستخدمين
                </Dropdown.Item>
              ) : null}

              {hasPermession("edit.user.info") ? (
                <Dropdown.Item shortcut="⌘ ⇧ S">
                  {" "}
                  تعديل بيانات المستخدمين
                </Dropdown.Item>
              ) : null}
              {hasPermession("add.new.user") ? (
                <Dropdown.Item shortcut="⌘ ⇧ S">
                  إضـافه مستخدم جديد
                </Dropdown.Item>
              ) : null}
              {hasPermession("deactivate.user") ? (
                <Dropdown.Item shortcut="⌘ ,">الغاء تفعيل مستخدم</Dropdown.Item>
              ) : null}
              {hasPermession("activate.user") ? (
                <Dropdown.Item shortcut="⌘ ,">تفعيل مستخدم</Dropdown.Item>
              ) : null}
            </Dropdown.Menu>
            {hasPermession("update.app") ? (
              <Dropdown.Item shortcut="CTRL + SHIFT + U">
                تحديث البرنامج
              </Dropdown.Item>
            ) : null}

            {hasPermession("copy.database") ? (
              <Dropdown.Item shortcut="⌘ N">
                نسخ احتياطي لقاعدة البيانات
              </Dropdown.Item>
            ) : null}
          </Dropdown>
          <Dropdown
            title="المخازن"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            {hasPermession("add.new.product") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">إضافة صنف جديد</Dropdown.Item>
            ) : null}

            {hasPermession("edit.product.amount") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">جرد وضبط كميات صنف</Dropdown.Item>
            ) : null}
            {hasPermession("edit.product.expire") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تعديل تاريخ صلاحية صنف
              </Dropdown.Item>
            ) : null}
            {hasPermession("edit.product.info") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">تعديل بيانات صنف</Dropdown.Item>
            ) : null}
          </Dropdown>
          <Dropdown
            title="مبيعات"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            {hasPermession("make.sales") ? (
              <Dropdown.Item shortcut="⌘ ⇧ S">
                فاتورة مبيعات جديده
              </Dropdown.Item>
            ) : null}
            {hasPermession("return.sales") ? (
              <Dropdown.Item shortcut="⌘ P">
                مرتجع مبيعات من فاتورة
              </Dropdown.Item>
            ) : null}
            {hasPermession("save.pending.invoice") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                اقفال الفواتير المعلقه
              </Dropdown.Item>
            ) : null}
            {hasPermession("money.transfer") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">تسليم درجة النقدية</Dropdown.Item>
            ) : null}
          </Dropdown>

          <Dropdown
            title="مشتريات"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            {hasPermession("make.buys") ? (
              <Dropdown.Item shortcut="⌘ ⇧ S">فاتورة شراء جديده</Dropdown.Item>
            ) : null}
            {hasPermession("return.buys") ? (
              <Dropdown.Item shortcut="⌘ P">مرتجع شراء من فاتورة</Dropdown.Item>
            ) : null}
          </Dropdown>

          <Dropdown
            title="تقارير"
            menuStyle={{ minWidth }}
            placement={"bottomEnd"}
            style={{ direction: "rtl" }}
          >
            {hasPermession("view.sales.report.period") ? (
              <Dropdown.Item shortcut="⌘ ⇧ S">
                تقرير مبيعات من فتره
              </Dropdown.Item>
            ) : null}
            {hasPermession("view.return.sales.report.period") ? (
              <Dropdown.Item shortcut="⌘ P">
                تقرير مرتجع مبيعات من فتره
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.cash.supplies.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير توريدات من فتره
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.expenses.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير مصروفات من فتره
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.cash.deliveries") ? (
              <Dropdown.Item shortcut="⌘ P">تقرير تسليم الدرج</Dropdown.Item>
            ) : null}

            {hasPermession("view.attendence.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير حضور وانصراف الموظفين
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.product.sales.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">تقرير حركة بيع صنف</Dropdown.Item>
            ) : null}

            {hasPermession("view.employee.sales.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير مبيعات موظف خلال فتره
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.discount.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير خصومات خلال فتره
              </Dropdown.Item>
            ) : null}

            {hasPermession("view.organization.profit.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">تقرير ربح المؤسسه</Dropdown.Item>
            ) : null}

            {hasPermession("view.expire.items.report") ? (
              <Dropdown.Item shortcut="⌘ ⇧ E">
                تقرير أصناف منتهية الصلاحيه من فتره
              </Dropdown.Item>
            ) : null}
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
            <Dropdown.Item shortcut="⌘ ⇧ E"> حذف عميل</Dropdown.Item>
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
