const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined. Check your .env file.");
}

export async function apiFetch(path: String, options = {}) {
  const res = await fetch(`${API_URL}${path}`, options);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}