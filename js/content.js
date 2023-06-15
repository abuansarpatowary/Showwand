const url = window.location.href;
if (url.includes("twitter.com")) {
  const getTwitterUsername = () => {
    const urlPath = window.location.pathname;
    const urlPathArray = urlPath.split("/");
    const twitterUsername = urlPathArray[1];
    return twitterUsername;
  };

  const getTwitterFullName = () => {
    const twitterFullNameSelector = "div[data-testid='primaryColumn'] h2";
    const twitterFullName = document.querySelector(
      twitterFullNameSelector
    )?.textContent;
    return twitterFullName;
  };

  const addShowcaseProfileIcon = () => {
    const twitterUsername = getTwitterUsername();
    const twitterFullName = getTwitterFullName();
    console.log(twitterFullName);
    if (twitterUsername) {
      console.log(twitterUsername);
      let user = null;
      const showCaseRes = fetch(
        `https://cache.showwcase.com/search?term=${twitterFullName}`
      ).then((res) => res.json());
      showCaseRes.then((res) => {
        console.log(res);
        const displayNameMatch = res.find(
          (u) => u.displayName === twitterFullName
        );
        const usernameMatch = res.find((u) => u.username === twitterUsername);
        console.log(displayNameMatch);
        console.log(usernameMatch);
        if (
          displayNameMatch &&
          usernameMatch &&
          displayNameMatch.id === usernameMatch.id
        ) {
          user = displayNameMatch;
        } else if (displayNameMatch) {
          user = displayNameMatch;
        } else if (usernameMatch) {
          user = usernameMatch;
        }
        if (user) {
          removeShowcaseProfileButton(); // Remove previously inserted button
          const button = document.createElement("a");
          button.innerHTML = `<div aria-label="Showwcase" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-6gpygo r-1kb76zh r-2yi16 r-1qi8awa r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr" data-testid="sendDMFromProfile" style="border-color: rgb(83, 100, 113);"><div dir="ltr" class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0" style="color: rgb(239, 243, 244);">
        <svg class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4047 2.31705C12.1525 2.17947 12.907 2.08162 13.6651 2.02393C13.8366 2.01081 13.956 1.98233 14.0299 1.86169C14.1547 1.65882 14.3768 1.58074 14.6859 1.5577C15.5179 1.49562 16.3432 1.49114 17.1771 1.54842C17.5793 1.57626 17.8475 1.67834 18.0017 1.94297C18.0625 2.04697 18.1671 2.08537 18.3239 2.09657C18.6513 2.11961 18.9767 2.15481 19.3012 2.19801C19.7226 2.25433 20.1399 2.32569 20.5773 2.39737C20.5018 2.14297 20.3844 1.92761 20.2522 1.71609C19.7473 0.908746 18.9374 0.358674 17.7326 0.135637C16.8273 -0.0317204 15.9112 -0.0170006 14.9934 0.0361187C14.419 0.0693982 13.8709 0.183317 13.3592 0.380434C12.293 0.790028 11.7685 1.48954 11.4044 2.31705H11.4047ZM0.633951 3.05496C0.996241 3.19182 1.33625 3.38161 1.6429 3.61815C2.31329 4.1311 2.77472 4.74293 3.20223 5.36916C3.67743 6.06483 4.0515 6.79154 4.40414 7.52785C4.47422 7.48529 4.47934 7.43441 4.49438 7.38513C4.67421 6.80274 4.88541 6.22643 5.15581 5.66196C5.63548 4.66197 6.27739 3.73719 7.44601 3.05784C7.56345 2.98968 7.55385 2.942 7.46713 2.86168C7.0969 2.51864 6.69723 2.19609 6.23099 1.92089C5.86236 1.70362 5.43868 1.59354 4.95709 1.60154C3.89983 1.61882 2.93792 1.86809 2.02593 2.23417C1.5005 2.44504 1.01155 2.69176 0.633951 3.05496ZM14.5438 2.33273L14.4344 2.34873C14.4181 2.34521 14.4011 2.33721 14.3854 2.33785C13.0005 2.41369 11.6264 2.5356 10.2927 2.83448C8.86423 3.15447 7.76185 3.77623 6.99578 4.70901C6.38587 5.45204 6.05243 6.27315 5.74844 7.09938C5.43068 7.96273 5.20989 8.84271 5.01373 9.72462C4.69693 11.1483 4.4563 12.5796 4.22974 14.0116C4.06713 15.056 3.91608 16.1021 3.77663 17.1498C3.57535 18.6365 3.39647 20.1242 3.38303 21.6201C3.37055 22.9324 3.41087 24.2409 3.96862 25.5078C4.33438 26.3385 4.96381 27.0213 6.02299 27.4764C7.12058 27.948 8.32184 28.2028 9.5519 28.3944C11.3736 28.6783 13.2248 28.7717 15.0827 28.7932C17.0795 28.8162 19.0746 28.7813 21.0557 28.5717C22.5082 28.4181 23.9325 28.1845 25.2803 27.7445C26.5056 27.3445 27.3996 26.7212 27.886 25.7948C28.3692 24.8754 28.5344 23.9164 28.5907 22.9462C28.7177 20.7542 28.4259 18.5763 28.1193 16.4004C27.8944 14.8033 27.6502 13.2075 27.3549 11.6158C27.1741 10.6424 26.9824 9.67086 26.7305 8.70608C26.4377 7.58609 26.0905 6.47731 25.4893 5.41876C24.7568 4.12854 23.5248 3.21751 21.6541 2.8268C19.3297 2.34169 16.9502 2.22425 14.5438 2.33273ZM29.1852 15.8285C29.1862 15.9556 29.1916 16.0826 29.2364 16.2064L29.3839 17.2276C29.3628 17.2922 29.3734 17.353 29.4159 17.4356C29.4505 17.3498 29.526 17.3012 29.5023 17.2295L29.9503 15.6311C29.9814 15.5722 30.0108 15.5133 29.9945 15.4487C30.0812 15.3028 30.1011 15.1447 30.1545 14.9927C30.4796 14.0721 30.701 13.1367 30.9097 12.1998C31.1394 11.1688 31.3375 10.1336 31.5926 9.10575C31.9061 7.84177 32.0469 6.57139 31.9861 5.2898C31.9634 4.81557 31.9324 4.33846 31.757 3.84566C31.6108 3.92854 31.4828 3.99062 31.3711 4.06582C30.8559 4.41366 30.4905 4.84277 30.1631 5.28692C29.2307 6.55187 28.6256 7.90929 28.0604 9.27727C28.0316 9.34671 28.0483 9.41295 28.0646 9.48174C28.3571 10.7227 28.5696 11.9713 28.7705 13.2212C28.9103 14.0903 29.047 14.9594 29.1852 15.8285ZM0.089319 4.17846C-0.00411971 4.44982 0.000680214 4.72725 4.02234e-05 5.00373C-0.00315973 6.25971 0.184998 7.50417 0.410914 8.74767C0.607072 9.8283 0.879708 10.8984 1.1453 11.9697C1.40055 13.0104 1.66701 14.0483 1.94465 15.0833C2.21153 16.0685 2.30785 17.0663 2.40929 18.0643C2.41665 18.1373 2.39969 18.2157 2.46945 18.2883C2.48289 18.2679 2.50016 18.2531 2.50208 18.2371C2.68377 16.7746 2.89245 15.3154 3.128 13.8606C3.35775 12.442 3.57695 11.0228 3.90078 9.61358C3.94334 9.42959 3.99582 9.24975 3.90014 9.05679C3.71327 8.67856 3.57215 8.2888 3.39231 7.90865C2.91648 6.90322 2.40993 5.9058 1.65026 4.99029C1.34274 4.61909 1.02435 4.24982 0.531873 3.9855C0.419874 3.91574 0.298276 3.79191 0.164838 3.83542C0.0537995 3.8719 0.0941189 4.0239 0.0726792 4.12534C0.0694792 4.14198 0.083239 4.16054 0.089319 4.17846ZM29.7529 2.18265C28.7124 1.81955 27.6171 1.63876 26.5152 1.64826C26.1967 1.64869 25.885 1.7403 25.617 1.91225C25.1606 2.20441 24.8435 2.57048 24.5719 2.96088C24.5162 3.04088 24.576 3.0732 24.6464 3.11543C24.9568 3.30041 25.2457 3.51924 25.5078 3.76791C26.4093 4.62613 26.8701 5.62484 27.2502 6.64882C27.3661 6.96114 27.4694 7.2757 27.592 7.62801C27.9644 6.86194 28.3241 6.13459 28.7958 5.44116C29.3692 4.59797 29.9862 3.77559 31.0614 3.19863L31.2009 3.13399L31.3218 3.08536C31.4338 3.05592 31.366 3.02616 31.3218 2.9964C31.2998 2.9324 31.2418 2.8876 31.1727 2.84824C31.1158 2.7692 31.0246 2.71608 30.9199 2.67288C30.6863 2.51384 30.4143 2.39769 30.1257 2.30041C30.0063 2.25305 29.8972 2.18841 29.7529 2.18265Z" fill="#F1F1F1"/>
</svg><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"></span></div></div>`;
          button.setAttribute("href", `https://showwcase.com/${user.username}`);
          button.setAttribute("target", "_blank");
          button.setAttribute("id", "showwcase-profile-button"); // Add an ID to the button for easy removal
          const profileContainer = document.querySelector(".r-1h0z5md");
          profileContainer.prepend(button);
        }
      });
    } else {
      console.log("No username found");
    }
  };

  const removeShowcaseProfileButton = () => {
    const existingButton = document.getElementById("showwcase-profile-button");
    if (existingButton) {
      existingButton.remove();
    }
  };

  const observeURLChanges = () => {
    let currentURL = window.location.href;

    setInterval(() => {
      let newURL = window.location.href;
      if (newURL !== currentURL) {
        currentURL = newURL;
        removeShowcaseProfileButton();
        addShowcaseProfileIcon();
      }
    }, 2000); // Check for URL changes every second
  };

  // Execute the code when the Twitter page is initially loaded
  window.onload = () => {
    setTimeout(() => {
      addShowcaseProfileIcon();
      observeURLChanges();
    }, 4000); // Delay of 4 seconds (4000 milliseconds)
  };
} else if (url.includes("linkedin.com")) {
  const getLinkedInUsername = () => {
    const urlPath = window.location.pathname;
    const urlPathArray = urlPath.split("/");
    const linkedinUsername = urlPathArray[2];
    return linkedinUsername;
  };

  const getLinkedInFullName = () => {
    const linkedinFullNameSelector =
      ".text-heading-xlarge.inline.t-24.v-align-middle.break-words";
    const linkedinFullName = document.querySelector(
      linkedinFullNameSelector
    )?.textContent;
    return linkedinFullName;
  };

const addShowcaseProfileIcon = () => {
  const linkedinUsername = getLinkedInUsername();
  const linkedinFullName = getLinkedInFullName();
  console.log(linkedinFullName);
  if (linkedinUsername) {
    console.log(linkedinUsername);
    const showCaseRes = fetch(
      `https://cache.showwcase.com/search?term=${linkedinFullName}`
    ).then((res) => res.json());
    showCaseRes.then((res) => {
      console.log(res);
      const usernameMatch = res.find((u) => u.username === linkedinUsername);
      const displayNameMatch = res.find(
        (u) => u.displayName === linkedinFullName
      );
      console.log(usernameMatch);
      console.log(displayNameMatch);
      let user = usernameMatch || displayNameMatch || res[0];
      if (user) {
        removeShowcaseProfileButton(); // Remove previously inserted button
        const button = document.createElement("a");
        button.innerHTML = `<div class="entry-point pvs-profile-actions__action">
<div></div>
<button id="ember84" class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view">
  <li-icon aria-hidden="true" type="send-privately" class="artdeco-button__icon" size="small">
<svg class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 32 29" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4047 2.31705C12.1525 2.17947 12.907 2.08162 13.6651 2.02393C13.8366 2.01081 13.956 1.98233 14.0299 1.86169C14.1547 1.65882 14.3768 1.58074 14.6859 1.5577C15.5179 1.49562 16.3432 1.49114 17.1771 1.54842C17.5793 1.57626 17.8475 1.67834 18.0017 1.94297C18.0625 2.04697 18.1671 2.08537 18.3239 2.09657C18.6513 2.11961 18.9767 2.15481 19.3012 2.19801C19.7226 2.25433 20.1399 2.32569 20.5773 2.39737C20.5018 2.14297 20.3844 1.92761 20.2522 1.71609C19.7473 0.908746 18.9374 0.358674 17.7326 0.135637C16.8273 -0.0317204 15.9112 -0.0170006 14.9934 0.0361187C14.419 0.0693982 13.8709 0.183317 13.3592 0.380434C12.293 0.790028 11.7685 1.48954 11.4044 2.31705H11.4047ZM0.633951 3.05496C0.996241 3.19182 1.33625 3.38161 1.6429 3.61815C2.31329 4.1311 2.77472 4.74293 3.20223 5.36916C3.67743 6.06483 4.0515 6.79154 4.40414 7.52785C4.47422 7.48529 4.47934 7.43441 4.49438 7.38513C4.67421 6.80274 4.88541 6.22643 5.15581 5.66196C5.63548 4.66197 6.27739 3.73719 7.44601 3.05784C7.56345 2.98968 7.55385 2.942 7.46713 2.86168C7.0969 2.51864 6.69723 2.19609 6.23099 1.92089C5.86236 1.70362 5.43868 1.59354 4.95709 1.60154C3.89983 1.61882 2.93792 1.86809 2.02593 2.23417C1.5005 2.44504 1.01155 2.69176 0.633951 3.05496ZM14.5438 2.33273L14.4344 2.34873C14.4181 2.34521 14.4011 2.33721 14.3854 2.33785C13.0005 2.41369 11.6264 2.5356 10.2927 2.83448C8.86423 3.15447 7.76185 3.77623 6.99578 4.70901C6.38587 5.45204 6.05243 6.27315 5.74844 7.09938C5.43068 7.96273 5.20989 8.84271 5.01373 9.72462C4.69693 11.1483 4.4563 12.5796 4.22974 14.0116C4.06713 15.056 3.91608 16.1021 3.77663 17.1498C3.57535 18.6365 3.39647 20.1242 3.38303 21.6201C3.37055 22.9324 3.41087 24.2409 3.96862 25.5078C4.33438 26.3385 4.96381 27.0213 6.02299 27.4764C7.12058 27.948 8.32184 28.2028 9.5519 28.3944C11.3736 28.6783 13.2248 28.7717 15.0827 28.7932C17.0795 28.8162 19.0746 28.7813 21.0557 28.5717C22.5082 28.4181 23.9325 28.1845 25.2803 27.7445C26.5056 27.3445 27.3996 26.7212 27.886 25.7948C28.3692 24.8754 28.5344 23.9164 28.5907 22.9462C28.7177 20.7542 28.4259 18.5763 28.1193 16.4004C27.8944 14.8033 27.6502 13.2075 27.3549 11.6158C27.1741 10.6424 26.9824 9.67086 26.7305 8.70608C26.4377 7.58609 26.0905 6.47731 25.4893 5.41876C24.7568 4.12854 23.5248 3.21751 21.6541 2.8268C19.3297 2.34169 16.9502 2.22425 14.5438 2.33273ZM29.1852 15.8285C29.1862 15.9556 29.1916 16.0826 29.2364 16.2064L29.3839 17.2276C29.3628 17.2922 29.3734 17.353 29.4159 17.4356C29.4505 17.3498 29.526 17.3012 29.5023 17.2295L29.9503 15.6311C29.9814 15.5722 30.0108 15.5133 29.9945 15.4487C30.0812 15.3028 30.1011 15.1447 30.1545 14.9927C30.4796 14.0721 30.701 13.1367 30.9097 12.1998C31.1394 11.1688 31.3375 10.1336 31.5926 9.10575C31.9061 7.84177 32.0469 6.57139 31.9861 5.2898C31.9634 4.81557 31.9324 4.33846 31.757 3.84566C31.6108 3.92854 31.4828 3.99062 31.3711 4.06582C30.8559 4.41366 30.4905 4.84277 30.1631 5.28692C29.2307 6.55187 28.6256 7.90929 28.0604 9.27727C28.0316 9.34671 28.0483 9.41295 28.0646 9.48174C28.3571 10.7227 28.5696 11.9713 28.7705 13.2212C28.9103 14.0903 29.047 14.9594 29.1852 15.8285ZM0.089319 4.17846C-0.00411971 4.44982 0.000680214 4.72725 4.02234e-05 5.00373C-0.00315973 6.25971 0.184998 7.50417 0.410914 8.74767C0.607072 9.8283 0.879708 10.8984 1.1453 11.9697C1.40055 13.0104 1.66701 14.0483 1.94465 15.0833C2.21153 16.0685 2.30785 17.0663 2.40929 18.0643C2.41665 18.1373 2.39969 18.2157 2.46945 18.2883C2.48289 18.2679 2.50016 18.2531 2.50208 18.2371C2.68377 16.7746 2.89245 15.3154 3.128 13.8606C3.35775 12.442 3.57695 11.0228 3.90078 9.61358C3.94334 9.42959 3.99582 9.24975 3.90014 9.05679C3.71327 8.67856 3.57215 8.2888 3.39231 7.90865C2.91648 6.90322 2.40993 5.9058 1.65026 4.99029C1.34274 4.61909 1.02435 4.24982 0.531873 3.9855C0.419874 3.91574 0.298276 3.79191 0.164838 3.83542C0.0537995 3.8719 0.0941189 4.0239 0.0726792 4.12534C0.0694792 4.14198 0.083239 4.16054 0.089319 4.17846ZM29.7529 2.18265C28.7124 1.81955 27.6171 1.63876 26.5152 1.64826C26.1967 1.64869 25.885 1.7403 25.617 1.91225C25.1606 2.20441 24.8435 2.57048 24.5719 2.96088C24.5162 3.04088 24.576 3.0732 24.6464 3.11543C24.9568 3.30041 25.2457 3.51924 25.5078 3.76791C26.4093 4.62613 26.8701 5.62484 27.2502 6.64882C27.3661 6.96114 27.4694 7.2757 27.592 7.62801C27.9644 6.86194 28.3241 6.13459 28.7958 5.44116C29.3692 4.59797 29.9862 3.77559 31.0614 3.19863L31.2009 3.13399L31.3218 3.08536C31.4338 3.05592 31.366 3.02616 31.3218 2.9964C31.2998 2.9324 31.2418 2.8876 31.1727 2.84824C31.1158 2.7692 31.0246 2.71608 30.9199 2.67288C30.6863 2.51384 30.4143 2.39769 30.1257 2.30041C30.0063 2.25305 29.8972 2.18841 29.7529 2.18265Z" fill="#F1F1F1"/>
</svg>
</li-icon>
  <span class="artdeco-button__text">
    Showwcase
  </span>
</button>
</div>`;
        button.setAttribute("href", `https://showwcase.com/${user.username}`);
        button.setAttribute("target", "_blank");
        button.setAttribute("id", "showwcase-profile-button"); // Add an ID to the button for easy removal
        const profileContainer = document.querySelector(".pvs-profile-actions");
        profileContainer.prepend(button);
      }
    });
  } else {
    console.log("No username found");
  }
};

  const removeShowcaseProfileButton = () => {
    const existingButton = document.getElementById("showwcase-profile-button");
    if (existingButton) {
      existingButton.remove();
    }
  };

  const observeURLChanges = () => {
    let currentURL = window.location.href;

    setInterval(() => {
      let newURL = window.location.href;
      if (newURL !== currentURL) {
        currentURL = newURL;
        removeShowcaseProfileButton();
        addShowcaseProfileIcon();
      }
    }, 2000); // Check for URL changes every 2 second
  };

  // Execute the code when the LinkedIn page is initially loaded
  window.onload = () => {
    setTimeout(() => {
      addShowcaseProfileIcon();
      observeURLChanges();
    }, 5000); // Delay of 4 seconds (4000 milliseconds)
  };
}
