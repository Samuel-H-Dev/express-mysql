import mysql from "mysql2";
import { credentials } from "./credentials.js";

export const db = mysql.createConnection(credentials);


