const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // ---------- CORS ----------
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    return res.end();
  }

  if (req.method !== "POST") {
    res.writeHead(405, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({ error: "Only POST allowed" }));
  }

  try {
    // ---------- READ BODY STREAM (THE REAL FIX) ----------
    const body = await new Promise((resolve, reject) => {
      let data = "";

      req.on("data", chunk => {
        data += chunk;
      });

      req.on("end", () => {
        try {
          resolve(JSON.parse(data || "{}"));
        } catch (e) {
          reject(new Error("Invalid JSON body"));
        }
      });

      req.on("error", reject);
    });

    console.log("Parsed body:", body);

    const { name, email, service, message, organization } = body;

    if (!name || !email || !service || !message) {
      res.writeHead(400, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      });
      return res.end(JSON.stringify({
        error: "Missing required fields",
        received: body
      }));
    }

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
        <h2>Thank you for contacting Tempest</h2>
        <p>Dear <b>${name}</b>,</p>
        <p>We received your enquiry about <b>${service}</b>.</p>
        ${organization ? `<p><b>Organization:</b> ${organization}</p>` : ""}
        <p><b>Your message:</b></p>
        <p>${message}</p>
        <br/>
        <p>— Tempest Team</p>
      `
    });

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({
      success: true,
      message: "Email sent successfully"
    }));

  } catch (err) {
    console.error("Email error:", err);
    res.writeHead(500, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    return res.end(JSON.stringify({
      success: false,
      error: err.message
    }));
  }
};
