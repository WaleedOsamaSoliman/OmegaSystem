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
        reason : "field.required",
        field: r,
      };
    }

    // check password and confirm password 
    if (this.data.password !== this.data.confirmPassword) { 
      return {
        state: false ,
        reason : "password.not.match"
      }
    }
    return {
      state: true,
    };
  }
}

export default Confirm;
