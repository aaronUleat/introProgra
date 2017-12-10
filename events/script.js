// var Fenton = (function() {
// 	var $item  = $('#select__item');
// 	var $btn = $('#cont');
// 	this.itms = {
// 		newVal: 'id'
// 	}
// 	function bindOnchange() {
// 		localStorage.setItem('selVal', 'id__val' );
// 		$item.on('change', changeId);
// 		$btn.on('click', getTheVal)
// 	}

// 	function changeId() {
// 		localStorage.setItem('selVal', $(this).val() );
// 	}

// 	function getTheVal() {
// 		console.log(localStorage.selVal);
// 	}

// 	return {
// 		bindOnchange: bindOnchange
// 	}
// })();
// Fenton.bindOnchange();
 var $btn = $('#cont');
 var $item  = $('#select__item')
var btn = {
	mainVal: 'id__val',
	getVal: function(value) {
		return console.log( this.mainVal );
	},
	funcChange: function(evt) {
	 	console.log( $item.val() );
	},
	
}
$btn.on('click', btn.funcChange );

