import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: "upperCasePipe",
   pure: true,
   standalone: true,
})
class upperCasePipe implements PipeTransform {
   transform(value: string): string {
      return String(value || "").toLocaleUpperCase();
   }
}

export default upperCasePipe;
