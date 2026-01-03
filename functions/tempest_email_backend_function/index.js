const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://tempest-company.vercel.app", // 🔐 change if needed
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };

  // ✅ HANDLE PREFLIGHT FOR ALL PATHS
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    return res.end();
  }

  // ❌ BLOCK EVERYTHING EXCEPT POST
  if (req.method !== "POST") {
    res.writeHead(405, {
      ...corsHeaders,
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({ error: "Only POST allowed" }));
  }

  try {
    // ✅ STREAM BODY (REQUIRED IN CATALYST)
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", chunk => (data += chunk));
      req.on("end", () => resolve(JSON.parse(data || "{}")));
      req.on("error", reject);
    });

    const { name, email, service, message, organization } = body;

    if (!name || !email || !service || !message) {
      res.writeHead(400, {
        ...corsHeaders,
        "Content-Type": "application/json"
      });
      return res.end(JSON.stringify({ error: "Missing required fields" }));
    }

    // ⚠️ DEV ONLY — replace with env vars later
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mokesh1811@gmail.com",
        pass: "tpxm zyue najb jidh"
      }
    });

    await transporter.sendMail({
      from: "mokesh1811@gmail.com",
      to: email,
      subject: "Thank you for contacting Tempest!",
      html: `
        <h3>Hello ${name}</h3>
        <p><b>Service:</b> ${service}</p>
        ${organization ? `<p><b>Organization:</b> ${organization}</p>` : ""}
        <p>${message}</p>
      `
    });

    res.writeHead(200, {
      ...corsHeaders,
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({
      success: true,
      message: "Email sent successfully"
    }));

  } catch (err) {
    console.error("Email error:", err);
    res.writeHead(500, {
      ...corsHeaders,
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({
      success: false,
      error: err.message
    }));
  }
};
