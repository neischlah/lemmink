function saveOptions(e) {
  debugger;
  e.preventDefault();
  browser.storage.sync.set({
    lemmyUrl: document.querySelector("#lemmyUrl").value,
  });
}

const restoreOptions = () => {
  browser.storage.sync.get("lemmyUrl").then(
    (result) => {
      document.querySelector("#lemmyUrl").value = result.lemmyUrl || "";
    },
    (error) => console.log(`Error: ${error}`)
  );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
