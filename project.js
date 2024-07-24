let students=[];
function addStudent(students,id,name){
    for(let students of students){
        if(students.id===id){
            throw new Error("معرف الطالب موجود.");
        }
    }
    students.push({id:id,name:name,status:"غير مسجل"});
    document.write("تمت إضافة الطالب بنجاح{name}");
}
function removeStudent(students,id){
    for(let i=0;i<students.length;i++){
        if(students[i].id===id){
            students.splice(i,1);
            document.write("تم حذف الطالب بنجاح.");
            return;
        }
    }
    throw new Error("الطالب غير موجود في قائمة الطلاب .");
}
function printStudents(students){
    document.write("قائمة الطلاب .");
    for(let students of students){
        document.write("معرف الطالب :{student.id}   الاسم :{student.name}  حالة التسجيل :{student.status}");
    }
}
try{
    addStudent(students,1,"ahmad");
    addStudent(students,2,"fatima");
    printStudents(students);

    removeStudent(students,1);
    printStudents(students);
}catch(error){
    document.write("Error :error.message");
}
