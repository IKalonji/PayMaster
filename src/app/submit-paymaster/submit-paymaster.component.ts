import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WalletService } from 'src/app/services/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-paymaster',
  templateUrl: './submit-paymaster.component.html',
  styleUrls: ['./submit-paymaster.component.css']
})
export class SubmitPaymasterComponent implements OnInit {
  
  PaymasterForm = new FormGroup({
    submittorAddress: new FormControl(''),
    entityName: new FormControl(''),
    maxOnrampAmount: new FormControl(''),
    maxOfframpAmount: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private wallet:WalletService, private router: Router) { }

  ngOnInit(): void {
    let _wallet = this.wallet.getConnectedWallet()
    if (!_wallet){
      alert("You need to connect your wallet to proceed")
      this.router.navigate(["/"])
    }
  }

  onSubmit(){
    console.log(typeof(this.PaymasterForm.value))
  }

}
