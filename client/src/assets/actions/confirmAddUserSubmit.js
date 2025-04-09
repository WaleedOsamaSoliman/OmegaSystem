class Confirm {
  constructor(data, requiredFields) {
    this.data = data;
    this.requiredFields = requiredFields;
  }
  confirm() {
    const fields = Object.keys(this.data);
    const r = fields.find((item) => {
      if (this.requiredFields.includes(item)) {
        const value = this.data[item];

        if (typeof value === typeof []) {
          return value.length === 0;
        } else if (typeof value === typeof "") {
          return value.trim("") === "";
        } else {
          return false;
        }
      }
    });

    if (typeof r !== typeof undefined) {
      return {
        state: false,
        field: r,
      };
    }
    return {
      state: true,
    };
  }
}

export default Confirm;
