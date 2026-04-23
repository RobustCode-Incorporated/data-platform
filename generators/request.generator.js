import { insertRequest } from '../services/request.service.js'

const types = [
    "acte_naissance",
    "certificat_residence",
    "carte_identite"
]

export async function createRequest(citizenId) {

    const type = types[Math.floor(Math.random() * types.length)]

    await insertRequest({
        citizenId,
        type,
        status: "pending"
    })
}