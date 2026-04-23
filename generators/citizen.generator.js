import { faker } from '@faker-js/faker'
import { insertCitizen } from '../services/citizen.service.js'
import { pickCommune } from '../utils/random.js'

function generateNumeroUnique() {
    return `CI-${Date.now()}-${Math.floor(Math.random() * 10000)}`
}

export async function createCitizen() {

    const citizen = {
        communeId: pickCommune(),
        nom: faker.person.lastName(),
        postnom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        dateNaissance: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        sexe: Math.random() > 0.5 ? 'Homme' : 'Femme',
        lieuNaissance: faker.location.city(),
        numeroUnique: generateNumeroUnique(),
        password: faker.internet.password(),
        email: faker.internet.email()
    }

    await insertCitizen(citizen)
}