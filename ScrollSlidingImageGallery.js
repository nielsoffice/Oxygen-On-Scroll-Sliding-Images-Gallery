var ready = (callback) => {
	if(document.readyState != "loading") callback();
	else document.addEventListener('DOMContentLoaded', callback);
}

ready( () => {
	if( window.angular ) return;
	
	document.addEventListener( 'scroll', throttle( scrollAction, 10 ) );
})

function throttle( callback, limit ) {
	let waiting = false;
	
	return function() {
		
		if( !waiting ) {
			
			callback.apply(this.arguments);
			waiting = true;
			setTimeout( function() {
				waiting = false;
			}, limit);
			
		}
		
	}
}

function scrollAction() {
	
	let container = document.querySelector('#div_block-10-10');
	let firstRow = container.querySelector('div:first-child');
	let secondRow = container.querySelector('div:last-child');
	
	firstRow.style.transform = `translateX(-${this.scrollY}px)`;
	secondRow.style.transform = `translateX(${this.scrollY}px)`;
	
}