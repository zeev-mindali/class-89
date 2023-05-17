import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  constructor(private cryptoService: CryptoService) {}
  cars: any = [];
  ngOnInit(): void {
    // console.log("Noam wants to marry with:")
    // this.cryptoService.getTestData().subscribe((data) => {
    //   console.log(data);
    // });
    this.cryptoService.makeApiRequest().subscribe((data) => {
      //console.log(data);
      this.cars = data;
      this.cars = this.cars.result.records;
      console.log(this.cars);
    });
  }
}
