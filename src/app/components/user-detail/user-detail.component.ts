import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  baseUrl: string = 'http://localhost:8000/';
  imageUrl: any;
  getId: any;
  updateForm: FormGroup;
  selectedFile: any;
  errorMessage: any;
  errorFlag: Boolean = false;
  Roles: any = ["Developer", "Tester"]
  Teams: any = {}

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private _location: Location
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetUser(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        fullName: res.data['fullName'],
        role: res.data['role'],
        teamId: res.data['teamId']
      });
    });

    this.updateForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      role: ['', Validators.required],
      teamId: ['',Validators.required ],
     
    });
  }

  ngOnInit() {
    this.crudService.GetUsers().subscribe((res) => {
      this.Teams = res;
    });
  }


  onUpdate(): any {
    console.log(111111)
    
    this.crudService.updateUser(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        //this.ngZone.run(() => this.router.navigateByUrl('/view-team/'));
        this._location.back();
      },
      (err) => {
        console.log((err))
        this.errorFlag = true
        this.errorMessage = err
      }
    );
  }
}
