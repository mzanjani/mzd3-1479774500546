document.write("test");

$.getJSON("https://3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix.cloudant.com/ahudata/_all_docs", function(jsondata) {
	document.write("test1");
	document.write("data");
});
document.write("test2");
d3.select("body")
  .selectAll("p")
  .data([1,2,3])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
