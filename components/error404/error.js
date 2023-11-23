export function createErrorMessage() {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("background-img");
  errorMessage.innerHTML = `
   
    <div class="space"></div>
        <div class="wrapper">
            <div class="img-wrapper">
                <span>4o4</span>
            </div>
            <p>The page you are trying to search has been <br> moved to another universe.</p>
            <a href="./index.html" class="errorbutton">GET ME HOME</a>
        </div>
    `;
  return errorMessage;
}
