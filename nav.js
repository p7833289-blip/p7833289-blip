// 上方細條：選單按鈕 + 名字
document.getElementById("site-nav").innerHTML = `
  <button class="menu-btn" aria-label="開啟選單">☰</button>
  <span class="site-name">黃靖文</span>
`;

// 左側滑出選單 + 後面的暗色遮罩
document.body.insertAdjacentHTML("beforeend", `
  <div class="overlay"></div>
  <aside class="sidebar" aria-label="網站選單">
    <div class="sidebar-head">
      <span class="sidebar-title">選單</span>
      <button class="sidebar-close" aria-label="關閉選單">✕</button>
    </div>
    <a href="index.html">首頁</a>
    <a href="about.html">關於我</a>
    <a href="resume.html">個人履歷</a>
    <a href="research.html">研究</a>
    <details class="side-group">
      <summary>更多</summary>
      <a href="activities.html">活動經歷</a>
      <a href="gallery.html">相簿</a>
    </details>
    <a href="contact.html">聯絡我</a>
  </aside>
`);

// 打開、關閉選單
function openMenu() { document.body.classList.add("menu-open"); }
function closeMenu() { document.body.classList.remove("menu-open"); }
document.querySelector(".menu-btn").addEventListener("click", openMenu);
document.querySelector(".sidebar-close").addEventListener("click", closeMenu);
document.querySelector(".overlay").addEventListener("click", closeMenu);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

// 目前所在的頁面，按鈕會亮起來
var page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".sidebar a").forEach(function (a) {
  if (a.getAttribute("href") === page) {
    a.classList.add("active");
    var group = a.closest(".side-group");
    if (group) group.open = true;
  }
});
