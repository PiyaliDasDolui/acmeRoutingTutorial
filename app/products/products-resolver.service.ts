import { Resolve, ActivatedRoute, RouterStateSnapshot } from "@angular/router";
import { ProductResolved } from "./product";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";
import { map } from "rxjs/operators";

export class ProductsResolver {

  constructor(private productService: ProductService){}


}
