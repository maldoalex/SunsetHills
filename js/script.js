document.getElementById("btnSubmit").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", Clear);

function SunsetHills(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);
    let num4 = parseInt(document.getElementById("input4").value);
    let num5 = parseInt(document.getElementById("input5").value);

    let array = new Array();
    array.push(num1);
    array.push(num2);
    array.push(num3);
    array.push(num4);
    array.push(num5);

    let tallestBuilding = array[0];
    let ascendingBuildings = new Array();
    ascendingBuildings.push(tallestBuilding);

    for(let i=1; i < array.length; i++){
        if(array[i] > tallestBuilding ){
            tallestBuilding = array[i]
            ascendingBuildings.push(tallestBuilding);
        }
    }
    
    document.getElementById("output").innerText = `The Ascending array is [${ascendingBuildings.join(', ')}]`;
}
function Clear(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("output").innerText = "";
    
}