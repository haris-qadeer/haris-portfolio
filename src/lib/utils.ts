export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function hasProjectLink(value?: string): value is string {
  return Boolean(value && value.trim().length > 0);
}
