import { pool } from '../utils/db.js'

export async function insertCitizen(c) {
    await pool.query(`
        INSERT INTO "Citoyens"
        ("communeId","nom","postnom","prenom","dateNaissance","sexe","lieuNaissance","numeroUnique","password","email","createdAt","updatedAt")
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,NOW(),NOW())
    `, [
        c.communeId,
        c.nom,
        c.postnom,
        c.prenom,
        c.dateNaissance,
        c.sexe,
        c.lieuNaissance,
        c.numeroUnique,
        c.password,
        c.email
    ])
}

export async function getRandomCitizen() {
    const res = await pool.query(`SELECT * FROM "Citoyens" ORDER BY RANDOM() LIMIT 1`)
    return res.rows[0]
}