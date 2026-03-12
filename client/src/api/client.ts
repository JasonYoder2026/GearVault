const API_URL = import.meta.env.API_URL;

export async function apiFetch(path: String, options = {}) {
  const res = await fetch(`${API_URL}${path}`, options);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}