import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private crudService: CrudService, private activatedRoute: ActivatedRoute,) { }
  TeamDetails: any = {};
  TeamId: any;
  ngOnInit(): void {
    this.TeamId = this.activatedRoute.snapshot.paramMap.get('teamId');
    this.crudService.GetTeamDetails(this.TeamId).subscribe((res) => {
      this.TeamDetails = res;
    });
  }

}
