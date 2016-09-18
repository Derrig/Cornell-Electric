// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;
var heatmap;
var heatmapdata;

var buildingdata = [
  {name: "WING HALL", lat: 42.451963, lng: -76.471870, weight: 0.3},
  {name: "WILLIARD STRAIGHT HALL", lat: 42.4466, lng: -76.4857},
  {name: "WILSON SYNCHROTON LABARATORY", lat: 42.450320, lng: -76.473269},
  {name: "WILLIAM KEETON HOUSE", lat: 42.450751, lng: -76.489156},
  {name: "WHITE HALL", lat: 42.450751, lng: -76.489156, weight:0.3},
  {name: "WEILL HALL", lat: 42.449864, lng: -76.478173, weight:0.3},
  {name: "WATER FILTRATION PLANT", lat: 42.439222, lng: -76.483548, weight:0.3},
  {name: "WARREN HALL", lat: 42.450235, lng: -76.475722, weight:0.3},
  {name: "WARD LABARATORY", lat: 42.453681, lng: -76.472475, weight:0.3},
  {name: "VETERINARY COLLEGE", lat: 42.448540, lng: -76.465050, weight:0.3},
  {name: "URIS LIBRARY", lat: 42.447852, lng: -76.485240, weight:0.3},
  {name: "URIS HALL", lat: 42.447397, lng: -76.482272, weight:0.3},
  {name: "UPSON HALL", lat: 42.444128, lng: -76.482863, weight:0.3},
  {name: "UJAAMA RESIDENTIAL COLLEGE", lat: 42.455572, lng: -76.476718, weight:0.3},
  {name: "OLIVE TJADEN HALL", lat: 42.451060, lng: -76.485310, weight:0.3},
  {name: "TEAGLE HALL", lat: 42.4458, lng: -76.4791, weight:0.3},
  {name: "STOCKING HALL", lat: 42.4472, lng: -76.4712, weight:0.3},
  {name: "STIMSON HALL", lat: 42.4478, lng: -76.4833, weight:5},
  {name: "STATLER HALL", lat: 42.4458, lng: -76.4822, weight:0.3},
  {name: "STATLER HOTEL", lat: 42.4464, lng: -76.4822, weight:0.3},
  {name: "SPACE SCIENCES BUILDING", lat: 42.4489, lng: -76.4811, weight:0.3},
  {name: "SNEE HALL", lat: 42.4437, lng: -76.4848, weight:0.3},
  {name: "SIGMA PHI", lat: 42.4460, lng: -76.4885, weight:0.3},
  {name: "SIBLEY HALL", lat: 42.4509, lng: -76.4841, weight:0.3},
  {name: "SHELDON COURT", lat: 42.4422, lng: -76.4856, weight:0.3},
  {name: "SCHWARTZ CENTER FOR PERFORMING ARTS", lat: 42.4424, lng: -76.4859, weight:0.3},
  {name: "SCHURMAN HALL", lat: 42.4480, lng: -76.4661, weight:0.3},
  {name: "SCHOELLKOPF FIELD", lat: 42.4440, lng: -76.4787, weight:0.3},
  {name: "SAVAGE HALL", lat: 42.4497, lng: -76.4801, weight:0.3},
  {name: "SAGE HALL", lat: 42.4459, lng: -76.4832, weight:0.3},
  {name: "SAGE CHAPEL", lat: 42.4472, lng: -76.4845, weight:0.3},
  {name: "ROCKEFELLER HALL", lat: 42.4490, lng: -76.4818, weight:0.3},
  {name: "ROBERT W HOLLEY CENTER", lat: 42.4479, lng: -76.4674, weight:0.3},
  {name: "ROBERT PURCELL COMMUNITY CENTER", lat: 42.4559, lng: -76.4775, weight:0.3},
  {name: "RISLEY HALL", lat: 42.4531, lng: -76.4819, weight:0.3},
  {name: "RILEY ROBB HALL", lat: 42.4458, lng: -76.4712, weight:0.3},
  {name: "RICE HALL", lat: 42.4479, lng: -76.4741, weight:0.3},
  {name: "RHODES HALL", lat: 42.4434, lng: -76.4814, weight:0.3},
  {name: "RAND HALL", lat: 42.4512, lng: -76.4829, weight:0.3},
  {name: "PLANT SCIENCES BUILDING", lat: 42.4483, lng: -76.4770, weight:0.3},
  {name: "PHYSICAL SCIENCES BUILDING", lat: 42.4499, lng: -76.4818, weight:0.3},
  {name: "PHILLIPS HALL", lat: 42.4445, lng: -76.4820, weight:0.3},
  {name: "PHI KAPPA PSI", lat: 42.4454, lng: -76.4887, weight:0.3},
  {name: "OLIN LIBRARY", lat: 42.4479, lng: -76.4842, weight:0.3},
  {name: "OLIN HALL", lat: 42.4454, lng: -76.4844, weight:0.3},
  {name: "OLIN CHEMISTRY LABARATORY", lat: 42.4507, lng: -76.4813, weight:0.3},
  {name: "NOYES LODGE", lat: 42.4521, lng: -76.4803, weight:0.3},
  {name: "NOYES COMMUNITY CENTER", lat: 42.4465, lng: -76.4880, weight:0.3},
  {name: "NORTH CAMPUS LOW RISE 9", lat: 42.455858, lng:  -76.475962, weight:0.3},
  {name: "NORTH CAMPUS LOW RISE 7", lat: 42.4562, lng: -76.4754, weight:0.3},
  {name: "NORTH CAMPUS LOW RISE 6", lat: 42.4563, lng: -76.4761, weight:0.3},
  {name: "NORTH CAMPUS HIGH RISE 5", lat: 42.4562, lng: -76.4768, weight:0.3},
  {name: "NEWMAN LABARATORY", lat: 42.4502, lng: -76.4804, weight:0.3},
  {name: "MUENSCHER LABARATORY", lat: 42.4496, lng: -76.4632, weight:0.3},
  {name: "MYRON TAYLOR HALL", lat: 42.4440, lng: -76.4856, weight:0.3},
  {name: "MORRISSON HALL", lat: 42.4463, lng: -76.4693, weight:0.3},
  {name: "MORRILL HALL", lat: 42.4486, lng: -76.4853, weight:0.3},
  {name: "MILSTEIN HALL", lat: 42.4512, lng: -76.4836, weight:0.3},
  {name: "ILR CONFERENCE CENTER", lat: 42.4470, lng: -76.4801, weight: 0.3},
  {name: "ITHACA HIGH SCHOOL", lat: 42.4551, lng: -76.4987, weight: 0.3},
  {name: "IVES HALL", lat: 42.4472, lng: -76.4810, weight: 0.3},
  {name: "JOHNSON MUSEUM OF ART", lat: 42.4507, lng: -76.4861, weight: 0.3},
  {name: "KAY HALL", lat: 42.4541, lng: -76.4780, weight: 0.3},
  {name: "KENNEDY ROBERTS HALL", lat: 42.4481, lng: -76.4793, weight: 0.3},
  {name: "KIMBALL HALL", lat: 42.4439, lng: -76.4832, weight: 0.3},
  {name: "KROCH LIBRARY", lat: 42.4480, lng: -76.4835, weight: 0.3},
  {name: "LARGE ANIMAL RESEARCH TEACHING UNIT", lat: 42.4463, lng: -76.4675, weight: 0.3},
  {name: "LINCOLN HALL", lat: 42.4501, lng: -76.4835, weight: 0.3},
  {name: "LYNAH RINK", lat: 42.4457, lng: -76.4774, weight: 0.3},
  {name: "LYON HALL", lat: 42.4478, lng: -76.4880, weight: 0.3},
  {name: "MALLOTT HALL", lat: 42.4482, lng: -76.4802, weight: 0.3},
  {name: "MANN LIBRARY", lat: 42.4488, lng: -76.4763, weight: 0.3},
  {name: "MARTHA VAN RENNSSALAER HALL", lat: 42.4500, lng: -76.4787, weight: 0.3},
  {name: "MARY DONLON HALL", lat: 42.4550, lng: -76.4777, weight: 0.3},
  {name: "MEWS HALL", lat: 42.4544, lng: -76.4769, weight: 0.3},
  {name: "MCGRAW HALL", lat: 42.4494, lng: -76.4854, weight: 0.3},
  {name: "HURLBURT HOUSE", lat: 42.4579, lng: -76.4839, weight:0.3},
  {name: "HUMPHREY SERVICE BUILDING", lat: 42.4427, lng: -76.4755, weight:0.3},
  {name: "HUMAN ECOLOGY BUILDING", lat: 42.4505, lng: -76.4786, weight:0.3},
  {name: "HUGHES HALL", lat: 42.4437, lng: -76.4863, weight:0.3},
  {name: "HOLLISTER HALL", lat: 42.4440, lng: -76.4845, weight:0.3},
  {name: "HELEN NEWMAN HALL", lat: 42.4530, lng: -76.4774, weight:0.3},
  {name: "HANS BETHE HOUSE", lat: 42.4471, lng: -76.4886, weight:0.3},
  {name: "GUTERMAN BIOLCIMATIC LAB", lat: 42.4475, lng: -76.4605, weight:0.3},
  {name: "GRUMMAN SQUASH COURT", lat: 42.4450, lng: -76.4799, weight:0.3},
  {name: "GRUMMAN HALL", lat: 42.4434, lng: -76.4821, weight:0.3},
  {name: "GOLDWIN SMITH HALL", lat: 42.4491, lng: -76.4835, weight:0.3},
  {name: "GEORGE JAMESON HALL", lat: 42.4557, lng: -76.4782, weight:0.3},
  {name: "GATES HALL", lat: 42.4449, lng: -76.4808, weight:0.3},
  {name: "GANNETT HEALTH CENTER", lat: 42.4458, lng: -76.4856, weight:0.3},
  {name: "FRIEDMAN WRESTLING CENTER", lat: 42.4456, lng: -76.4745, weight:0.3},
  {name: "FOUNDRY", lat: 42.4515, lng: -76.4835, weight:0.3},
  {name: "FOUNDERS HALL", lat: 42.4484, lng: -76.4880, weight:0.3},
  {name: "FOOD SCIENCE LAB", lat: 42.4471, lng: -76.4704, weight:0.3},
  {name: "FLORA ROSE HOUSE", lat: 42.4478, lng: -76.4888, weight:0.3},
  {name: "FERNOW HALL", lat: 42.4484, lng: -76.4751, weight:0.3},
  {name: "EMERSON HALL", lat: 42.4484, lng: -76.4758, weight:0.3},
  {name: "EAST CAMPUS RESEARCH FACILITY", lat: 42.4468, lng: -76.4659, weight:0.3},
  {name: "DUFFIELD HALL", lat: 42.4447, lng: -76.4826, weight:0.3},
  {name: "DIAGNOSTIC LAB", lat: 42.4488, lng: -76.4643, weight:0.3},
  {name: "DELTA TAU DELTA", lat: 42.4454, lng: -76.4887, weight:0.3},
  {name: "DAY HALL", lat: 42.4470, lng: -76.4833, weight:0.3},
  {name: "COURT HALL", lat: 42.4545, lng: -76.4780, weight:0.3},
  {name: "CORSON MUDD COMPLEX", lat: 42.4473, lng: -76.4783, weight:0.3},
  {name: "COMSTOCK HALL", lat: 42.4466, lng: -76.4793, weight:0.3},
  {name: "COMPUTING COMMUNICATIONS CENTER", lat: 42.4493, lng: -76.4790, weight:0.3},
  {name: "CLARK HALL", lat: 42.4498, lng: -76.4811, weight:0.3},
  {name: "CLARA DICKSON HALL", lat: 42.4542, lng: -76.4791, weight:0.3},
  {name: "CASCADILLA HALL", lat: 42.4424, lng: -76.4868, weight:0.3},
  {name: "CARPENTER HALL", lat: 42.4448, lng: -76.4842, weight:0.3},
  {name: "CARL BECKER HOUSE", lat: 42.4482, lng: -76.4896, weight:0.3},
  {name: "CAMPUS STORE", lat: 42.4467, lng: -76.4842, weight:0.3},
  {name: "CALDWELL HALL", lat: 42.4492, lng: -76.4783, weight:0.3},
  {name: "BRUCKNER LAB", lat: 42.4483, lng: -76.4741, weight:0.3},
  {name: "BRADFIELD HALL", lat: 42.4479, lng: -76.4758, weight:0.3},
  {name: "BOYCE THOMPSON INSTITUTE", lat: 42.4470, lng: -76.4676, weight:0.3},
  {name: "BOLDT TOWER", lat: 42.4490, lng: -76.4891, weight:0.3},
  {name: "BIOTECHNOLOGY BUILDING", lat: 42.4464, lng: -76.4784, weight:0.3},
  {name: "BIG RED BARN", lat: 42.4485, lng: -76.4810, weight:0.3},
  {name: "BEEBE HALL", lat: 42.4489, lng: -76.4743, weight:0.3},
  {name: "BARTON HALL", lat: 42.4460, lng: -76.4807, weight:0.3},
  {name: "BARTELS HALL", lat: 42.4458, lng: -76.4762, weight:0.3},
  {name: "BARNES HALL", lat: 42.4464, lng: -76.4843, weight:0.3},
  {name: "BARD HALL", lat: 42.4439, lng: -76.4840, weight:0.3},
  {name: "A D WHITE HOUSE", lat: 42.4482463, lng: -76.4819279, weight: 0.3},
  {name: "ALICE COOK HOUSE", lat: 42.449000, lng: -76.489592, weight: 0.3},
  {name: "AKWEKON", lat: 42.4561349, lng: -76.4805254, weight: 0.3},
  {name: "ANABEL TAYLOR HALL", lat: 42.4449505, lng: -76.4858157, weight: 0.3},
  {name: "ANNA COMSTOCK HOUSE", lat: 42.4539094, lng: -76.4823889, weight: 0.3},
  {name: "APPEL COMMONS", lat: 42.4535825, lng: -76.4761185, weight: 0.3},
  {name: "BAILEY HALL", lat: 42.4492411, lng: -76.480146, weight: 0.3},
  {name: "BAKER LAB", lat: 42.4502, lng: -76.4818, weight: 0.3},
  {name: "BAKER SOUTH", lat: 42.4485, lng: -76.4884, weight: 0.3},
  {name: "BAKER TOWER", lat: 42.4489, lng: -76.4882, weight: 0.3},
  {name: "BALCH HALL", lat: 42.4530, lng:-76.4797, weight: 0.3}
];

