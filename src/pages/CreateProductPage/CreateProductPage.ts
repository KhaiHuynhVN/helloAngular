import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { throwError } from "rxjs";

import { ProductService } from "../../services/product.service";
import { productActions, productSelectors } from "../../store";
import ROUTE_CONFIGS from "../../routeConfigs";

@Component({
   selector: "CreateProductPage",
   standalone: true,
   imports: [CommonModule, ReactiveFormsModule],
   templateUrl: "./CreateProductPage.html",
   styleUrls: ["./CreateProductPage.scss"],
})
class CreateProductPage implements OnInit {
   private fb = inject(FormBuilder);
   private store = inject(Store);
   private productService = inject(ProductService);
   private router = inject(Router);

   protected readonly ROUTE_CONFIGS = ROUTE_CONFIGS;

   readonly FIELDS = {
      TITLE: "title",
      DESCRIPTION: "description",
      PRICE: "price",
      CATEGORY: "category",
      IMAGE: "image",
   } as const;

   productForm!: FormGroup;
   categories = this.store.selectSignal(productSelectors.selectCategories);
   isSubmitting = false;
   submitError: string | null = null;
   submitSuccess = false;

   constructor(private cdr: ChangeDetectorRef) {}

   ngOnInit(): void {
      this.initForm();
      this.store.dispatch(productActions.loadCategories());
   }

   private initForm(): void {
      this.productForm = this.fb.group({
         [this.FIELDS.TITLE]: ["", [Validators.required, Validators.minLength(3)]],
         [this.FIELDS.DESCRIPTION]: ["", [Validators.required, Validators.minLength(10)]],
         [this.FIELDS.PRICE]: [null, [Validators.required, Validators.min(0.01)]],
         [this.FIELDS.CATEGORY]: ["", Validators.required],
         [this.FIELDS.IMAGE]: ["", Validators.pattern(/^https?:\/\/.+/)],
      });
   }

   onSubmit(): void {
      if (this.productForm.invalid) {
         this.productForm.markAllAsTouched();
         return;
      }

      this.isSubmitting = true;
      this.submitError = null;

      const formValue = this.productForm.value;
      const product = {
         title: formValue.title,
         description: formValue.description,
         price: Number(formValue.price),
         category: formValue.category,
         image: formValue.image || "https://via.placeholder.com/300",
      };

      // TODO: Remove this test code - simulate error
      const testError = false;
      const request$ = testError
         ? throwError(() => new Error("Simulated error for testing"))
         : this.productService.createProduct(product);

      request$.subscribe({
         next: () => {
            this.submitSuccess = true;
            this.isSubmitting = false;
            this.cdr.markForCheck();
            setTimeout(() => this.router.navigate([ROUTE_CONFIGS.HOME.fullPath]), 1500);
         },
         error: (err) => {
            this.submitError = err.message || "Failed to create product";
            this.isSubmitting = false;
            this.cdr.markForCheck();
         },
      });
   }

   isFieldInvalid(fieldName: string): boolean {
      const field = this.productForm.get(fieldName);
      return !!(field?.invalid && field?.touched);
   }

   getFieldError(fieldName: string): string {
      const field = this.productForm.get(fieldName);
      if (!field?.errors) return "";

      if (field.errors["required"]) return "This field is required";
      if (field.errors["minlength"]) return `Minimum ${field.errors["minlength"].requiredLength} characters`;
      if (field.errors["min"]) return `Value must be at least ${field.errors["min"].min}`;
      if (field.errors["pattern"]) return "Invalid URL format";

      return "Invalid value";
   }
}

export default CreateProductPage;
