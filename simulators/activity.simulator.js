import { getRandomCitizen } from '../services/citizen.service.js'
import { createRequest } from '../generators/request.generator.js'

export async function simulateRequests() {

    const citizen = await getRandomCitizen()
    if (!citizen) return

    const chance = Math.random()

    if (chance < 0.6) {
        await createRequest(citizen.id)
    }
}