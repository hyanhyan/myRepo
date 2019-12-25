var usersTable = document.getElementById('nav-profile');
var theadArr = ['name', 'surname', 'country', 'city', 'birthday', 'gender', '', ''];
$(document).ready(function () {
    $.ajax({
        url: "json/users.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody = document.createElement('tbody');
            tbody.setAttribute("id", "tbodyold");
            $(tbody).appendTo(table);

            for (i in theadArr) {
                var tr = document.createElement('tr');
                var th = document.createElement('th');
                var a = document.createElement('a');
                $(a).text(theadArr[i]);
                $(a).appendTo(th);
                $(th).appendTo(tr);
                $(tr).appendTo(thead);
            }

            for (var i in data.users) {
                var tr1 = document.createElement('tr');
                tr1.setAttribute('id', 'info');
                $(tr1).appendTo(tbody);
                var td1 = document.createElement('td');
                $(td1).text(data.users[i].name);
                $(td1).appendTo(tr1);
                var td2 = document.createElement('td');
                $(td2).text(data.users[i].surname);
                $(td2).appendTo(tr1);
                var td3 = document.createElement('td');
                $(td3).text(data.users[i].country);
                $(td3).appendTo(tr1);
                var td4 = document.createElement('td');
                $(td4).text(data.users[i].city);
                $(td4).appendTo(tr1);
                var td5 = document.createElement('td');
                $(td5).text(data.users[i].dateOfBirth);
                $(td5).appendTo(tr1);
                var td6 = document.createElement('td');
                $(td6).text(data.users[i].gender);
                $(td6).appendTo(tr1);
                var td7 = document.createElement('td');
                td7.setAttribute('id', 'info');
                var update = document.createElement('img');
                update.setAttribute('class', 'homeImg');
                update.setAttribute('onclick', data.users[i].click);
                update.src = data.users[i].img;
                $(update).appendTo(td7);
                $(td7).appendTo(tr1);
                var td8 = document.createElement('td');
                td8.setAttribute('id', 'all');
                var del = document.createElement('img');
                del.setAttribute('id', 'alll');
                del.setAttribute('class', 'homeImg');
                del.setAttribute('onclick', data.users[i].onclick);
                del.src = data.users[i].image;
                $(del).appendTo(td8);
                $(td8).appendTo(tr1);
            }
            $(table).appendTo(usersTable);
        }
    });
});

var txt = [
    {
        name: "John",
        surname: "Smith",
        country: "USA",
        city: "New York",
        dateOfBirth: "01/10/1990",
        gender: "male",
        img: "img/update.jpg",
        image: "img/delete.jpg",
        click: "myFunc(1)",
        onclick: "myFunc(2)"

    }
];

function pushObj() {
    let myNewObjElement = {
        "name": document.getElementById('name').value,
        "surname": document.getElementById('surname').value,
        "country": document.getElementById('country').value,
        "city": document.getElementById('city').value,
        "dateOfBirth": document.getElementById('date').value,
        "gender": $('#gen:checked').value,
        "img": "img/update.jpg",
        "image": "img/delete.jpg",
        "click": "myFunc(1)",
        "onclick": "myFunc(2)"
    };
        var tb = document.getElementById("tbodyold");
        var tbody = document.createElement('tbody');
        tb.appendChild(tbody);
        var tr1 = document.createElement('tr');
        tbody.appendChild(tr1);
        var td1 = document.createElement('td');
        $(td1).text(myNewObjElement.name);
        $(td1).appendTo(tr1);

        var td2 = document.createElement('td');
        $(td2).text(myNewObjElement.surname);
        $(td2).appendTo(tr1);

        var td3 = document.createElement('td');
        $(td3).text(myNewObjElement.country);
        $(td3).appendTo(tr1);

        var td4 = document.createElement('td');
        $(td4).text(myNewObjElement.city);
        $(td4).appendTo(tr1);

        var td5 = document.createElement('td');
        $(td5).text(myNewObjElement.dateOfBirth);
        $(td5).appendTo(tr1);

        var td6 = document.createElement('td');
        $(td6).text(myNewObjElement.gender);
        $(td6).appendTo(tr1);

        var td7 = document.createElement('td');
        var update = document.createElement('img');
        update.setAttribute('class', 'homeImg');
        update.setAttribute('click', myNewObjElement.click);
        update.src = myNewObjElement.img;
        $(update).appendTo(td7);
        $(td7).appendTo(tr1);

        var td8 = document.createElement('td');
        var del = document.createElement('img');
        del.setAttribute('class', 'homeImg');
        del.src = myNewObjElement.image;
        del.setAttribute('click', myNewObjElement.onclick);
        $(del).appendTo(td8);
        $(td8).appendTo(tr1);

        txt.push(myNewObjElement);
        console.log(txt);
        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('country').value = "";
        document.getElementById('city').value = "";
        document.getElementById('date').value = "";


}


    function myFunc(x) {
        if (x === 1) {
            console.log("trtr");
        } else if (x === 2) {
            var result = confirm("Do you want to delete this row?");
            if (result === true) {
                document.getElementById('info').remove();
            } else {
                alert("Cancelled")
            }
        }
    }


