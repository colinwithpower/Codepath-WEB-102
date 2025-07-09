const API_KEY = process.env.REACT_APP_HARVARD_API_KEY;
console.log('API_KEY:', API_KEY);
const BASE_URL = 'https://api.harvardartmuseums.org/object';

// Fields to fetch
const FIELDS = [
  'title',
  'people',
  'culture',
  'period',
  'medium',
  'dated',
  'primaryimageurl',
  'objectnumber',
];

const SIZE = 100; // batch size

// Helper to get a random page number
async function getTotalPages() {
  const url = `${BASE_URL}?apikey=${API_KEY}&size=1&hasimage=1`;
  const res = await fetch(url);
  const data = await res.json();
  return data.info.pages;
}

// Fetch a random artwork with required fields and image
export async function fetchRandomArtwork(banList = {}) {
  const totalPages = await getTotalPages();
  const maxPage = Math.min(totalPages, Math.floor(500000 / SIZE));
  let attempts = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    const randomPage = Math.floor(Math.random() * maxPage) + 1;
    const url = `${BASE_URL}?apikey=${API_KEY}&size=${SIZE}&hasimage=1&fields=${FIELDS.join(',')}&page=${randomPage}`;
    const res = await fetch(url);
    console.log('Fetch response:', res);
    const data = await res.json();
    const artworks = data.records.filter(
      (art) =>
        art.primaryimageurl &&
        art.title &&
        art.people && art.people.length > 0 &&
        art.medium &&
        art.culture &&
        art.period &&
        art.dated
    );
    console.log('Valid artworks with images:', artworks.length);
    // Filter out banned attributes
    const filtered = artworks.filter((art) => {
      const artist = art.people[0]?.name;
      return !(
        (banList.artist && banList.artist.includes(artist)) ||
        (banList.culture && banList.culture.includes(art.culture)) ||
        (banList.period && banList.period.includes(art.period)) ||
        (banList.medium && banList.medium.includes(art.medium))
      );
    });
    if (filtered.length > 0) {
      // Return a random artwork from the filtered list
      return filtered[Math.floor(Math.random() * filtered.length)];
    }
    attempts++;
  }
  // If no artwork found after max attempts, return null
  return null;
}
