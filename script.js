const SUPABASE_URL = "https://fljljaruasyoiubpavbw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsamxqYXJ1YXN5b2l1YnBhdmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNTEwMTIsImV4cCI6MjA5MjcyNzAxMn0.iyP3qZdOaHs7ZbwzqQr50UvDG3IrBKoDNT_SRbM7jkA";

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    document.getElementById("response").innerText = "Thank you, your message has been sent!";
  } else {
    document.getElementById("response").innerText = "Error sending message.";
  }
});
