import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'UserList',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.css']
})
export class UserListComponent {
  title = 'Todos los usuarios registrados';
  users = [

  ]

  constructor(private api: ApiService) {

  }

  ngOnInit(){
    this.getUsers()
  }

  getUsers() {
    this.api.list().subscribe(users => {
      console.log(users)
      this.users = []
      for(const user of (users as any)){
        if(user.name != "" && user.name != null && user.birthdate != "" && user.birthdate != null){
          this.users.push({
            id: user.id,
            nombre: user.name,
            date: new Date(user.birthdate).toISOString().split("T")[0]
          })
        }
      }
    })
  }

  delete(id) {
    this.api.delete(id).subscribe(res => {
      this.getUsers()
    })
  }
}
