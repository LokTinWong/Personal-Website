fetch("members.json")
    .then(response => response.json())
    .then(data => {
    const memberList = document.getElementById("member-list");

    data.members.forEach(member => {
        const div = document.createElement("div");
        div.className = "member";

        // Add member's name.
        div.textContent = member.name;

        const bootCampImg = document.createElement("img");
        bootCampImg.className = "bootCampAward";
        
        // If member has the Boot Camp award, give corresponding badge, otherwise create an empty placeholder.
        if (member.hasBootCamp) {
            bootCampImg.src = "./bootCampAward.png";
            bootCampImg.alt = "Boot Camp award";
            bootCampImg.style.visibility = "visible";
        } else {
            bootCampImg.style.visibility = "hidden";
        }

        div.appendChild(bootCampImg);

        const veteranImg = document.createElement("img");
        veteranImg.className = "award";

        // If member has the Veteran award, give corresponding badge, otherwise create an empty placeholder.
        if (member.hasAward) {
            veteranImg.src = "./veteranAward.png";
            veteranImg.alt = "Veteranaward";
            veteranImg.style.visibility = "visible";
        } else {
            veteranImg.style.visibility = "hidden";
        }

        div.appendChild(veteranImg);

        const awardImg = document.createElement("img");
        awardImg.className = "award";

        // If member has the award, give corresponding badge, otherwise create an empty placeholder.
        if (member.hasAward) {
            awardImg.src = "./badge.jpg";
            awardImg.alt = "Arbitrary badge";
            awardImg.style.visibility = "visible";
        } else {
            awardImg.style.visibility = "hidden";
        }

        div.appendChild(awardImg);
        memberList.appendChild(div);
    });
  })
  .catch(error => console.error("Failed to load members:", error));