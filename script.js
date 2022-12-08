function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 50.470265133238186, lng: 30.519115601956997 },
  });

  setMarkers(map);
}

const buildings = [
  ["office A", 50.47200641312076, 30.518536244517424, "/off.png", 1],
  ["office B", 50.469722250543725, 30.51370826849245, "/off.png", 1],
  ["office C", 50.46936715407124, 30.513064538351895, "/off.png", 1],
  ["warehouse K", 50.4724385986836, 30.517779238046746, "/warr.png", 2],
  ["warehouse L", 50.470151042594495, 30.51849807005967, "/warr.png", 2],
  ["warehouse M", 50.468915033388846, 30.511513597926097, "/warr.png", 2],
];

let markers = [];

function setMarkers(map) {
  let newMarker;
  for (let i = 0; i < buildings.length; i++) {
    const building = buildings[i];

    newMarker = new google.maps.Marker({
      position: { lat: building[1], lng: building[2] },
      map,
      icon: building[3],
      title: building[0],
    });

    newMarker.category = buildings[i][4];
    newMarker.setVisible(true);

    markers.push(newMarker);
  }
}

let select = document.getElementById("sel");
let button = document.getElementById("butt");
let selected = document.querySelector(".selected");

console.log(selected);
button.addEventListener("click", function () {
  console.log(123);
  selected.classList.toggle("open");
  if(button.innerText === 'Hide Filters') {
    button.innerText = 'Show Filters';
  }
  else {
    button.innerText = 'Hide Filters';
  }
});

select.addEventListener("change", function () {
  for (let i = 0; i < markers.length; i++) {
    if (select.value == 3) {
      markers[i].setVisible(true);
    } else if (markers[i].category == select.value) {
      markers[i].setVisible(true);
    } else {
      markers[i].setVisible(false);
    }
  }
});

window.initMap = initMap;
