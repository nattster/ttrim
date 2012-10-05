var trimmer = (function(){
	var mapping = {
		'ไ': 'เ',
		'ำ': 'า',
		'ฟ': 'พ',
		'โ': 'เ',
		'ป': 'บ',
		'ใ': 'เ',
		'ฝ': 'ผ',
		'ฦ': 'ภ',
		'ฤ': 'ถ',
		'ฎ': 'ภ',
		'ฏ': 'ภ',
	};
	var ignore_ranges = [
		['\u0e47', '\u0e4e'],
		['\u0e34', '\u0e3a'],
		['\u0e31', '\u0e31'],
	];
	function ignored(c) {
		for(var i in ignore_ranges)
		{
			var range = ignore_ranges[i];
			if(c >= range[0] && c <= range[1])
				return true;
		}
		return false;
	}
	return {
		trim: function(text) {
			var trimmed = '';
			for(var i = 0; i < text.length; i++)
			{
				var c = text[i];
				if(c in mapping)
					trimmed += mapping[c];
				else if(!ignored(c)) 
					trimmed += c;
			}
			return trimmed;
		}
	};
})();
