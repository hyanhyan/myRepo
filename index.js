var users = [
    {
        "id": 0,
        "name": "John",
        "surname": "Smith",
        "country": "USA",
        "city": "New York",
        "dateOfBirth": "1990-10-01",
        "gender": "male"
    },
    {
        "id": 1,
        "name": "Poghos",
        "surname": "Poghosyan",
        "country": "Armenia",
        "city": "Gyumri",
        "dateOfBirth": "1999-11-12",
        "gender": "male"
    },
    {
        "id": 2,
        "name": "John",
        "surname": "Doe",
        "country": "England",
        "city": "London",
        "dateOfBirth": "1995-01-01",
        "gender": "male"
    }
];

function createTable(data) {
    var tableBody = $('#users_table tbody');
    tableBody.html('');
    if(data) {
        data.forEach((el, i)=>{
            var tr = `<tr>
			<td>${el.id}</td>
			<td>${el.name}</td>
			<td>${el.surname}</td>
			<td>${el.country}</td>
			<td>${el.city}</td>
			<td>${el.dateOfBirth}</td>
			<td>${el.gender}</td>
			<td><img src="img/delete.jpg" class="homeImg" onclick='delFunc(${i})'><img src="img/update.jpg" class="homeImg" onclick='editUser(${i})'></td>
			</tr>`;
            tableBody.append(tr)
        })
    }
}

createTable(users);

function pushObj() {
    var myNewObjElement = {};
    myNewObjElement.id=users.length;
    myNewObjElement.name=$(`#name`).val();
    myNewObjElement.surname=$(`#surname`).val();
    myNewObjElement.country=$(`#country`).val();
    myNewObjElement.city=$(`#city`).val();
    myNewObjElement.gender = $("input[name='gender']:checked").val();
    users.push(myNewObjElement);
    createTable(users);
    document.getElementById('nav-profile-tab').click();
}

function delFunc(i) {
    var result = confirm("Do you want to delete this row?");
    if (result === true) {
        users.splice(i, 1);
        createTable(users);
    }
}
function editUser(i) {
    $('#name').val(users[i].name);
    $('#surname').val(users[i].surname);
    $('#country').val(users[i].country);
    $('#city').val(users[i].city);
    $('#date').val(users[i].dateOfBirth);
    $(`#${users[i].gender}`).prop("checked", true);
    $("#submit_button").text('Update').prop( "onclick", null ).click(function() {
        updateUser(i);
    });
    document.getElementById('nav-home-tab').click();
}
function updateUser(i) {
    users[i] = {};
    users[i].id = users.length;
    users[i].name = $('#name').val();
    users[i].surname = $('#surname').val();
    users[i].country = $('#country').val();
    users[i].city = $('#city').val();
    users[i].dateOfBirth = $('#date').val();
    users[i].gender = $("input[name='gender']:checked").val();
    createTable(users);
}


