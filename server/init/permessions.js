const permessions = [
  {
    name: "show.user.info",
    description:
      "this permession responsible for showing the user his info like Phone , Email , Total Sales , etc ...",
  },
  {
    name: "show.user.permessions",
    description: "see all permessions of custom user ",
  },
  {
    name: "show.missing.book",
    description:
      "this permession is responsible for showing u the missing drug that u marked it , to order it later ...",
  },
  // users permessions
  {
    name: "show.users.list",
    description:
      "this permession is responsible for showing all users list .. usually considered as Admin permession",
  },
  {
    name: "edit.user.info",
    description:
      "allow u to edit custom user info .. usually considered as admin permession",
  },
  {
    name: "add.new.user",
    description:
      "allow u to add new user ... usually considered as admin permession",
  },
  {
    name: "deactivate.user",
    description:
      "allow u to de active custom user [note : deactive means  that this user can't not be open his account ]",
  },
  {
    name: "activate.user",
    description:
      "allow u to active custom user [make the user able to login to the app]",
  },
  // app permessions
  {
    name: "update.app",
    description:
      "allow user to update the app to last version [note : must be connected to internet ]",
  },
  // edit product permessions
  {
    name: "copy.database",
    description:
      "Allow user to copy the database to avoid loss of data [usually for admin user]",
  },
  {
    name: "add.new.product",
    description: "allow user to add new product [usually for admin users]",
  },
  {
    name: "edit.product.amount",
    description:
      "allow user to edit amount of custom product usually for admin user",
  },
  {
    name: "edit.product.expire",
    description: "allow user to edit the expire date of custom product",
  },
  {
    name: "edit.product.info",
    description:
      "allow user to edit product info like name , id , price and etc ....",
  },
  // sells permessions
  {
    name: "make.sales",
    description: "allow user to sell products ",
  },
  {
    name: "return.sales",
    description: "allow user to return products from selling invoices  ",
  },
  {
    name: "save.pending.invoice",
    description: "allow user to save the pending invoices ",
  },
  {
    name: "delete.pending.invoice",
    description: "allow user to delete custom  pending invoice",
  },
  {
    name: "money.transfer",
    description: "finish the shift and transfer money ",
  },
  // buys permessions
  {
    name: "make.buys",
    description: "allow user to make new buy invoice  ...",
  },
  {
    name: "return.buys",
    description: "allow user to return products from buying invoices",
  },
  // reports  permessions
  {
    name: "view.sales.report.period",
    description: "allow user to view the sales report through period of time ",
  },
  {
    name: "view.return.sales.report.period",
    description:
      "allow user to view the return sales reports through period of time",
  },
  {
    name: "view.cash.supplies.report",
    description:
      "allow user to view the cash supplies reports through period of time",
  },
  {
    name: "view.expenses.report",
    description:
      "allow user to view the expenses reports through period of time ",
  },
  {
    name: "view.cash.deliveries",
    description:
      "allow user to see the cash deliveries reports [usually for admin user]",
  },
  {
    name: "view.attendence.report",
    description: "allow user to see the attendence sheet [report]",
  },
  {
    name: "view.product.sales.report",
    description:
      "allow user to see custom product sales report [usually for admin user]",
  },
  {
    name: "view.employee.sales.report",
    description:
      "allow user to see sales of custom user during period of time  ",
  },
  {
    name: "view.discount.report",
    description:
      "allow user to see total discounts through period of time [usually for admin]",
  },
  {
    name: "view.organization.profit.report",
    description:
      "allow user to see all profits of the organization [usually for the admin user]",
  },
  {
    name: "view.expire.items.report",
    description:
      "allow user to see all expiry products through period of time ",
  },
  // customers permessions
  {
    name: "view.customers.list",
    description:
      "allow user to see all customers list with all customer info ...",
  },
  {
    name: "add.new.customer",
    description: "allow user to add new customer to the system ...",
  },
  {
    name: "edit.customer.info",
    description: "allow user to edit customer info ..",
  },
  {
    name: "remove.customer",
    description: "allow user to remove certain customer",
  },
  //  suppliers permessions
  {
    name: "view.suppliers.list",
    description: "allow user to see all suppliers with their balance ...",
  },
  {
    name: "view.suppliers.pruchase.invoices",
    description:
      "allow user to see list of all buying invoices of certain supplier ",
  },
  {
    name: "view.supplier.products",
    description:
      "allow user to see list of all products buyed  from certain supplier",
  },
  {
    name: "view.supplier.balance",
    description: "allow user to see balance of certain supplier",
  },
  // cash in/out flow permessions
  {
    name: "manage.cash.inflow",
    description: "Allow user to deposite cash into the account",
  },
  {
    name: "manage.cash.outflow",
    description: "Allow user to withdraw funds [money] from the system",
  },

  // employee permessions
  {
    name: "record.employee.attendence.in",
    description: "allow user to record other  employee attendence in",
  },
  {
    name: "record.employee.attendence.out",
    description: "allow user to record other  employee attendence out",
  },
  // extre props permessions
  {
    name: "manage.auto.order",
    description:
      "allow user to make automatic order based on the sales through period of time ",
  },
  {
    name: "search.best.offer",
    description:
      "allow user to search for best offer of certain drug through all registered suppliers [usually need internet with api]",
  },
  {
    name: "comapre.suppliers.product",
    description:
      "allow user to compare product among  custom suppliers [ usaully need internet]",
  },
];

module.exports = permessions;
