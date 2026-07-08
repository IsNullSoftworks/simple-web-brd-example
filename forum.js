// Community forum: appends posted messages to the thread client-side.
document.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("forum-post");
  const nameEl = document.getElementById("forum-name");
  const msgEl = document.getElementById("forum-message");
  const list = document.getElementById("forum-posts");
  const countEl = document.getElementById("forum-count");
  const refreshCount = () => {
    if (!countEl) return;
    const n = list.children.length;
    countEl.textContent = n + (n === 1 ? " post" : " posts");
  };
  refreshCount();
  if (!postBtn || !nameEl || !msgEl || !list) return;

  postBtn.addEventListener("click", () => {
    const name = nameEl.value.trim() || "Anonymous";
    const message = msgEl.value.trim();
    if (!message) return;

    const li = document.createElement("li");
    li.className = "forum-post";
    const who = document.createElement("strong");
    who.textContent = name;
    const body = document.createElement("span");
    body.className = "forum-msg";
    body.textContent = message;
    li.appendChild(who);
    li.appendChild(body);

    const when = document.createElement("time");
    when.className = "forum-time";
    when.textContent = new Date().toLocaleTimeString();
    li.appendChild(when);
    list.appendChild(li);
    refreshCount();

    nameEl.value = "";
    msgEl.value = "";

  });
});
