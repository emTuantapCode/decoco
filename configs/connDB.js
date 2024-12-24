const mysql = require('mysql2');

const dbConnect = () => {
    const db = mysql.createPool({
        connectionLimit: 10,
        host: "127.0.0.1", // or your Docker host IP
        user: "root",
        password: "alandinh0203", // your MySQL root password
        database: "decoco_shop", // replace with your database name
        port: 33061,
    });

    db.getConnection((err, connection) => {
        if (err) {
            console.error("Error connecting to database: " + err.stack);
            return;
        }
        console.log("Connected to database with threadId: " + connection.threadId);
        connection.release();
    });
}

module.exports = dbConnect;
