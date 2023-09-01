const loadInfo = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  console.log(data);
  const tubes = data.data;

  const tubeContainer = document.getElementById("button-container");
  tubes.forEach((category) => {
    console.log(tubes);
    const div = document.createElement("div");
    div.classList = "flex justify-center items-center gap-4 ";
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
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(div);
  })
};

loadInfo();