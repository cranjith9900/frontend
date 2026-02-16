const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getHealth() {
  const res = await fetch(`${BASE_URL}/health`);
  return res.json();
}
export async function sayHello(name: string) {
  const res = await fetch("http://20.207.199.193:8000/say-hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("API failed");
  }

  return res.json();
}

export async function getNames() {
  const res = await fetch(`${BASE_URL}/names`);
  return res.json();
}

export async function addName(name: string) {
  const res = await fetch(`${BASE_URL}/names`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error("Failed to add name");
  return res.json();
}
