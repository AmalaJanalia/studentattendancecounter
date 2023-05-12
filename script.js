
let noOfCounts = document.getElementById("count")
let saveAttendance=document.getElementById("previousday")
let count = 0
function increaseCount() {
   count += 1
   noOfCounts.textContent = count
   
}

function save(){
    let track= count + "-"
    saveAttendance.textContent += track
    noOfCounts.textContent = 0
    count=0

}

