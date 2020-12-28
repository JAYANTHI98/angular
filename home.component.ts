import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-homes',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

      openDialog() {
      this.dialog.open(HomeComponent);


  }

}
