import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'UserForm',
  templateUrl: './UserForm.component.html',
  styleUrls: ['./UserForm.component.css']
})
export class UserFormComponent {
  private routeSub: Subscription

  title = 'Editar usuario';
  selectedUser = {
    id:-1,
    nombre:"",
    date: ""
  }
  users = []

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router){

  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let id = params['id']
      if (id == null){
        this.title = 'Crear usuario'
      }
      this.api.read(id).subscribe(user => {
        const u = user as any;
        this.selectedUser = {
          id: u.id,
          nombre: u.name,
          date: new Date(u.birthdate).toISOString().split("T")[0]
        }
        console.log(this.selectedUser)
      })
    })

  }

  save() {
    if(this.selectedUser.nombre == "") {
      alert("Rellena el nombre")
    } else if(this.selectedUser.date == "") {
      alert("Coloca la fecha de nacimiento")
    } else {
      this.routeSub = this.route.params.subscribe(params => {
        let id = params['id']
        if (id == null){
          this.api.create({name: this.selectedUser.nombre, birthdate: this.selectedUser.date}).subscribe(res => {
            alert("Usuario creado correctamente")
            this.router.navigateByUrl("/")
          })
        } else {
          this.api.update({id: this.selectedUser.id, name: this.selectedUser.nombre, birthdate: this.selectedUser.date}).subscribe(res => {
            alert("Usuario modificado correctamente")
            this.router.navigateByUrl("/")
          })
        }
      })
    }
  }
}
