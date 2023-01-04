
const URL_NADES = "/data/maps/inferno.json";
const TYPE = "smoke";
const TICKRATES = [null, "tick128", "any"];


function compareAge(a, b) {
  //console.log("compare", a)
  return a.endPosition - b.endPosition;
}

function sortByEndPosition(a, b) {
  if (a.endPosition < b.endPosition) {
    return -1;
  }
  if (a.endPosition > b.endPosition) {
    return 1;
  }
  return 0;
}


function myFunction(num) {
  //console.log("num",  num);
  return num;
}

axios
  .get(`${URL_NADES}`)
  .then((response) => {
    const positions = [];
    const nadesReduce2 = [];
    //console.log(response);
    nades = response.data.pageProps.initialNades.filter(
      (nade) => nade.type === TYPE && TICKRATES.includes(nade.tickrate)
    );
    const overview = window.document.querySelector("#overview");

    console.log("nades", nades);

    nades = nades.map((nade) => {
      return {...nade, endPosition: nade.endPosition.trim()}
    });

    const nadesReduce = nades.sort(sortByEndPosition);

    console.log("ande2", nadesReduce);

    //const unique = nadesReduce.filter(
    //  (obj, index) =>
    //  nadesReduce.findIndex((item) => item.name === obj.name) === index
    //);

    //console.log(unique);

    nadesReduce.forEach((nade, index) => {
      //console.log(nade.endPosition)
      
      const img = document.createElement("img");
      const print = {
        index: index,
        name: nade.endPosition.trim(),
        slug: nade.slug,
        coordX: nade.mapEndCoord.x,
        coordY: nade.mapEndCoord.y
      }
      //console.log(print);
      // console.log(nade);
      img.src = "assets/icons/"+TYPE.toLowerCase()+".svg";
      img.className = "nade "+index+" "+nade.endPosition; 
      const scale = {
        y: 1,
        x: 1
      };
      const div = document.createElement("div");
      div.innerHTML = index;
      //overview.appendChild(div);
      img.style = `top: ${(nade.mapEndCoord.y/scale.y)-30}px; left:${(nade.mapEndCoord.x/scale.x)-24}px`;
      div.style = `z-index: 99; top: ${(nade.mapEndCoord.y/scale.y)-23}px; left:${(nade.mapEndCoord.x/scale.x)-23}px`;
      div.className = "nade"; 
      //console.log(positions);
      if(!positions.includes(nade.endPosition)) {
        //console.log("pos", nade.endPosition)
        positions.push(nade.endPosition);
        overview.append(img);
      }

    });
  })
  .catch((error) => {
    console.log(error);
  });
