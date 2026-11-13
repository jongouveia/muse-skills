// Serialize JSON-LD for a <script> tag. Escaping "<" stops a value such as "</script>"
// from closing the tag; < is the same character to a JSON parser.
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
