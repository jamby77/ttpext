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
  nav.style.display = "flex";
  nav.style.justifyContent = "space-around";
  navList.style.display = "flex";
  navList.style.width = "60%";

  nav.appendChild(navList);
  navContainer.appendChild(nav);
  newDoc.style.margin = "2rem";
  newDoc.appendChild(title);
  newDoc.appendChild(navContainer);

  tabsTitles.forEach(function(tabTitle, idx) {
    if (idx === 0) return;
    const newTitle = document.createElement("h2");
    const titleSmall = document.createElement("span");
    titleSmall.textContent = tabTitle.textContent;
    const totop = document.createElement("a");
    const style = Object.assign({}, totop.style, {
      color: "red",
      height: "40px",
      width: "40px",
      background: "transparent",
      padding: "5px",
      border: "2px solid transparent",
      boxShadow: "1px 1px 1px 1px #0000003d",
      verticalAlign: "baseline"
    });
    console.log(style);
    totop.classList.add("dashicons", "dashicons-arrow-up-alt");
    totop.href = "#" + navid;
    newTitle.appendChild(titleSmall);
    newTitle.appendChild(totop);
    const titleId = "title-" + idx;
    const titleLink = document.createElement("li");
    titleLink.style.flexGrow = 1;
    titleLink.innerHTML = `<a href="#${titleId}">${tabTitle.textContent}</a>`;
    navList.appendChild(titleLink);
    newTitle.id = titleId;
    newTitle.style.marginTop = "5rem";
    newDoc.appendChild(newTitle);
    newDoc.appendChild(content[idx]);
  });

  document.body.innerHTML = newDoc.innerHTML;

  // window.print();
}

flattern();
