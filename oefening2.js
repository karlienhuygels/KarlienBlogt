function main() {
  var mijnAfb = document.getElementById("hoofdafbeelding");
  var afbArray = ["foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg"];
  var i = 0;

  function veranderAfb() {
      mijnAfb.setAttribute("src", afbArray[i]);
      i++;
      if (i >= afbArray.length) {
      i = 0;
      }
  }

  setInterval(veranderAfb, 2000);

  var mijnArray = ["#Bon voyage", "#Park Spoor Noord", "#Hallerbos", "#Minoes", "#Zee", "#Kaffeenini", "#Carselfie", "#Maurice Coffeebar"];
  var paragraaf = document.getElementById("onderschrift");
  var teller = 0;


  function change() {
       paragraaf.innerHTML = mijnArray[teller];
          teller++;
          if(teller >= mijnArray.length) { teller = 0; }
      }

  setInterval(change, 2000);

}

window.onload = function() {
    main();
}
