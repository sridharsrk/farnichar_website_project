function createURL(productDetails) {
    let data = productDetails.getAttribute("data-id").split("-");

    window.location.href = `../productDetails_Page/main.html?productType=${data[0]}&productName=${data[1]}`;
}
