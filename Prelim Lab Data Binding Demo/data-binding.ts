import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demo";
  title = "My First App!"
  description = "This is my new Angular Application!"

  // property binding
  imageUrl = "https://cdn.shopify.com/s/files/1/0747/5317/9944/files/Hu-Tao-Genshin.jpg?v=1729222181"
  w = 1500;
  h = 500;
  altText = "Hutao";

  // Stlye Binding
  textColor = 'Blue';

  // Class Binding
  isHighLighted = true;

  // Two-Way Data Binding
  yourName = '';

  // Event Binding
  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

}
