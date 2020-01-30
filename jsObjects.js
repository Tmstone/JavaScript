let students = [
     {name: 'Remy', cohort: 'Jan'},
     {name: 'Genevieve', cohort: 'March'},
     {name: 'Chuck', cohort: 'Jan'},
     {name: 'Osmond', cohort: 'June'},
     {name: 'Niki', cohort: 'June'},
     {name: 'Boris', cohort: 'June'},
];
/*
for (var student in students) {
     //console.log(students[student]);
     console.log('name: ${student.name}, cohort: ${student.cohort}');
}*/
for (var i = 0; i < students.length; i++) {
     console.log('Name: '+ students[i].name + ',' + "Cohort: " + students[i].cohort);
}


let users = {
          employees: [
               {'first_name': 'Miguel', 'last_name' : 'Jones'},
               {'first_name': 'Ernie', 'last_name' : 'Bertson'},
               {'first_name': 'Nora', 'last_name' : 'Lu'},
               {'first_name': 'Sally', 'last_name' : 'Barkyoumb'},
          ],
          managers: [
               {'first_name': 'Lilian', 'last_name' : 'Chambers'},
               {'first_name': 'Gordon', 'last_name' : 'Poe'},
          ]
};


for (var key in users) {
     console.log(key.toUpperCase());
      for (let i = 0; i < users[key].length; i++){
           const count = i + 1;
           const fname = users[key][i].first_name;
           const lname = users[key][i].last_name;
           const nameLength = fname.length + lname.length
           console.log('${count}-${lname}, ${fname}-${nameLength}');
      }
}
    // console.log(i + ' - ' + users.employees[i]['first_name'].toUpperCase() + ', ' + users.employees[i]['last_name'].toUpperCase() );