function initMap() {
   var mapOptions = {
      center: new google.maps.LatLng(42.4470,-76.4833),
      zoom: 13,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map'), mapOptions);
   set_buildingdata();
   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      displayMarkers();
      map.setZoom(17)
   });
   heatmap();
}

function set_buildingdata() {
  for (var i=0; i<buildingdata.length; i++) {
    buildingdata[i].weight= electric_dict[buildingdata[i].name];
  }
}

// This function will iterate over buildingdata array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();

   // for loop traverses buildingdata array calling createMarker function for each marker
   for (var i = 0; i < buildingdata.length; i++){

      var latlng = new google.maps.LatLng(buildingdata[i].lat, buildingdata[i].lng);
      var name = buildingdata[i].name;

      createMarker(latlng, name);

      // marker position is added to bounds variable
      bounds.extend(latlng);
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
     map.setZoom(18);
     map.setCenter(marker.getPosition());
     binfo.innerHTML = name;
   });
}

function add_to_heatmapdata() {
  heatmapdata=[];
  for (var i = 0; i < buildingdata.length; i++) {
    var latlng = new google.maps.LatLng(buildingdata[i].lat, buildingdata[i].lng);
    heatmapdata.push({location: latlng, weight: buildingdata[i].weight});
  }
}

function heatmap() {
  add_to_heatmapdata();
  heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapdata,
            radius: 50
  });
  heatmap.setMap(map);
}
