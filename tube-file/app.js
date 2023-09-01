const loadInfo = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  const tubes = data.data;
  console.log(tubes);

  const tubeContainer = document.getElementById("button-container");
  tubes.forEach((category) => {
    console.log(tubes);
    const div = document.createElement("div");
    //div.classList = "flex justify-center items-center gap-4 ";
    div.innerHTML = `
       <button  onclick="loadAllLinks('${category.category_id}')" class="btn">${category.category}</button>

      `;
    tubeContainer.appendChild(div);

  });
};
const loadAllLinks = async (categoryid) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryid}`);
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement('div');
    div.classList = `w-66 gap-4 `;
    div.innerHTML = `
     <figure><img class=" w-56" src=${news.thumbnail} /></figure>
      <div class="card-body">
       <h2 class="card-title"> ${news.authors[0].profile_picture} </h2>
       <h2 class="card-title"> ${news.others.thumbnail
      } </h2>
       <h2 class="card-title"> ${news.authors[0].profile_name} </h2>
       <h2 class="card-title"> ${news.others
        .title} </h2>
             
       <div class="name">${news.others.posted_date}</div>
       <div class="views"></div>
      
       </div>
   `;
    cardContainer.appendChild(div);
  })
};

loadInfo();