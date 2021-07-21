
    document.addEventListener("DOMContentLoaded", function () {
      
      document.querySelector('[href="#openModal-1"]');
      document.querySelector('[href="#openModal-2"]');
      document.querySelector('[href="#openModal-3"]');
      document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal-1').style.marginLeft = '0px';
        document.querySelector('#openModal-2').style.marginLeft = '0px';
        document.querySelector('#openModal-3').style.marginLeft = '0px';
      });
    });
  

 