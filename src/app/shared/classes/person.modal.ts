import { IPerson } from 'src/app/shared/interfaces/person.interface';

export class Person implements IPerson{
 constructor( 
    public  id:number,
    public login:string,
    public password:string,
    public email:string
    ){}
}