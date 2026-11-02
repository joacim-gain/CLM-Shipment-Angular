/** "Max Mustermann" → "MM" */
import { Pipe, PipeTransform } from '@angular/core';

export const initials = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

@Pipe({ name: 'clmInitials' })
export class InitialsPipe implements PipeTransform {
  transform(name: string | null | undefined): string {
    return initials(name ?? '');
  }
}
