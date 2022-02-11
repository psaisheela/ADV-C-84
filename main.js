
	
var names_of_students = []

function submit(){
    var name1 = document.getElementById("name_of_student_1").value;
    var name2 = document.getElementById("name_of_student_2").value;
    var name3 = document.getElementById("name_of_student_3").value;
    var name4 = document.getElementById("name_of_student_4").value;

    names_of_students.push(name1);
    names_of_students.push(name2);
    names_of_students.push(name3);
    names_of_students.push(name4);

    console.log(names_of_students);

    document.getElementById("namesOfStudents").innerHTML = names_of_students;

}