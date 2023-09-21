<template>
    <div class="hello" id="chartdiv">
    
    </div>
  </template>
  
  <script>
  import * as am5 from "@amcharts/amcharts5";
  import * as am5map from "@amcharts/amcharts5/map";
  import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
  import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  
  export default {
    name: 'Map',
    mounted() {
      let root = am5.Root.new("chartdiv");
  
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
  
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1()
      }));
  
      let continentSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_continentsLow,
        exclude: ["antarctica"]
      }));
  
      continentSeries.mapPolygons.template.setAll({
        interactive: true,
        tooltipText: "{name}: {points}pts"
      });
     
       continentSeries.mapPolygons.template.adapters.add("tooltipText", function(text, target) {
        let continent = target.dataItem.dataContext.id;
       
        let points = continentPoints[continent];
        
        return text.replace("{points}", points);
      });
  
      let continentPoints = {
        africa: 12,
        europe: 14,
        asia: 34,
        northAmerica: 78,
        southAmerica: 34,
        oceania:45
      };
  
      let countrySeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        visible: false
      }));
  
      countrySeries.mapPolygons.template.setAll({
        interactive: true
      });
  
      let homeButton = chart.children.push(am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        x: am5.percent(100),
        centerX: am5.percent(100),
        opacity: 0,
        interactiveChildren: false,
        icon: am5.Graphics.new(root, {
          svgPath: "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
          fill: am5.color(0xffffff)
        })
      }));
  
      homeButton.events.on("click", function() {
        chart.goHome();
        continentSeries.show();
        countrySeries.hide();
        homeButton.hide();
      });
    }
  }
  
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .hello {
    width: 100%;
    height: 500px;
  }
  </style>