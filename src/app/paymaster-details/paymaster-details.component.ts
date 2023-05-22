import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-paymaster-details',
  templateUrl: './paymaster-details.component.html',
  styleUrls: ['./paymaster-details.component.css'],
})
export class PaymasterDetailsComponent implements OnInit {

  _project:any;
  stars = 8;

  constructor(private dialogConfig: DynamicDialogConfig) { }

  ngOnInit(): void {
    this._project = this.dialogConfig.data.contract;
  }

}
