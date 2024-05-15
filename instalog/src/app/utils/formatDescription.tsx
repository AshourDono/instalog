export function formatDescription(actionName: string): string {
  const sentence: string = actionName.replace(/[._]/g, ' ');

  // Capitalize the first letter and make the rest lowercase
  const result: string = `${sentence.charAt(0).toUpperCase()}${sentence.slice(1).toLowerCase()}.`;

  return result;
}
