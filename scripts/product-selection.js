const productsSelectors = document.querySelectorAll(".product-selectors div");
const productsOptions = document.querySelectorAll(".products .product-content");


productsSelectors.forEach(item => {
    item.addEventListener("click", event => {
        
      productsSelectors.forEach(anotherItem => {
            anotherItem.classList.remove("active");
        })

        item.classList.add("active");

        productsOptions.forEach(product => {
          if(item.classList.contains(product.id)) product.classList.add("active");
          
          else product.classList.remove("active");
        })
    })
})