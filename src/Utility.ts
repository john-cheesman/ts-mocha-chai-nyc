export default class Utility {
    // https://stackoverflow.com/a/24181701
    static calculateAge(dateOfBirth: Date, currentDate: Date = null) {
        let ageDiffMs: number,
            ageDate: Date

        currentDate = currentDate || new Date()
        ageDiffMs = currentDate.getTime() - dateOfBirth.getTime()
        ageDate = new Date(ageDiffMs)

        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}