import { faker } from '@faker-js/faker'
import { insertCitizen } from '../services/citizen.service.js'
import { pickCommune } from '../utils/random.js'
import crypto from 'crypto'

/**
 * Génère un email unique basé sur hash + randomness
 */
function generateUniqueEmail() {
    const base = `${faker.person.firstName()}-${faker.person.lastName()}-${Date.now()}-${Math.random()}`
    const hash = crypto.createHash('sha256').update(base).digest('hex')

    return `user_${hash.slice(0, 12)}@test.local`
}

/**
 * Génère un numéro unique robuste
 */
function generateNumeroUnique() {
    const random = Math.floor(Math.random() * 1e9)
    return `CI-${Date.now()}-${random}`
}

/**
 * Génère un citoyen complet
 */
function buildCitizen() {
    return {
        communeId: pickCommune(),
        nom: faker.person.lastName(),
        postnom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        dateNaissance: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        sexe: Math.random() > 0.5 ? 'Homme' : 'Femme',
        lieuNaissance: faker.location.city(),
        numeroUnique: generateNumeroUnique(),
        password: faker.internet.password({ length: 12 }),
        email: generateUniqueEmail()
    }
}

/**
 * Insert avec retry automatique si collision DB (23505)
 */
async function safeInsertCitizen(maxRetries = 5) {
    let attempt = 0

    while (attempt < maxRetries) {
        const citizen = buildCitizen()

        try {
            await insertCitizen(citizen)

            console.log(`✅ Citizen inserted: ${citizen.email}`)
            return

        } catch (err) {

            // duplication (email ou autre contrainte unique)
            if (err.code === '23505') {
                attempt++
                console.warn(`⚠️ Duplicate detected, retry ${attempt}/${maxRetries}`)

                continue // regen citizen et retry

            } else {
                console.error('❌ Unexpected error:', err)
                return
            }
        }
    }

    console.error('❌ Max retries reached, citizen not inserted')
}

/**
 * Fonction principale exportée
 */
export async function createCitizen() {
    await safeInsertCitizen()
}