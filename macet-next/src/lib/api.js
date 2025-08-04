// ✅ GET request
export async function fetchFromApi(endpoint, section = '') {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
  const token = process.env.NEXT_PUBLIC_API_BEARER_TOKEN;

  if (!baseUrl || !token) {
    throw new Error('API base URL or token is not defined.');
  }

  const url = `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${section || 'data'}: ${res.statusText}`);
  }

  return await res.json();
}

// ✅ POST request
export async function postToApi(endpoint, data, section = '') {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
  const token = process.env.NEXT_PUBLIC_API_BEARER_TOKEN;

  if (!baseUrl || !token) {
    throw new Error('API base URL or token is not defined.');
  }

  const url = `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to post ${section || 'data'}: ${res.status} - ${errorText}`);
  }

  return await res.json();
}
