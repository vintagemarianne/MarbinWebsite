export class User {
    constructor(
        public id: string = ''
    ) { }

    email: String;
    first_name: String;
    last_name: String;
    password_digest: String;
    address: String;
    phone: String;
}