import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';
   public employees: {
     id: number;
     firstname: string;
     lastname: string;
     email: string;
   }[] = [];
   products: any[] = [];
 

   constructor(private _employeeService: EmployeeService, private productsService: ProductsService) {}

   ngOnInit() {
     this.employees = this._employeeService.getEmployees();
      this.products = this.productsService.getproducts();
   }


}