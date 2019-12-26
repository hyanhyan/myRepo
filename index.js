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
            var tr = document.createElement('tr');
            for (i in theadArr) {
                // var tr = document.createElement('tr');
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
                td1.setAttribute('class', 'name');
                $(td1).text(data.users[i].name);
                $(td1).appendTo(tr1);
                var td2 = document.createElement('td');
                td2.setAttribute('class', 'surname');
                $(td2).text(data.users[i].surname);
                $(td2).appendTo(tr1);
                var td3 = document.createElement('td');
                td3.setAttribute('class', 'country');
                $(td3).text(data.users[i].country);
                $(td3).appendTo(tr1);
                var td4 = document.createElement('td');
                td4.setAttribute('class', 'city');
                $(td4).text(data.users[i].city);
                $(td4).appendTo(tr1);
                var td5 = document.createElement('td');
                td5.setAttribute('class', 'dateOfBirth');
                $(td5).text(data.users[i].dateOfBirth);
                $(td5).appendTo(tr1);
                var td6 = document.createElement('td');
                td6.setAttribute('class', 'gender');

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
                // tr1.setAttribute('data-id', data.users[i]["id"]);
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
        click: "myFunc(1, this)",
        onclick: "myFunc(2, this)"

    }
];

function pushObj() {
    let myNewObjElement = {
        "name": document.getElementById('name').value,
        "surname": document.getElementById('surname').value,
        "country": document.getElementById('country').value,
        "city": document.getElementById('city').value,
        "dateOfBirth": document.getElementById('date').value,
        "gender": $('input:checked',('#gen')).val(),
        "img": "img/update.jpg",
        "image": "img/delete.jpg",
        "click": "myFunc(1, this)",
        "onclick": "myFunc(2, this)"
    };

    var tb = document.getElementById("tbodyold");
    //var tbody = document.createElement('tbody');
    //tb.appendChild(tbody);
    var tr1 = document.createElement('tr');
    tb.appendChild(tr1);
    var td1 = document.createElement('td');
    td1.setAttribute('class', 'name');
    $(td1).text(myNewObjElement.name);
    $(td1).appendTo(tr1);

    var td2 = document.createElement('td');
    td2.setAttribute('class', 'surname');
    $(td2).text(myNewObjElement.surname);
    $(td2).appendTo(tr1);

    var td3 = document.createElement('td');
    td3.setAttribute('class', 'country');
    $(td3).text(myNewObjElement.country);
    $(td3).appendTo(tr1);

    var td4 = document.createElement('td');
    td4.setAttribute('class', 'city');

    $(td4).text(myNewObjElement.city);
    $(td4).appendTo(tr1);

    var td5 = document.createElement('td');
    td5.setAttribute('class', 'dateOfBirth');

    $(td5).text(myNewObjElement.dateOfBirth);

    $(td5).appendTo(tr1);

    var td6 = document.createElement('td');
    $(td6).text(myNewObjElement.gender);
    td6.setAttribute('class', 'gender');
    $(td6).appendTo(tr1);

    var td7 = document.createElement('td');
    var update = document.createElement('img');
    update.setAttribute('class', 'homeImg');
    update.setAttribute('onclick', myNewObjElement.click);
    update.src = myNewObjElement.img;
    $(update).appendTo(td7);
    $(td7).appendTo(tr1);

    var td8 = document.createElement('td');
    var del = document.createElement('img');
    del.setAttribute('class', 'homeImg');
    del.src = myNewObjElement.image;
    del.setAttribute('onclick', myNewObjElement.onclick);
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


function myFunc(x, self) {
    if (x === 1) {
        self.parentElement.parentElement.remove();
        document.getElementById("nav-home-tab").click();
        console.log(self.parentElement.parentElement.getElementsByClassName("dateOfBirth")[0].innerText);
        document.getElementById('name').value = self.parentElement.parentElement.getElementsByClassName("name")[0].innerText;
        document.getElementById('surname').value = self.parentElement.parentElement.getElementsByClassName("surname")[0].innerText;
        document.getElementById('country').value = self.parentElement.parentElement.getElementsByClassName("country")[0].innerText;
        document.getElementById('city').value = self.parentElement.parentElement.getElementsByClassName("city")[0].innerText;
        document.getElementById('date').value = self.parentElement.parentElement.getElementsByClassName("dateOfBirth")[0].innerText;


    } else if (x === 2) {
        var result = confirm("Do you want to delete this row?");
        if (result === true) {
            self.parentElement.parentElement.remove();
        } else {
            alert("Cancelled")
        }
    }
}


