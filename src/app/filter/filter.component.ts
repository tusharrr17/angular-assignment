import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  measures = [
    { id: 'quantity', name: 'quantity' },
    { id: 'sales', name: 'sales' }
  ];
  
  attributes = [
    { id: 'city', name: 'city' },
    { id: 'country', name: 'country' },
    { id: 'customer_id', name: 'customer_id' },
    { id: 'item_type', name: 'item_type' },
    { id: 'item_id', name: 'item_id' },
    { id: 'product', name: 'product' },
    { id: 'region', name: 'region' },
    { id: 'SKU', name: 'SKU' },
    { id: 'state', name: 'state' },
    { id: 'store', name: 'store' },
    { id: 'zip_code', name: 'zip_code' },
    { id: 'dates', name: 'dates' }
  ];
}
