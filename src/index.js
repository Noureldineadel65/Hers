var waypoint = new Waypoint({
	element: document.getElementById("nav-trigger"),
	handler: function (direction) {
		document.querySelector("nav").classList.toggle("dark");
	},
});
