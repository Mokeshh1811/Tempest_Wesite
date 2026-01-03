const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // ❌ No CORS needed (server-to-server)
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Only POST allowed" }));
  }

  try {
    // 🔹 Read request body (Catalyst Advanced I/O)
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", chunk => (data += chunk));
      req.on("end", () => resolve(JSON.parse(data || "{}")));
      req.on("error", reject);
    });

    const { name, email, service, message, organization } = body;

    if (!name || !email || !service || !message) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Missing required fields" }));
    }

    // ⚠️ DEV ONLY — move to env vars in production
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

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      success: true,
      message: "Email sent successfully"
    }));

  } catch (err) {
    console.error("Email error:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      success: false,
      error: err.message
    }));
  }
};
