document.addEventListener("DOMContentLoaded", () => {
  hljs.initHighlightingOnLoad();
  const codeBlock = document.querySelector("#code");
  const copyButton = document.querySelector("#copy-button");
  const copySuccess = document.querySelector("#copy-success");

  const copyTextHandler = () => {
    const text = codeBlock.innerText;
    navigator.clipboard.writeText(text).then(() => {
      copySuccess.classList.add("show-message");
      setTimeout(() => {
        copySuccess.classList.remove("show-message");
      }, 2500);
    });
  };
  copyButton.addEventListener("click", copyTextHandler);
});
