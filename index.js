var usersTable=document.getElementById('nav-profile');
var theadArr=['name','surname','country','city','birthday','gender'];
$(document).ready(function () {
    $.ajax({
        url: "json/users.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody = document.createElement('tbody');
            $(tbody).appendTo(table);
            for(i  in theadArr) {
                var tr = document.createElement('tr');
                var th = document.createElement('th');
                var a = document.createElement('a');
                $(a).text(theadArr[i]);
                $(a).appendTo(th);
                $(th).appendTo(tr);
                $(tr).appendTo(thead);
            }
            for(var i in data.users) {
                var tr1 = document.createElement('tr');
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
            }
            $(table).appendTo(usersTable);
        }
    });
});

