import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  Teams: any = [];
  ImageUrl: string = 'http://localhost:8000/';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetUsers().subscribe((res) => {
      this.Teams = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteUser(id).subscribe((res) => {
        this.Teams.splice(i, 1);
      });
    }
  }
}
