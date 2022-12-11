import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Task = db.define('todos', {
    name: DataTypes.STRING,
    status:DataTypes.BOOLEAN,
}, {
    freezeTableName: true
});

export default Task;

(async() => {
    await db.sync();
})();