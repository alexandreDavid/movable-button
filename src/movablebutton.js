(function($) {
    $.fn.movablebutton = function(data, options) {
		var $this = this;
		data = $.extend({
			onClick : function() {}
		}, data);
		var activeMoving = false,
			hasMoved = false;
		$this
		.mousedown(function(event) {
			// Only left click
			if (event.which === 1) {
				activeMoving = true;
				hasMoved = false;
			}
		});
		$(document).mousemove(function(event) {
			if (activeMoving) {
				$this.css('left', event.pageX - $this.width() /2);
				$this.css('top', event.pageY - $this.height() /2);
				hasMoved = true;
			}
		}).mouseup(function() {
			if (activeMoving) {
				activeMoving = false;
				if (!hasMoved) {
					data.onClick();
				}
			}
			
		})
	}
})(jQuery);