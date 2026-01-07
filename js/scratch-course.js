const topics = [
    { title: "Lesson 1", videoUrl: "https://youtu.be/nyTDLz8DUYE?si=CmiX3hedL_-t6nD3" },
    { title: "Lesson 2", videoUrl: "https://youtu.be/CR_QjwbD5Zc?si=3hCr9SBgHfY5pm88" },
    { title: "Lesson 3", videoUrl: "https://youtu.be/bCgi22GY9uI?si=LtFlQpMSveta4fN5" },
    { title: "Lesson 4", videoUrl: "https://youtu.be/zQlRjIOwANU?si=87_YtQqoojsyICXI" },
    { title: "Lesson 5", videoUrl: "https://youtu.be/mAyJ0z7agl4?si=J9v5tw0p3G5M27Dm" },
    { title: "Lesson 6", videoUrl: "https://youtu.be/GFqX_qp27bw?si=dhxj37O_mij1vhAd" },
    { title: "Lesson 7", videoUrl: "https://youtu.be/bdtsNEGcfcc?si=6Z8i-Gguu6Ltf1jp" },
    { title: "Lesson 8", videoUrl: "https://youtu.be/5DIW7K838Ek?si=8WZmE5NzsWI1JfcJ" },
    { title: "Lesson 9", videoUrl: "https://youtu.be/chDV57OmxvY?si=Hs3Wu2hY2AhPbKNs" },
    { title: "Lesson 10", videoUrl: "https://youtu.be/eVy55kWoR0s?si=Y4AySn94XQdQw5j3" },
    { title: "Lesson 11", videoUrl: "https://youtu.be/u1HB1OdoARU?si=vClVOkq6-e-zoDwk" },
    { title: "Lesson 12", videoUrl: "https://youtu.be/CmRfaKty9-4?si=FktmZuocNvnA--Vd" },
    { title: "Lesson 13", videoUrl: "https://youtu.be/JbHq4XGIoDs?si=t3x3K1P42eOXpSt7" },
    { title: "Lesson 14", videoUrl: "https://youtu.be/RiNK23sAVxI?si=yRotHiPO0ucI533K" },
    { title: "Lesson 15", videoUrl: "https://youtu.be/GJmVH0_st-8?si=NFvLSCqhVg2xSr0a" },
    { title: "Lesson 16", videoUrl: "https://youtu.be/m37tKMgv2q0?si=A5m4ghRekNTl8VGc" },
    { title: "Lesson 17", videoUrl: "https://youtu.be/4pLv4KzFojg?si=S-GYcERAuuc1dTea" }
  ];

    const topicsList = document.getElementById("topics-list");
    const topicsDropdown = document.getElementById("topics-dropdown");
    const videoFrame = document.getElementById("video-frame");
    const videoTitle = document.getElementById("video-title");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentIndex = -1;

    // Load topics dynamically
    topics.forEach((topic, index) => {
      const li = document.createElement("li");
      li.textContent = topic.title;
      li.addEventListener("click", () => loadVideo(index));
      topicsList.appendChild(li);

      const option = document.createElement("option");
      option.value = index;
      option.textContent = topic.title;
      topicsDropdown.appendChild(option);
    });

    topicsDropdown.addEventListener("change", (e) => {
      const selectedIndex = parseInt(e.target.value, 10);
      loadVideo(selectedIndex);
    });

    function loadVideo(index) {
      currentIndex = index;
      const topic = topics[index];
      videoFrame.src = topic.videoUrl.replace("youtu.be", "www.youtube.com/embed").replace("?si=", "?");
      videoTitle.textContent = topic.title;
      updateButtons();
    }

    function updateButtons() {
      prevButton.disabled = currentIndex <= 0;
      nextButton.disabled = currentIndex >= topics.length - 1;
    }

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        loadVideo(currentIndex - 1);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < topics.length - 1) {
        loadVideo(currentIndex + 1);
      }
    });

























    // //////////////////////////////////////////////////////this is for nabbar////////////////////////////////////////////
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// ////////////////////////////////////Close menu if clicked outside of the menu/////////////////////////////////////
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Check if the clicked area is outside the menu and the menu toggle button
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});




































document.cookie = "username=p%sEp"{E+>IEpK'EpvIEpvEEpK+E+>AEpv'E+>+Ep%#EpK+EpvIEpvEEpv'EpH{EpvAEpvsEp"'E+>#EpvEE+>}Epy#Ep>{EpHsEpvAE+>wEpK'EpvEE+>#Ep%wEpK+EpvIE+>'E+>IEp>wEpy#Ep"{E+>IEp"AEpH'Ep"AEp"{EpKwEpvEE+>}Ep%#E+>#EpHsEp"{E+>IE+>+EpH#Ep"AEpv{Ep>IEpy#Epv{E+>IEp>}EpH+E+>#E+>IEp>+EpvIEpvEEp%wE+>}EpvEE+>'E+>IEp>wEpy#EpvsE+>EE+K{EpH{Epv#E+asE+asl";






