var disqus_config = function () {
	this.page.url = document.getElementById('disqus_thread').getAttribute('data-canonical-url'); 
};

(function() { 
	var d = document, s = d.createElement('script'), shortname = d.getElementById('disqus_thread').getAttribute('data-disqus-shortname');
	console.log(shortname);
	s.src = 'https://' + shortname + '.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
