
# Product Carousel 

This project is a JavaScript-based product carousel for the LC Waikiki website, designed to enhance the user experience on product pages. It retrieves product data from an external JSON file and creates a responsive carousel that allows users to explore related products.

## Features
- Retrieves product data from an external JSON file or local storage, avoiding unnecessary fetch requests.
- Clicking on a product opens its respective product page in a new tab.
- Enables users to "favorite" products, storing their preferences in local storage.

## Usage
1. Copy the JavaScript code from `product-carousel.js`.
2. Open the Chrome Developer Tools console on the LC Waikiki product page.
3. Paste and execute the JavaScript code in the console.

## Structure
- `product-carousel.js`: The main JavaScript file that implements the product carousel and related features.

## How it works
1. The script fetches product data from an external JSON file or retrieves it from local storage.
2. It dynamically creates the product carousel with a title, products, and navigation arrows.
3. Users can click on products to open the respective product pages in new tabs.
4. Users can click on the heart icon to "favorite" products, and these preferences are stored in local storage.
5. The design is responsive to fit various screen sizes.

