$.getJSON("https://3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix.cloudant.com/ahudata/_all_docs", function(jsondata) {
	

d3.select("body")
  .selectAll("p")
  .data([jsondata, jsondata])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
});