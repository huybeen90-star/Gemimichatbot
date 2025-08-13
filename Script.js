const API_KEY = "AIzaSyAFEYqsCjBlJfzI2xL3JSrhCnf2o3f34mE"; // Gemini API
const MODEL = "gemini-2.0-flash";

async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;
  
  addMessage("Bạn", text, "user");
  input.value = "";

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text }] }] })
  });

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lỗi khi nhận phản hồi.";
  addMessage("Gemini", reply, "bot");
}

function addMessage(sender, text, cls) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");
  div.className = "message " + cls;
  div.innerHTML = `<b>${sender}:</b> ${text}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
