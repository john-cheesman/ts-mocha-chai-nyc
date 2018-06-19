import Utility from './Utility'

interface Names {
    title: string,
    firstName: string,
    lastName: string
}

export default class Person {
    constructor(private _names: Names, private _dateOfBirth: Date) {}

    get fullName(): string {
        return `${this._names.title} ${this._names.firstName} ${this._names.lastName}`
    }

    get initialLastName(): string {
        return `${this._names.title} ${this._names.firstName[0]} ${this._names.lastName}`
    }

    get ageYears(): number {
        return Utility.calculateAge(this._dateOfBirth)
    }
}

