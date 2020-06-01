import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  @ViewChild(ConfirmComponent, {static: false}) confirmChild: ConfirmComponent;

  shopModel: any;
  errorHttp: boolean;
  boughtItems: Array<Product>;

  private shopSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = [];
    this.shopModel = {shopItems: []};
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => { this.shopModel.shopItems  = respuesta; },
      (respuesta: Response) => { this.errorHttp  = true; }
    );
    this.onGlobalKeyboard();
  }
  ngOnDestroy(): void{
    this.shopSubscription.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }

  clickItem(_curso){
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product){
    this.clickItem(_event);
    this.onConfirm();
    this.confirmChild.isDisabled = false;

  }

  finalPrice(){
    if (this.boughtItems){
      return this.boughtItems.reduce(
      (prev: number, item: Product) => prev + item.price , 0
      );
    }
  }

  onConfirm(){
    alert('Has añadido un nuevo curso');
  }

  onKeyboard(_event){
    if (_event.code === 'Enter'){
      alert('Se ha presionado la tecla: ' + _event.code);
    }
  }

  onGlobalKeyboard(){
    document.addEventListener('keypress', (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    });
  }
}
