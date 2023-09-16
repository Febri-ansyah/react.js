import { Sequelize } from "sequelize";

const db = new Sequelize ('shoppingcart', 'root', '', {
    host:"localhost",
    dialect:"mysql"
})

export default db;