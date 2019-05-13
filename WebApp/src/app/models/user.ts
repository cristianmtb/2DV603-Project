export class User 
{
    username: string;
    password: string;
    roleID: number;
    //role check
    coordinator: boolean;  
    student: boolean;
    supervisor: boolean;
    reader: boolean;
    opponent: boolean;
    //
}