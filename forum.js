// Community forum: appends posted messages to the thread client-side.
document.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("forum-post");
  const nameEl = document.getElementById("forum-name");
  const msgEl = document.getElementById("forum-message");
  const list = document.getElementById("forum-posts");
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

    let postedAt;
    const when = document.createElement("time");
    when.className = "forum-time";
    when.textContent = new Date(postedAt).toLocaleTimeString();
    li.appendChild(when);
    list.appendChild(li);

    nameEl.value = "";
    msgEl.value = "";
  });
});
