import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: "testPipe_1",
   pure: true,
   standalone: true,
})
class testPipe_1 implements PipeTransform {
   transform(value: any, secondValue: string, thirdValue: number): { value: string; author: string } {
      return { value: value + secondValue + " " + String(thirdValue || ""), author: "testPipe_1" };
   }
}

export default testPipe_1;
