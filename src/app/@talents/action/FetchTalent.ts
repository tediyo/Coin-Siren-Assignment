'use server';

export default async function FetchTalent() {
  const card = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/talent`, {
    headers: {
      'cache-control': 'no-cache',
    },
    cache: 'no-cache',
  });

  const result = await card.json();
  return result;
}
