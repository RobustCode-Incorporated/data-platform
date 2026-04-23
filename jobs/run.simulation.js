import { createCitizen } from '../generators/citizen.generator.js'
import { simulateRequests } from '../simulators/activity.simulator.js'
import { processRequests } from '../simulators/admin.processor.js'

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms))
}

async function run() {

    while (true) {

        // créer citoyens
        const batch = Math.floor(Math.random() * 3) + 1
        for (let i = 0; i < batch; i++) {
            await createCitizen()
        }

        // simuler activité
        await simulateRequests()

        // traiter demandes
        await processRequests()

        console.log("cycle exécuté")

        await sleep(3000)
    }
}

run()