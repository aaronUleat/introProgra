

function forInfo() {
    for (var i = 1; i <= 5; i++) {
            string_ = '';
            var y  = 1;
            var resta = 5 - i;
        while( y <= 5) {
            if(resta < y) {
				string_ = string_ + ' * '
            }
            else {
				string_ = string_ + ' _ ';
            }
            y++
        }
        console.log( string_  );
    }
}

forInfo();
