const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
const url = process.env.NEXT_PUBLIC_API_URL;
// health
export async function getHealth() {
  const res = await fetch(`${BASE_URL}/health/`);

  if (!res.ok) {
    throw new Error("Health check failed");
  }

  return res.json();
}

// get all names
export async function getNames() {
  const res = await fetch(`${BASE_URL}/names/`, {
    cache: "no-store",
  });
  return res.json();
}

// add name
export async function addName(name: string) {
  const res = await fetch(`${BASE_URL}/names/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error("Failed to add name");

  return res.json();
}
