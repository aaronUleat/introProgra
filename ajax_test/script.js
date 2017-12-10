var card_template = (function() {
	var app__temp = $('.temp');
	var $btn = $('.btn');
	function bindButton() {
		$btn.on('click', generateTemplate)
	}

	function generateTemplate() {
		var ccrTemp = createTemplate(); 
		app__temp.append( ccrTemp );

		var respt = getResp();
		console.log(respt);
	}


	function createTemplate() {
		var ccrTemp = `
			<div class="col-xs-4">
				<div class="form-group">
					<input type="file">
				</div>
			</div>
			<div class="col-xs-4">
				<div class="form-group">
					<input type="text" class="form-control">
				</div>
			</div>
			<div class="col-xs-4">
				<div class="form-group">
					<select class="form-control place__countries">
					</select>
				</div>
			</div>
		`
		return ccrTemp;
	}

	function getResp() {
		var $fill_select = $('.place__countries');
		var theResponse = getJASONAsync().then( result => {
			var arr_count;
			console.log( $fill_select );
			result.data.forEach( function(value){
				var b =`<option> ${value.name} </option>`;
				arr_count = arr_count + b;
			});
			$fill_select.append(arr_count);
		});
	}

	function getJASONAsync() {
		let json = axios.get('https://restcountries.eu/rest/v2/all');
		return json;
	}	 

	return {
		bindButton: bindButton,
	}
})();
card_template.bindButton();




