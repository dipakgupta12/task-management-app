import mysql from "mysql2";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysqldb",
  user: "root",
  password: "root",
  database: "test",
});

const promisePool = pool.promise();

pool.on("error", (err) => {
  console.error("MySQL pool error:", err);
});

export default promisePool;
