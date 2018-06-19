import Person from './Person'
import Utility from './Utility'
import 'mocha'
import { expect } from 'chai'

describe('Person', () => {
    let person,
        dateOfBirth

    dateOfBirth = new Date(1999, 0, 1)

    before(() => {
        person = new Person({
            title: 'Mr',
            firstName: 'John',
            lastName: 'Cheesman'
        },
        dateOfBirth
        )
    })

    describe('fullName', () => {
        it('Should return title, first name and last name', () => {
            expect(person.fullName).to.equal('Mr John Cheesman')
        })
    })

    describe('initialLastName', () => {
        it('Should return title, initial and last name', () => {
            expect(person.initialLastName).to.equal('Mr J Cheesman')
        })
    })

    describe('ageYears', () => {
        it('Should return the age in whole years', () => {
            expect(person.ageYears).to.equal(Utility.calculateAge(dateOfBirth))
        })
    })
})

