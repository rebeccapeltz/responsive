/*!
 * Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", (e) => {
  var cl = cloudinary.Cloudinary.new({ cloud_name: "pictures77" });
  // replace 'demo' with your cloud name in the line above
  cl.responsive();
});
