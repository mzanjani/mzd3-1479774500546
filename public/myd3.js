document.write("test\n");
alert("test1");

function get_json(url, callback) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
// call function ----v
            callback(response);
        });
    });
}

get_json("https://3fdad485-b06b-4050-b67b-ad864dfeb7ee-bluemix.cloudant.com/ahudata/_all_docs", function(jsondata) {
	document.write("test1");
	alert(jsondata);
});
document.write("test2");
d3.select("body")
  .selectAll("p")
  .data([1,2,3])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
