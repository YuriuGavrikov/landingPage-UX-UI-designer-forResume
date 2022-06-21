const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchour of anchors) {
   anchour.addEventListener('click', function (event) {
      event.preventDefault();
      const blockID = anchour.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })

   })
}