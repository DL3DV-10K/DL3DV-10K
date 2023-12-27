var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

var data = [{"name": "DL3DV-10K", "itemStyle": {"color": "#F5714D"}, "children": [{"name": "Restaurant and Cafes", "itemStyle": {"color": "#e7f2f8"}, "children": [{"name": "Restaurant", "value": 188, "itemStyle": {"color": "#e2f0f6"}}, {"name": "Coffee-Shop", "value": 61, "itemStyle": {"color": "#deeef4"}}, {"name": "Bars-and-Pubs", "value": 48, "itemStyle": {"color": "#daecf2"}}]}, {"name": "Hotals and Accommodations", "itemStyle": {"color": "#d5eaf1"}, "children": [{"name": "Residential-area", "value": 766, "itemStyle": {"color": "#d1e8ef"}}, {"name": "Hotels-Motels", "value": 148, "itemStyle": {"color": "#cde6ed"}}, {"name": "Vaccation-Rentals", "value": 90, "itemStyle": {"color": "#c8e4ec"}}]}, {"name": "Medical Facilities", "itemStyle": {"color": "#c4e2ea"}, "children": [{"name": "Hospitals-Clinics", "value": 155, "itemStyle": {"color": "#c0e0e8"}}, {"name": "Pharmacies", "value": 132, "itemStyle": {"color": "#bbdee7"}}, {"name": "Dentists", "value": 4, "itemStyle": {"color": "#b7dce5"}}]}, {"name": "Education Institutions", "itemStyle": {"color": "#b3dae3"}, "children": [{"name": "School-Universities", "value": 865, "itemStyle": {"color": "#aed8e2"}}, {"name": "Library", "value": 172, "itemStyle": {"color": "#aad6e0"}}]}, {"name": "Shopping Centers", "itemStyle": {"color": "#a6d4de"}, "children": [{"name": "Supermarkets", "value": 475, "itemStyle": {"color": "#a2d2dd"}}, {"name": "Shopping-Malls", "value": 246, "itemStyle": {"color": "#9dd0db"}}, {"name": "Clothing-Stores", "value": 144, "itemStyle": {"color": "#99ced9"}}, {"name": "Shoe-Stores", "value": 5, "itemStyle": {"color": "#95ccd7"}}, {"name": "Bookstores", "value": 134, "itemStyle": {"color": "#90cad6"}}, {"name": "Flowerstore", "value": 105, "itemStyle": {"color": "#8cc8d4"}}, {"name": "Furniture-Stores", "value": 363, "itemStyle": {"color": "#88c6d2"}}, {"name": "Electorical-Store", "value": 155, "itemStyle": {"color": "#83c4d1"}}, {"name": "Pet-Store", "value": 12, "itemStyle": {"color": "#7fc2cf"}}, {"name": "Toy-Shop", "value": 3, "itemStyle": {"color": "#7bc0cd"}}]}, {"name": "Transportation Hubs", "itemStyle": {"color": "#76becc"}, "children": [{"name": "Airports", "value": 57, "itemStyle": {"color": "#75bcca"}}, {"name": "Train-Stations", "value": 177, "itemStyle": {"color": "#7abbc7"}}, {"name": "Bus-Stops", "value": 118, "itemStyle": {"color": "#80bac4"}}, {"name": "Gas-Station", "value": 32, "itemStyle": {"color": "#85b9c2"}}, {"name": "Car-Rental-Agencies", "value": 0, "itemStyle": {"color": "#8ab8bf"}}]}, {"name": "Parks and Recreation", "itemStyle": {"color": "#8fb7bc"}, "children": [{"name": "Theaters", "value": 62, "itemStyle": {"color": "#95b6ba"}}, {"name": "Concert-Halls", "value": 1, "itemStyle": {"color": "#9ab5b7"}}, {"name": "Sports-Stadiums", "value": 63, "itemStyle": {"color": "#9fb4b4"}}, {"name": "Parks-and-Recreation-Areas", "value": 403, "itemStyle": {"color": "#a4b3b2"}}]}, {"name": "Tourist Attractions", "itemStyle": {"color": "#a9b2af"}, "children": [{"name": "Museums", "value": 299, "itemStyle": {"color": "#afb1ac"}}, {"name": "Art-Galleries", "value": 280, "itemStyle": {"color": "#b4b0aa"}}, {"name": "Zoos-Aquariums", "value": 86, "itemStyle": {"color": "#b9b0a7"}}, {"name": "Botanical-Gardens", "value": 219, "itemStyle": {"color": "#beafa4"}}, {"name": "Landmarks", "value": 171, "itemStyle": {"color": "#c3aea2"}}, {"name": "Cultural-Centers", "value": 425, "itemStyle": {"color": "#c9ad9f"}}]}, {"name": "Government & Civic Services", "itemStyle": {"color": "#ceac9c"}, "children": [{"name": "Post-Offices", "value": 12, "itemStyle": {"color": "#d3ab9a"}}, {"name": "Police-Stations", "value": 2, "itemStyle": {"color": "#d8aa97"}}, {"name": "Courthouses", "value": 13, "itemStyle": {"color": "#dda994"}}, {"name": "City-Halls", "value": 24, "itemStyle": {"color": "#e3a892"}}]}, {"name": "Financial Services", "itemStyle": {"color": "#e8a78f"}, "children": [{"name": "Banks-ATMs", "value": 43, "itemStyle": {"color": "#eda68c"}}]}, {"name": "Events & Conferences", "itemStyle": {"color": "#f2a58a"}, "children": [{"name": "Events-Conferences-halls", "value": 95, "itemStyle": {"color": "#f8a487"}}]}, {"name": "Nature & Outdoor", "itemStyle": {"color": "#fda384"}, "children": [{"name": "Beaches", "value": 13, "itemStyle": {"color": "#fea485"}}, {"name": "Hiking-Trails", "value": 441, "itemStyle": {"color": "#fea787"}}, {"name": "Campgrounds", "value": 181, "itemStyle": {"color": "#fda989"}}, {"name": "Lakes", "value": 196, "itemStyle": {"color": "#fcac8b"}}, {"name": "Mountains", "value": 242, "itemStyle": {"color": "#fcae8d"}}, {"name": "Forest-Mountains", "value": 55, "itemStyle": {"color": "#fbb18f"}}, {"name": "Farms", "value": 66, "itemStyle": {"color": "#fbb492"}}, {"name": "Street-View", "value": 373, "itemStyle": {"color": "#fab694"}}, {"name": "Square", "value": 316, "itemStyle": {"color": "#f9b996"}}]}, {"name": "Tech & Business", "itemStyle": {"color": "#f9bb98"}, "children": [{"name": "Business-Centers", "value": 94, "itemStyle": {"color": "#f8be9a"}}, {"name": "Tech-Companies", "value": 126, "itemStyle": {"color": "#f8c09c"}}, {"name": "Co-working-Spaces", "value": 209, "itemStyle": {"color": "#f7c39e"}}]}, {"name": "Sports & Fitness", "itemStyle": {"color": "#f6c5a0"}, "children": [{"name": "Gyms-and-Fitness-Centers", "value": 140, "itemStyle": {"color": "#f6c8a2"}}, {"name": "Sports-Clubs", "value": 76, "itemStyle": {"color": "#f5caa4"}}, {"name": "Swimming-Pools", "value": 47, "itemStyle": {"color": "#f5cda7"}}, {"name": "Tennis-Courts", "value": 108, "itemStyle": {"color": "#f4d0a9"}}]}, {"name": "Automotive Services", "itemStyle": {"color": "#f3d2ab"}, "children": [{"name": "Auto-Repair-Shops", "value": 126, "itemStyle": {"color": "#f3d5ad"}}, {"name": "Car-Washes", "value": 17, "itemStyle": {"color": "#f2d7af"}}, {"name": "Parking-Lots", "value": 200, "itemStyle": {"color": "#f2dab1"}}]}, {"name": "Religious Institutions", "itemStyle": {"color": "#f1dcb3"}, "children": [{"name": "Churches", "value": 61, "itemStyle": {"color": "#f0dfb5"}}, {"name": "Mosques", "value": 15, "itemStyle": {"color": "#f0e1b7"}}, {"name": "Temples", "value": 112, "itemStyle": {"color": "#efe4b9"}}, {"name": "Graveyards", "value": 53, "itemStyle": {"color": "#efe7bc"}}]}]}];

option = {
  // title: {
  //   text: "WORLD COFFEE RESEARCH SENSORY LEXICON",
  //   subtext: "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
  //   textStyle: {
  //     fontSize: 14,
  //     align: "center",
  //   },
  //   subtextStyle: {
  //     align: "center",
  //   },
  //   sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/",
  // },
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "95%"],
    sort: undefined,
    emphasis: {
      focus: "ancestor",
    },
    levels: [
      {},
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "tangential",
        },
      },
      {
        r0: "35%",
        r: "70%",
        label: {
          align: "right",
        },
      },
      {
        r0: "70%",
        r: "72%",
        label: {
          position: "outside",
          padding: 3,
          silent: false,
        },
        itemStyle: {
          borderWidth: 3,
        },
      },
    ],
  },
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
