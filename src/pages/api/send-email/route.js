export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://tempest-email-backend-60062823191.development.catalystserverless.in/server/tempest_email_backend_function/api/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: "Proxy error" }),
      { status: 500 }
    );
  }
}
