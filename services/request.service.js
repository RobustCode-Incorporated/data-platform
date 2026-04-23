import { pool } from '../utils/db.js'

export async function insertRequest(r) {
    await pool.query(`
        INSERT INTO "Requests"
        ("citizenId","type","status","createdAt","updatedAt")
        VALUES ($1,$2,$3,NOW(),NOW())
    `, [r.citizenId, r.type, r.status])
}

export async function getPendingRequests() {
    const res = await pool.query(`
        SELECT * FROM "Requests" WHERE status = 'pending'
    `)
    return res.rows
}

export async function updateRequestStatus(id, status) {
    await pool.query(`
        UPDATE "Requests"
        SET status=$1, "updatedAt"=NOW()
        WHERE id=$2
    `, [status, id])
}