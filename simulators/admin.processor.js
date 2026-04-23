import { getPendingRequests, updateRequestStatus } from '../services/request.service.js'

export async function processRequests() {

    const requests = await getPendingRequests()

    for (const r of requests) {

        const rand = Math.random()

        let status = "approved"
        if (rand < 0.2) status = "rejected"
        else if (rand < 0.4) status = "pending"

        await updateRequestStatus(r.id, status)
    }
}