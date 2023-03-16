async function getData() {
    let url = "https://api.coincap.io/v2/assets";
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderData() {
    let cryptocurrency = await getData();
    let html = "";
    cryptocurrency.data.forEach((cryptocurrency) => {
      let price = cryptocurrency.priceUsd;
      let fixed = Number(price).toFixed(2);
      let card = `<div class="card">
      <ul>
      <h2>${cryptocurrency.name}</h2>
          <li>Rank:${cryptocurrency.rank}</li>
          
          <li>Price:$ ${fixed}</li>
      </ul>
    </div>`;
                        
      html += card;
    });
  
    let container = document.querySelector(".main-section");
    container.innerHTML = html;
  }
  
  renderData();