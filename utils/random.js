import { communes } from '../config/communes.config.js'

export function pickCommune() {
    const totalWeight = communes.reduce((sum, c) => sum + c.weight, 0)
    let random = Math.random() * totalWeight

    for (const c of communes) {
        if (random < c.weight) return c.id
        random -= c.weight
    }
}