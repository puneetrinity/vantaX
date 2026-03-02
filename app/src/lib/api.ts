const BASE = '/api';

export async function submitCandidate(formData: FormData) {
  const res = await fetch(`${BASE}/candidates`, { method: 'POST', body: formData });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Submission failed');
  }
  return res.json();
}

export async function submitCompany(data: Record<string, any>) {
  const res = await fetch(`${BASE}/companies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Submission failed');
  }
  return res.json();
}

export async function submitJury(data: Record<string, any>) {
  const res = await fetch(`${BASE}/jury`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Submission failed');
  }
  return res.json();
}
