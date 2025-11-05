/*
    Brewly — Reviewed: 2025-11-05
    Simple accessible tab switcher used across pages.
    - id: tab button id
    - pid: parent id (tab list container)
    - cid: content container id
*/
function openTab(id, pid, cid) {
  // lightweight guard to avoid crashes when called incorrectly
  if (!id || !pid || !cid) return;
  const d = document.getElementById(id); // get tab
  if (!d) return;
  const c = document.getElementById(d.dataset.content);

  const activeTab = document.querySelector(`#${pid} .tab.active`);
  if (activeTab) activeTab.classList.remove("active");
  const activePanel = document.querySelector(`#${cid} .tab-content.active`);
  if (activePanel) activePanel.classList.remove("active");
  if (c) c.classList.add("active");
  d.classList.add("active");
}
