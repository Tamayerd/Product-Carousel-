(() => {
  const loaders = document.getElementsByClassName("loader");
  const container = document.getElementsByClassName("container");
  const right = document.querySelector(".arrow-right");
  const left = document.querySelector(".arrow-left");
  const loadMoreButton = document.querySelector(".load-more-button");
  const apiUrl = "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json";
  let currentIndex = 0;
  let apiRequest;

  const initRecommender = () => {
    
  const getRequest = async () => {
    handleLoading(true);

    try {
      const response = await fetch(apiUrl);
      apiRequest = await response.json();

      window.localStorage.setItem('request', JSON.stringify(apiRequest));
    
    } catch (error) {
      console.error(error);
    }


    right.addEventListener("click", rightButton);
    left.addEventListener("click", leftButton);

    buildHTML();
    handleLoading(false);
  };
   loadMoreButton.addEventListener("click", loadMore);
  getRequest();
  };

  const handleLoading = (isElementHidden) => {
    Array.from(loaders).forEach(loader => loader.hidden = true);
    Array.from(container).forEach(element => element.hidden = isElementHidden);
  };


  const leftButton = () => {
    const userData = JSON.parse(localStorage.getItem('request'));
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = userData.results.length - 5;
    }
    buildHTML();
  };

  const rightButton = () => {
    const userData = JSON.parse(localStorage.getItem('request'));
    if (currentIndex + 5 < userData.results.length) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    buildHTML();
  };
  
const buildHTML = () => {
  const userData = JSON.parse(localStorage.getItem('request'));
  console.log(userData)
  

  
    const itemsToDisplay = userData
      .filter((_, index) => index >= currentIndex && index < currentIndex + 5);

    itemsToDisplay.forEach(item => {
      const html = `
        <div class='flex-items'>
            <img src='${item.img}' alt='${item.name}' onclick="newTab('${item.img}', '${item.name}', '${item.price}')">
            <h5>${item.name}</h5>
            <h6>${item.price}</h6>
        </div>
      `;
        $('.product-detail').append(html);
    });
  
};

 const loadMore = () => {

const userData = JSON.parse(localStorage.getItem('request'));

  const itemsToDisplay = userData.results
    .filter((_, index) => index >= currentIndex && index < currentIndex + 5);

  itemsToDisplay.map(item => {
    const html = `
      <div class='flex-items'> 
          <img src='${item.img}' alt='${item.name}' onclick="newTab('${item.img}', '${item.name}', '${item.price}')">
          <h5>${item.name}</h5>
          <h6>${item.price}</h6>
      </div>
    `;
       $('.product-detail').append(html);
  });

  currentIndex += 5;

  if (currentIndex >= userData.results.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block";
  }
};

  

  
  initRecommender();
})();



 const newTab = (image, name, age) => {
    const openPage = `
      <div class ='new-page'>
        <img src='${image}' alt='${name}'>
        <h5>${name}</h5>
        <h6>${age}</h6>
      </div>
    `;

    const newPage = window.open("", "_blank");
    newPage.document.open();
    newPage.document.write(openPage);
  };

