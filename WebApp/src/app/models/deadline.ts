import { Time } from '@angular/common';

export class Deadline
{
    private date: Date;
    private time: Time;
    private description: string //name of the submission

    public constructor(date:Date, description:string)
    {
        this.date = date;
        this.description = description;
    }

    public setDate(date:Date)
    {
        this.date = date;
    }
    public setDescription(description:string)
    {
        this.description = description;
    }
    public getDate():Date
    {
        return this.date;
    }
    public getDescription():string
    {
        return this.description;
    }
    
}