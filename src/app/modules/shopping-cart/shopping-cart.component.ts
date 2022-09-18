import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';

export interface ICartItem {
  id?: number;
  itemName: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  form!: FormGroup;
  cart: Array<ICartItem> = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new FormControl(null, {nonNullable: true, validators: [Validators.required]}),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required)
    });
  }

  submit(formDirective: FormGroupDirective): void {
    const id = this.cart.length ? Math.max(...this.cart.map((item) => item.id || 1)) : 0;
    this.cart = [...this.cart, {...this.form.value, id: id+1 }];
    formDirective.resetForm();
    // console.log(this.cart);
  }

  deleteCartItem(id: number) {
    console.log(id);
    this.cart = this.cart.filter((item) => item.id !== id);
  }
}
