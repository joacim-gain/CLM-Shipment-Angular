/** Wraps the search match in <mark> (prototype: UI.hl). Use with [innerHTML]; the text is escaped first. */
import { Pipe, PipeTransform } from '@angular/core';

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

@Pipe({ name: 'clmHighlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string | null | undefined, query: string | null | undefined): string {
    const t = String(text ?? '');
    const q = (query ?? '').trim();
    if (!q) return esc(t);
    const i = t.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(t);
    return (
      esc(t.slice(0, i)) +
      '<mark>' +
      esc(t.slice(i, i + q.length)) +
      '</mark>' +
      esc(t.slice(i + q.length))
    );
  }
}
