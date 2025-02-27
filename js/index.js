console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comment-form");
  const input = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  const submitButton = document.querySelector("button[type='button']");
  const resetButton = document.querySelector("button[type='reset']");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const newCommentText = input.value.trim();
    if (newCommentText === "") return;

    const newComment = document.createElement("li");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${newCommentText}</div>
      </div>
    `;

    commentList.appendChild(newComment);

    input.value = "";
  });

  resetButton.addEventListener("click", function () {
    input.value = "";
  });
});

document.addEventListener("scroll", function () {
  const sidebar = document.querySelector("aside.right-sidebar nav");
  const scrollY = window.scrollY;
  const offset = 50;

  if (scrollY > offset) {
    sidebar.style.position = "fixed";
    sidebar.style.top = "350px";
  } else {
    sidebar.style.position = "absolute";
    sidebar.style.top = "350px";
  }
});
