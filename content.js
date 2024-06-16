// if url is matched then click on that url "https://www.linkedin.com/mynetwork/?"

let anchorTags = document.querySelectorAll("a");
anchorTags.forEach(function (anchor) {
  if (anchor.href === "https://www.linkedin.com/mynetwork/?") {
    anchor.click();
  }
});

// click on button by id

let connectBtnById = document.querySelector("#ember664"); // ID will be differents
connectBtnById.click();

// get all id of connect button class

function checkAndRetrieveIds() {
  let inviteButtons = document.querySelectorAll(
    ".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width"
  );
  inviteButtons.forEach((btn) => {
    let id = btn.id;
    let btnText = btn.innerText;
    if (btnText === "Connect") {
      console.log(`ID: ${id}`);
    }
  });
}
checkAndRetrieveIds();

// get and clicked on the connect button in every 5 sec

function checkAndClickConnectButtons() {
  let inviteButtons = document.querySelectorAll(
    ".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width"
  );

  let connectButtons = [];

  inviteButtons.forEach((btn) => {
    let btnText = btn.innerText;
    if (btnText === "Connect") {
      connectButtons.push(btn);
    }
  });

  let index = 0;

  function clickNextButton() {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      console.log(`Clicked button with ID: ${connectButtons[index].id}`);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }

  let intervalId = setInterval(clickNextButton, 5000);
}

checkAndClickConnectButtons();

// check if for the keyword in user occupation

let occupation = document.querySelectorAll(".discover-person-card__occupation");
occupation.forEach((e) => {
  let keyword = e.innerText.includes("React");
  console.log(keyword);
  if (keyword) {
    console.log(e.innerText);
  }
});

// click on search btn

let searchBtn = document.querySelector(
  ".search-global-typeahead__collapsed-search-button"
);
searchBtn.click();

// click on search btn and focus search input field

setTimeout(() => {
  let searchBtn = document.querySelector(
    ".search-global-typeahead__collapsed-search-button"
  );
  searchBtn.click();
  let searchInputField = document
    .querySelector(".search-global-typeahead__input")
    .focus();
}, 5000);
