
/**
 * Combines multiple class names into a single string
 * @param inputs - Class names to combine
 * @returns Combined class names string
 */
export function cn(...inputs: (string | boolean | undefined | null)[]): string {
  return inputs.filter(Boolean).join(' ');
}
