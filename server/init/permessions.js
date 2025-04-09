const classes = {
  admin: "admin",
  general: "general",
  inventory: "inventory",
  sales: "sales",
  buys: "buys",
  reports: "reports",
  customers: "customers",
  suppliers: "suppliers",
  others: "others",
  cashFlow: "cash-flow",
  employee: "employee",
};
const subClasses = {
  currentUser: "current.user",
  users: "users",
  app: "app",
};
const permessions = [
  {
    name: "show.user.info",
    description:
      "this permession responsible for showing the user his info like Phone , Email , Total Sales , etc ...",
    title: "بيانات المستخدم",
    required: 1,
    class: classes.general,
    subclass: subClasses.currentUser,
    href: "user.info",
  },
  {
    name: "show.user.permessions",
    description: "see all permessions of custom user ",
    title: "صلاحيات المستخدم",
    required: 1,
    class: classes.general,
    subclass: subClasses.currentUser,
    href: "user.permessions",
  },
  {
    name: "show.missing.book",
    description:
      "this permession is responsible for showing u the missing drug that u marked it , to order it later ...",
    title: "كشكول النواقص",
    class: classes.general,
    href: "missing.book",
  },
  // users permessions
  {
    name: "show.users.list",
    description:
      "this permession is responsible for showing all users list .. usually considered as Admin permession",
    title: "قائمة المستخدمين",
    class: classes.admin,
    subclass: subClasses.users,
    href: "users.list",
  },
  {
    name: "edit.user.info",
    description:
      "allow u to edit custom user info .. usually considered as admin permession",
    title: "تعديل بيانات المستخدمين",
    class: classes.admin,
    subclass: subClasses.users,
    href: "edit.user",
  },
  {
    name: "add.new.user",
    description:
      "allow u to add new user ... usually considered as admin permession",
    title: "إضافة مستخدم جديد",
    class: classes.admin,
    subclass: subClasses.users,
    href: "add.user",
  },
  {
    name: "deactivate.user",
    description:
      "allow u to de active custom user [note : deactive means  that this user can't not be open his account ]",
    title: "ايقاف تفعيل مستخدم",
    class: classes.admin,
    subclass: subClasses.users,
    href: "deactivate.user",
    isMenu: 0,
  },
  {
    name: "activate.user",
    description:
      "allow u to active custom user [make the user able to login to the app]",
    title: "تفعيل مستخدم",
    class: classes.admin,
    subclass: subClasses.users,
    href: "activate.user",
    isMenu: 0,
  },
  // app permessions
  {
    name: "update.app",
    description:
      "allow user to update the app to last version [note : must be connected to internet ]",
    title: "تحديث البرنامج",
    class: classes.admin,
    subclass: subClasses.app,
    href: "update.app",
  },

  // edit product permessions
  {
    name: "copy.database",
    description:
      "Allow user to copy the database to avoid loss of data [usually for admin user]",
    title: "نسخ احنياطي لقاعدة البيانات",
    class: classes.admin,
    subclass: subClasses.app,
    href: "copy.database",
  },
  {
    name: "add.new.product",
    description: "allow user to add new product [usually for admin users]",
    title: "إضافة صنف جديد",
    class: classes.inventory,
    href: "add.new.product",
  },
  {
    name: "edit.product.amount",
    description:
      "allow user to edit amount of custom product usually for admin user",
    title: "تعديل كمية صنف",
    class: classes.inventory,
    href: "edit.product.amount",
  },
  {
    name: "edit.product.expire",
    description: "allow user to edit the expire date of custom product",
    title: "تعديل تاريخ صلاحية صنف",
    class: classes.inventory,
    href: "edit.product.expire",
  },
  {
    name: "edit.product.info",
    description:
      "allow user to edit product info like name , id , price and etc ....",
    title: "تعديل بيانات صنف",
    class: classes.inventory,
    href: "edit.product.info",
  },
  // sells permessions
  {
    name: "make.sales",
    description: "allow user to sell products ",
    title: "فاتورة مبيعات جديده",
    class: classes.sales,
    href: "sell",
  },
  {
    name: "return.sales",
    description: "allow user to return products from selling invoices  ",
    title: "مرتجع مبيعات من فاتورة",
    class: classes.sales,
    href: "return.sales",
  },
  {
    name: "view.pending.invoices",
    description: "allow user to view all  the pending invoices ",
    title: "اظهار الفواتير المعلقه ",
    class: classes.sales,
    href: "pending.invoices",
  },
  {
    name: "save.pending.invoices",
    description: "allow user to save the pending invoices ",
    title: "حفظ الفواتير المعلقه ",
    class: classes.sales,
    href: "save.pending.inVoices",
    ismenu: 0,
  },
  {
    name: "delete.pending.invoices",
    description: "allow user to delete custom  pending invoice",
    title: "حذف فاتورة معلقه",
    class: classes.sales,
    href: "delete.pending.nvoices",
    ismenu: 0,
  },
  {
    name: "money.transfer",
    description: "finish the shift and transfer money ",
    title: "تسليم الدرج",
    class: classes.sales,
    href: "money.transfer",
  },
  // buys permessions
  {
    name: "make.buys",
    description: "allow user to make new buy invoice  ...",
    title: "فاتورة شراء جديده",
    class: classes.buys,
    href: "buy",
  },
  {
    name: "return.buys",
    description: "allow user to return products from buying invoices",
    title: "مرتجع شراء من فاتورة",
    class: classes.buys,
    href: "return.buy",
  },
  // reports  permessions
  {
    name: "view.sales.report.period",
    description: "allow user to view the sales report through period of time ",
    title: "تقرير مبيعات من فتره",
    class: classes.reports,
    href: "sales.report",
  },
  {
    name: "view.return.sales.report.period",
    description:
      "allow user to view the return sales reports through period of time",
    title: "تقرير المرتجعات من فتره",
    class: classes.reports,
    href: "return.sales.report",
  },
  {
    name: "view.cash.supplies.report",
    description:
      "allow user to view the cash supplies reports through period of time",
    title: "تقارير التوريدات خلال فتره ",
    class: classes.reports,
    href: "cash.supplies.report",
  },
  {
    name: "view.expenses.report",
    description:
      "allow user to view the expenses reports through period of time ",
    title: "تقارير المصروفات خلال فتره",
    class: classes.reports,
    href: "expenses.report",
  },
  {
    name: "view.cash.deliveries",
    description:
      "allow user to see the cash deliveries reports [usually for admin user]",
    title: "تقارير تسليمات الدرج",
    class: classes.reports,
    href: "cash.deliveries.report",
  },
  {
    name: "view.attendence.report",
    description: "allow user to see the attendence sheet [report]",
    title: "تقارير حضور و انصراف الموظفين",
    class: classes.reports,
    href: "attendence.report",
  },
  {
    name: "view.product.sales.report",
    description:
      "allow user to see custom product sales report [usually for admin user]",
    title: "تقرير حركة بيع صنف معين ",
    class: classes.reports,
    href: "product.sales.report",
  },
  {
    name: "view.employee.sales.report",
    description:
      "allow user to see sales of custom user during period of time  ",
    title: "تقارير مبيعات موظف خلال فتره",
    class: classes.reports,
    href: "employee.sales.report",
  },

  {
    name: "view.discount.report",
    description:
      "allow user to see total discounts through period of time [usually for admin]",
    title: "تقرير خصومات خلال فتره",
    class: classes.reports,
    href: "discount.report",
  },
  {
    name: "view.organization.profit.report",
    description:
      "allow user to see all profits of the organization [usually for the admin user]",
    title: "تقرير ربح المؤسسه ",
    class: classes.reports,
    href: "organization.profil.report",
  },
  {
    name: "view.expire.items.report",
    description:
      "allow user to see all expiry products through period of time ",
    title: "تقرير أصناف منتهية الصلاحية خلال فتره",
    class: classes.reports,
    href: "expire.items.report",
  },
  // customers permessions
  {
    name: "view.customers.list",
    description:
      "allow user to see all customers list with all customer info ...",
    title: "قائمة العملاء",
    class: classes.customers,
    href: "customers.list",
  },
  {
    name: "add.new.customer",
    description: "allow user to add new customer to the system ...",
    title: "إضافة عميل جديد",
    class: classes.customers,
    href: "add.customer",
  },
  {
    name: "edit.customer.info",
    description: "allow user to edit customer info ..",
    title: "تعديل بيانات عميل",
    class: classes.customers,
    href: "edit.customer.info",
  },
  {
    name: "remove.customer",
    description: "allow user to remove certain customer",
    title: "حذف عميل",
    class: classes.customers,
    href: "remove.customer",
  },
  //  suppliers permessions
  {
    name: "view.suppliers.list",
    description: "allow user to see all suppliers with their balance ...",
    title: "قائمة الموردين",
    class: classes.suppliers,
    href: "suppliers.list",
  },
  {
    name: "view.suppliers.pruchase.invoices",
    description:
      "allow user to see list of all buying invoices of certain supplier ",
    title: "فواتير شراء من مورد",
    class: classes.suppliers,
    href: "suppliers.pruchase.invoices",
  },
  {
    name: "view.supplier.products",
    description:
      "allow user to see list of all products buyed  from certain supplier",
    title: "أصناف شراء من مورد",
    class: classes.suppliers,
    href: "supplier.products",
  },
  {
    name: "view.supplier.balance",
    description: "allow user to see balance of certain supplier",
    title: "حساب مورد",
    class: classes.suppliers,
    href: "supplier.balance",
  },
  // cash in/out flow permessions
  {
    name: "manage.cash.inflow",
    description: "Allow user to deposite cash into the account",
    title: "توريد  نقديه",
    class: classes.cashFlow,
    href: "cash.inflow",
  },
  {
    name: "manage.cash.outflow",
    description: "Allow user to withdraw funds [money] from the system",
    title: "صرف نقديه",
    class: classes.cashFlow,
    href: "cash.outflow",
  },

  // employee permessions
  {
    name: "record.employee.attendence.in",
    description: "allow user to record other  employee attendence in",
    title: "تسجيل حضور",
    class: classes.employee,
    href: "employee.attendence.in",
  },
  {
    name: "record.employee.attendence.out",
    description: "allow user to record other  employee attendence out",
    title: "تسجيل انصراف",
    class: classes.employee,
    href: "employee.attendence.out",
  },
  // extre props permessions
  {
    name: "manage.auto.order",
    description:
      "allow user to make automatic order based on the sales through period of time ",
    title: "إقتراح الطلب التلقائي",
    class: classes.others,
    href: "auto.order",
  },
  {
    name: "search.best.offer",
    description:
      "allow user to search for best offer of certain drug through all registered suppliers [usually need internet with api]",
    class: classes.others,
    title: "بحث عن أفضل سعر",
    href: "search.best.offer",
  },
  {
    name: "comapre.suppliers.product",
    description:
      "allow user to compare product among  custom suppliers [ usaully need internet]",
    title: "مقارنة أصناف شركات ومخازن",
    class: classes.others,
    href: "compare.suppliers.products",
  },
];

module.exports = permessions;
