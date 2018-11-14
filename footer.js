	var myIndex = 0;
		placeFooter();

		function placeFooter() {
			var pageHeight = document.body.clientHeight + document.head.clientHeight;
			var f = document.footer;
			var screenHeight = screenHeight - f.height;
			
			if (pageHeight < screenHeight)
			{
				f.style.position = "fixed";
			}
		}