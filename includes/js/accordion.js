( function( $ ) {	"use strict";	$(document).ready(function(){		$(".wc-shortcodes-accordion.wc-shortcodes-accordion-default").accordion({heightStyle: "content", animate: 200});		$(".wc-shortcodes-accordion.wc-shortcodes-accordion-collapse").accordion({heightStyle: "content", animate: 200, collapsible: true, active: false });	});} )( jQuery );