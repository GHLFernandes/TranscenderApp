import { DataBaseConnection } from "./database-connection";

var db = null;

export default class DataBaseInit {

    constructor(){
        db = DataBaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            console.log('Foreign keys turned on')
        );
        this.InitDb()
    }

    private InitDb(){
        var sql = [
            "DROP TRABLE IF EXISTS user;",

            "create table if not exists user ( id integer primary key autoincrement, name text not null, email text not null unique, phone text not null unique, password text not null);", 

            "insert into user (name, email, phone, password) VALUES ('Gabriel', 'gh.leitefernandes@gmail.com', '+5561992097244', 'teste123');"
        ];

        db.transaction(
            tx => {
                for(var i=0; i<sql.length; i++){
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("Error call back :" + JSON. stringify(error));
                console.log(error);
            }, () => {
                console.log("Transaction complete call back");
            }
        );
    }
}