function createNewUser() {

    return {
        firstName: prompt("Write your first name: "),
        lastName: prompt("Write your second name: "),
        birthdayStr: prompt("Write your birthdate: ",
            "dd.mm.yyyy"
        ),

        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
        },
        getAge() {
            let birthdayParts = this.birthdayStr.split(".");
            let birthday = new Date(+birthdayParts[2], birthdayParts[1] - 1, +birthdayParts[0]).getTime();
            let age = (new Date().getTime() - birthday) / (365 * 24 * 60 * 60 * 1000);

            return Math.floor(age);
        },
        getPassword() {
            let birthdayParts = this.birthdayStr.split(".");
            let birthday = new Date(+birthdayParts[2], birthdayParts[1] - 1, +birthdayParts[0])
            return this.getLogin() + birthday.getFullYear().toString()
        }
    }
}
user = createNewUser();
console.log(
    'login - ' + user.getLogin() + '\n' +
    'age - ' + user.getAge() + '\n' +
    'password - ' + user.getPassword() + '\n'
);