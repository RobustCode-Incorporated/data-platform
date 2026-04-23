// test.js
import 'dotenv/config'
import { pool } from './utils/db.js'

const res = await pool.query('SELECT NOW()')
console.log(res.rows)