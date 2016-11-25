// d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .text(function(d) { return "I’m from " + d + "!"; })
//   .enter().append("p")
//     .text(function(d) { return "I’m number " + d + "!"; });
    $.ajaxSetup({
      headers: {
        'Authorization' : "Basic " + btoa("3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix" + ":" + "2ce14900291c51c4923bb92caf69317c20da6fb712ee033f51bc25cda79593f4")
      }
    });
    $.getJSON(
        //'https://3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix.cloudant.com/ahudata/_all_docs'
        'https://3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix.cloudant.com/ahudata/_design/timetempview/_view/timetemp'
        , function( jsondata ) {
      // var items = [];
      // $.each( data, function( key, val ) {
      //   items.push( "<li id='" + key + "'>" + val + "</li>" );
      // });
      //
      // $( "<ul/>", {
      //   "class": "my-new-list",
      //   html: items.join( "" )
      // }).appendTo( "body" );
      //alert(jsondata.rows[0].key);
      d3.select("body").selectAll("div")
        .data(jsondata.rows)
        .enter()
        .append("text").text(d=>d.key);
      for (let row of jsondata.rows) {
        d3.select("svg")
          .append("circle").attr("cx",250).attr("cy",250).attr("r",row.value)
          .style("fill","none").style("stroke", "blue");
      }
      // $( "<ul/>", {
      //   "class": "my-new-list",
      //   html: items.join( "" )
      // }).appendTo( "body" );
    });
