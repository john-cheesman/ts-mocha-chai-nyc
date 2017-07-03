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
        return this.calculateAge(this._dateOfBirth)
    }

    // https://stackoverflow.com/a/24181701
    private calculateAge(dateOfBirth: Date) {
        let ageDiffMs: number,
            ageDate: Date

        ageDiffMs = Date.now() - dateOfBirth.getTime()
        ageDate = new Date(ageDiffMs)

        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

