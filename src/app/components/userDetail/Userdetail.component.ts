import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'UserDetail',
  templateUrl: './UserDetail.component.html',
  styleUrls: ['./UserDetail.component.css']
})
export class UserDetailComponent {
  private routeSub: Subscription

  title = 'Detalles del usuario';
  selectedUser = {
    id:-1,
    nombre:"",
    date:""
  }

  constructor(private route: ActivatedRoute, private api: ApiService){

  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let id = params['id']

      this.api.read(id).subscribe(user => {
        const u = user as any;
        this.selectedUser = {
          id: u.id,
          nombre: u.name,
          date: new Date(u.birthdate).toISOString().split("T")[0]
        }
      })
    })
  }
}
