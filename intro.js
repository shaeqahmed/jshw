var b = document.getElementById('b');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var thelist = document.getElementById('thelist');
var thelist2 = document.getElementById('thelist2');
var thelist3 = document.getElementById('thelist3');
var h = document.getElementById('h');


var listenerify = function (items) {
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		item.addEventListener('mouseover', function (e) {
			h.innerText = this.innerText;
		});
		item.addEventListener('mouseout', function (e) {
			h.innerText = "Hello World!";
		});

		item.addEventListener('click', function (e) {
			this.remove();
		});
	}
};

b.addEventListener('click', function (e) {
	var li = document.createElement('li');
	var text = document.createTextNode('another one');
	li.appendChild(text);
	thelist.appendChild(li);
	listenerify([li]);
	
});

var litems = document.getElementsByTagName('li');
listenerify(litems);


var num0 = 0;
var num1 = 1;
b2.addEventListener('click', function (e) {
	var li = document.createElement('li');
	var text = document.createTextNode(num0);
	li.appendChild(text);
	thelist2.appendChild(li);
	num1 += num0;
	num0 = num1 - num0;
});


var Pi=0;
var n=1;
b3.addEventListener('click', function (e) {
	var li = document.createElement('li');
	var text = document.createTextNode(Pi);
	li.appendChild(text);
	thelist3.appendChild(li);
	for (var i = 0; i < 100000; i++) {
	Pi+=(4/n)-(4/(n+2));
	n+=4;
	}
});
