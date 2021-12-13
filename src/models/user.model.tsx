export class User {

    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public password: string;

    constructor(id?: number, name?: string, email?: string, phone?: string, password?: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    
}