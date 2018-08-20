// TODO - scrape ALL training articles, add a menu at the top, which ones to show by track and date
function flattern() {
  const article = document.querySelector("article.post");
  if (!article) {
    return;
  }
  const title = article.querySelector(".entry-title");
  const tabsTitles = article.querySelectorAll("ul.et_pb_tabs_controls li");
  const content = article.querySelectorAll(
    "div.et_pb_all_tabs div.et_pb_tab_content"
  );

  const newDoc = document.createElement("body");
  const navContainer = document.createElement("div");
  const navid = "topnav";
  navContainer.id = navid;
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  nav.appendChild(navList);
  navContainer.appendChild(nav);
  if (title) {
    newDoc.appendChild(title);
  }

  newDoc.appendChild(navContainer);

  tabsTitles.forEach(function(tabTitle, idx) {
    if (idx === 0) return;
    const newTitle = document.createElement("h2");
    const titleSmall = document.createElement("span");
    titleSmall.textContent = tabTitle.textContent;
    const totop = document.createElement("a");

    totop.classList.add("dashicons", "dashicons-arrow-up-alt2", "gotop");
    totop.href = "#" + navid;
    newTitle.appendChild(titleSmall);
    newTitle.appendChild(totop);
    const titleId = "title-" + idx;
    const titleLink = document.createElement("li");
    titleLink.innerHTML = `<a href="#${titleId}">${tabTitle.textContent}</a>`;
    navList.appendChild(titleLink);
    newTitle.id = titleId;
    newDoc.appendChild(newTitle);
    newDoc.appendChild(content[idx]);
  });

  document.body.innerHTML = newDoc.innerHTML;
}

flattern();
