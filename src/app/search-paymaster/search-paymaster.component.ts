import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaymasterDetailsComponent } from '../paymaster-details/paymaster-details.component';
import { Paymasters } from 'src/models/paymasters.model';


@Component({
  selector: 'app-search-paymaster.',
  templateUrl: './search-paymaster.component.html',
  styleUrls: ['./search-paymaster.component.css'],
  providers: [DialogService, DynamicDialogRef]
})
export class SearchPaymasterComponent implements OnInit, OnDestroy {
  
  ref!: DynamicDialogRef;

  paymasters = Paymasters;

  constructor(private projectDialog: DialogService) { }

  search!:string;
  searchBy!:string;
  
  ngOnInit(): void {
  }

  viewProjectDetails(paymasterSelected: any){
    this.ref = this.projectDialog.open(PaymasterDetailsComponent, {
      header: paymasterSelected.entityName,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        contract: paymasterSelected
      }
    });
  }

  searchContract(){
    alert("Search functionality in progress.")
  }
  
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

}
