const API_KEY = "live_QUJawf9Uu526nUL6QlOPtPuWjJrWY9WW5Zsg5jyWpqkJmfiXDfKFzTXc5ozvkCLC";
const BASE_URL = "https://api.thecatapi.com/v1/images/search";

export async function fetchCats({ limit = 10, breed = "" } = {}) {
  const params = new URLSearchParams({
    limit,
    ...(breed && { breed_ids: breed })
  });
  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: { "x-api-key": API_KEY }
  });
  if (!res.ok) throw new Error("Failed to fetch cats");
  return res.json();
} 