var slider = tns({
    container: '.tns',
    items: 1,
    startIndex: 2,
    fixedWidth: 200,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    speed: 400,
    controls: false,
    nav: false,
    responsive: {
      1023: {
        disable: true
      }
    }
  });
