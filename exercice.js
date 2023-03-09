function analyzeContent(content) {
	var isfound_css = content.includes("{ ") ;
	var isfound_html = content.includes("<") ;
	var result = { contentType: "" }
	var list_css_tag = [];
	var list_html_tag = [] ;
	var list_html_tags = [] ;
	var list_html_tags_1 = [];
	var list_html_tags_2 = [];
	if (isfound_css) {
		result.contentType ="CSS" ;
		list_css_tag = content.split("/({|})/");
		for (let i = 0; i < list_css_tag.length ; i+2){
			
		}
	} else if (isfound_html) {
		result.contentType = "HTML" ;
		result.tags = {html : 1 } ;
		var list_html = content.split(" ") ;
		for (let j = 0 ; j < list_html.length ; j++){
			var isfound = list_html[j].includes("<");
			if (isfound){
				list_html_tag.push(list_html[j]);
			}
		}
		var string_tag = list_html_tag.join();
		list_html_tag = string_tag.split(">");
		for (let j = 0 ; j < list_html_tag.length ; j++){
			var isfound = list_html_tag[j].includes("</");
			if (isfound){
			} else {
				list_html_tags.push(list_html_tag[j]);
			}
		}
		var string_tag = list_html_tags.join();
		list_html_tags = string_tag.split(/(< |,)/);
		for (let j = 0 ; j < list_html_tags.length ; j++){
			var isfound_2 = list_html_tags[j].includes("<");
			var isfound_3 = list_html_tags[j].includes("<!");
			if (isfound_2){
				if (!isfound_3){
					list_html_tags_1.push(list_html_tags[j]);
				}
			}
			}
		string_tag = list_html_tags_1.join();
		list_html_tags_1 = string_tag.split(/(< |,)/)
		for (let k =0; k < list_html_tags_1.length ; k++ ){
			if (list_html_tags_1[k] == "\n"){
				list_html_tags_1 = list_html_tags_1.splice(k);
			}
		}
		for (let z =0; z < list_html_tags_1.length ; z++ ){
			var isfound = list_html_tags_1[z].includes("<");
			var index = list_html_tags_1[z].indexOf("<")
			if (isfound){
				var tags_names = list_html_tags_1[z].substr(index+1);
				list_html_tags_2.push(tags_names);
			}
		}
	  for (let z = 1; z < list_html_tags_2.length ; z++){
			for (let x = 0; x < z ; x++){
				if (list_html_tags_2[x] == list_html_tags_2[z]){
				   list_html_tags_2[x]
					result.tags[tag_name] += 1 ;
				} else {
				  var tag_name = list_html_tags_2[z]
					result.tags[tag_name] = 1 ;
				}
			}	
		}
	}
	return list_html_tags_2;
}