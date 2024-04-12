import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 16) {
      return value;
    }

    // Split the value into groups of 4 characters
    const parts = value.match(/.{1,4}/g) ?? [];

    // Join the parts with " - "
    return parts.join(' - ');
  }

}
