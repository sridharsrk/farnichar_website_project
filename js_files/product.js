export function createProduct(datapath, whereToAppend, count) {
    fetch(datapath)
    .then((response) => response.json())
    .then((data) => {
        // Get the container where we want to append the products
        const toappend = document.querySelector(whereToAppend);

        // It will tell how much data need to be appended
        let dataLength = 0;
        if (count === 'full') {
            dataLength = data.length;
        }
        else {
            dataLength = count;
        }

        // It will create the product container and append the data
        for (let i = 0; i < dataLength; i++) {
           const productData = data[i];
           
            // createing li
            const li = document.createElement("li");
            li.className = "product-li";
            toappend.appendChild(li);

            // set data-id or data
            li.setAttribute("data-id", productData.id);

            // add event listener
            li.addEventListener("click", function() {
                createURL(this);
            });

            // Create the product container
            const productContainer = document.createElement("div");
            productContainer.className = `product product-${i+1}`;
            li.appendChild(productContainer);

            // Create the product image
            const productImage = document.createElement("img");
            productImage.className = "product-image";
            productImage.src = productData.productImage;
            productImage.alt = "no image there";
            productContainer.appendChild(productImage);

            // Create the product details container
            const productDetails = document.createElement("div");
            productDetails.className = "product-details";
            productContainer.appendChild(productDetails);

            // Create the product name
            const productName = document.createElement("h3");
            productName.className = "product-name";
            productName.innerHTML = productData.productName;
            productDetails.appendChild(productName);

            // Create the product description
            const productDescription = document.createElement("p");
            productDescription.className = "product-description";
            productDescription.innerHTML = productData.productDescription;
            productDetails.appendChild(productDescription);

            // Create the product price container
            const productPriceContainer = document.createElement("div");
            productPriceContainer.className = "product-price-container";
            productDetails.appendChild(productPriceContainer);

            // Create the current price
            const currentPrice = document.createElement("p");
            currentPrice.className = "current-price";
            currentPrice.innerHTML = productData.currentPrice;
            productPriceContainer.appendChild(currentPrice);

            // Create the old price if it exists
            if (productData.oldPrice !== "") {
                const del =  document.createElement("del");
                productPriceContainer.appendChild(del);
                const oldPrice = document.createElement("p");
                oldPrice.className = "old-price";
                oldPrice.innerHTML = productData.oldPrice;
                del.appendChild(oldPrice);
            }

            // Create the product offer container if it exists
            if (productData.offer !== "") {
                const productOffercontainer = document.createElement("div");
                productOffercontainer.className = "productOfferContainer";
                productContainer.appendChild(productOffercontainer);

                if (productData.offer.startsWith("-")) {
                    productOffercontainer.classList.add("discount");
                }
                else if (productData.offer === "New") {
                    productOffercontainer.classList.add("newProduct");
                }

                const productOffer = document.createElement("p");
                productOffer.innerHTML = productData.offer;
                productOffercontainer.appendChild(productOffer);
            }
        }
    })
}