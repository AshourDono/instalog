export function generateCustomId(length: number): string | undefined {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    id += characters.charAt(randomIndex);
  }

  return id;
}
