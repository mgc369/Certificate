let user_name = document.getElementById("valname");
let user_course = document.getElementById("valcourse");
let user_grade = document.getElementById("valgrade");
let user_date = document.getElementById("valdate");
let user_data = [user_name, user_course, user_grade, user_date];
const addData = (variable, id) => {
    if (variable == "") {
        return;
    } else {
        return document.getElementById(id).textContent = variable;
    }
}
const resetData = (id) => {
    document.getElementById(id).textContent = `(${id})`;
    for (let i = 0; i < user_data.length; i++) {
        user_data[i].value = "";
    }
}
document.getElementById("subm").addEventListener("click", () => {
    addData(user_name.value, "student");
    addData(user_course.value, "grade");
    addData(user_grade.value, "course");
    addData(user_date.value, "date");
});
document.onkeydown = (e) => {
    if (e.key === "Enter") {
        document.getElementById("subm").click();
    }
}
document.getElementById("resu").addEventListener("click", () => {
    resetData("student");
    resetData("grade");
    resetData("course");
    resetData("date");
});