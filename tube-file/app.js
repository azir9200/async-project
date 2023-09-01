const loadInfo = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  console.log(data);
  const tubes = data.data;

  const tubeContainer = document.getElementById("button-container");
  tubes.forEach((category) => {
    const div = document.createElement("div");
    div.classList = "flex justify-center items-center gap-4 ";
    div.innerHTML = `
     <button  onclick="loadAll()" class="btn">${category.category}</button>
    
    `;
    tubeContainer.appendChild(div);

  });
};
const loadAll = (categoryid) => {
  console.log("categoryid");
};

loadInfo();