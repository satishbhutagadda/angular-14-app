import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from '../shopping-cart.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  readonly walletAmount = 1000;
  displayedColumns: Array<keyof ICartItem | 'actions'> = ['itemName', 'price', 'quantity', 'actions'];
  private cartValue: number = 0;
  _dataSource: ICartItem[] = [];
  @Input() set dataSource(dataSource: ICartItem[]) {
    this.cartValue = dataSource.reduce((acc, item) => acc + item.price, 0);
    this.single = [
      {...this.single[0], value: this._dataSource.length < dataSource?.length ? this.single[0].value - this.cartValue : !dataSource.length ? this.walletAmount: this.single[0].value + this.cartValue}, 
      {...this.single[1], value: this.cartValue}
    ];
    this._dataSource = dataSource;
  };
  @Output() delete = new EventEmitter<number>();

  single: any[] = [
    {
      "name": "Wallet",
      "value": this.walletAmount
    },
    {
      "name": "Total Cart Amount",
      "value": this.cartValue
    }
  ];
  view: any = [300, 200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(id: number){
    this.delete.emit(id);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
