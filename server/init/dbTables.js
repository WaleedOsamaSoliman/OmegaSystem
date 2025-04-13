const { DataTypes, Sequelize: S } = require("sequelize");
const tables = {
  accounts: {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "m",
      validate: {
        isIn: [["m", "f"]],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
      validate: {
        isInt: true,
        min: 18,
        max: 99,
      },
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: S.NOW,
    },
    last_seen: {
      type: DataTypes.DATE,
      defaultValue: S.NOW,
    },
    total_sales: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        isFloat: true,
      },
    },
    receites_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isInt: true,
      },
    },
  },
  permessions: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "no description",
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      defaultValue: "general",
    },
    subclass: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    required: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    inmenu: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    href: {
      type: DataTypes.STRING,
      defaultValue: "#",
    },
    shortcut : {
      type : DataTypes.STRING, 
      defaultValue : ""
    },
    isAdmin : {
      type : DataTypes.INTEGER,
      defaultValue : 0
    },
    isSuperVisor : { 
      type : DataTypes.INTEGER,
      default : 0,
    },
    isNormalUser : {
      type : DataTypes.INTEGER,
      default : 1
    }
  },
  configurations: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    organization: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    branch: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    manager: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  branches: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
};
module.exports = tables;
