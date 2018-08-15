window.onload = function() {
  const article = document.querySelector("article.post");
  const title = article.querySelector("h2");
  const tabsTitles = article.querySelectorAll("ul.et_pb_tabs_controls li");
  const content = article.querySelectorAll(
    "div.et_pb_all_tabs div.et_pb_tab_content"
  );

  const newDoc = document.createElement("body");
  newDoc.style.margin = "2rem";
  newDoc.appendChild(title);
  tabsTitles.forEach(function(tabTitle, idx) {
    if (idx === 0) return;
    const newTitle = document.createElement("h2");
    newTitle.style.marginTop = "5rem";
    newTitle.textContent = tabTitle.textContent;
    newDoc.appendChild(newTitle);
    newDoc.appendChild(content[idx]);
  });

  document.body = newDoc;
};
