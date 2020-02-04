import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/interfaces/person.interface';
import { Person } from 'src/app/shared/classes/person.modal';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

 
  personId: number;
  login: string;
  password: string;
  email: string;
  arrPerson: Array<IPerson> = [];
  changeButtonAdd: boolean;
  btnAdd: boolean;
  btnChange: boolean;



  constructor() { }

  ngOnInit() {
  }

  
  clearFields(): void {
    this.login = '';
    this.password = '';
    this.email = '';
  }


  addPerson(): void {
    const newP: IPerson = new Person(1, this.login, this.password, this.email);

    if (this.arrPerson.length > 0) {
      newP.id = this.arrPerson.slice(-1)[0].id + 1;
    }
    this.arrPerson.push(newP);
    this.clearFields();
  }


  editPerson(person: IPerson): void {
    this.login = person.login;
    this.password = person.password;
    this.email = person.email;
    this.personId = person.id;
    this.btnChange = true;
    this.btnAdd = true;

  }


  saveEditUser(): void {
    const editP: IPerson = new Person(this.personId, this.login, this.password, this.email);
    const index = this.arrPerson.findIndex(per => per.id === this.personId);
    this.arrPerson.splice(index, 1, editP);
    this.clearFields();
    this.btnChange = false;
    this.btnAdd = false;
  }


  deletePerson(person: IPerson):void{
    this.personId = person.id;
    const index = this.arrPerson.findIndex(per => per.id === this.personId);
    this.arrPerson.splice(index, 1);

  }








}
