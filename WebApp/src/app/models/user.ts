export class User 
{
    username: string;
    password: string;
    roleID: number;
    id:number;
    email:string;
    firstName:string;
    lastName:string;
    //role check
    coordinator: boolean;  
    student: boolean;
    supervisor: boolean;
    reader: boolean;
    opponent: boolean;

    constructor(username?: string, password?: string, email?: string, firstName?: string, lastName?: string, coordinator?: boolean, supervisor?: boolean, student?: boolean, reader?: boolean, opponent?: boolean)
    {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.coordinator = coordinator;
        this.supervisor = supervisor;
        this.student = student;
        this.reader = reader;
        this.opponent = opponent;
    }
}