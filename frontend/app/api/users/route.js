import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request) {
  const body = await request.json();
  const { username, email, password } = body;

  try {
    const response = await axios.post(`${apiUrl}/api/users/register`, {
      username,
      email,
      password,
    });
    return new Response(JSON.stringify(response.data), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Next.js API route!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
