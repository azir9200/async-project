const loadInfo = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  console.log(data);
  const tubes = data.data;

  const tubeContainer = document.getElementById("button-container");
  tubes.forEach((category) => {
    const div = document.createElement("div");
    div.classList = "";
    div.innerHTML = `
     <button onclick="handleDataLoad()" class="btn">${category.category}</button>
    
    `;
    tubeContainer.appendChild(div);
  })
};

const handleDataLoad = async (categoryid) => {
  const response = await fetch('https://openapi.programming-hero.com/api/videos/category/${id}');
  const data = await response.json();
  const cardContainer =

    data.data.forEach((news){
      console.log(news);
    })
  console.log("data");
};



loadInfo();