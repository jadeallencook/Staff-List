(function() {
    new Promise(function(res, rej) {
        var request = new XMLHttpRequest;
        request.onload = function() {
            res(JSON.parse(this.response));
        }
        request.open('get', 'staff.json');
        request.send();
    }).then(function(staff) {
        var container = document.getElementById('staff-list');
        container.innerHTML = null;
        for (var x = 0; x < staff.length; x++) {
            var person = staff[x];
            var elem = document.createElement('div');
            elem.classList.add('staff');
            var image = document.createElement('img');
            image.setAttribute('src', person.image);
            var description = document.createElement('div');
            description.innerHTML = '<b>' + person.bio.replace(',', '</b>,');
            elem.appendChild(image);
            elem.appendChild(description);
            container.appendChild(elem);
        }
    });
})();