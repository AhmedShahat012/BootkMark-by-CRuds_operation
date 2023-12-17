var sitName=document.getElementById("name")
var websiteUrl=document.getElementById("url")


var allbooks=[];
if (localStorage.getItem("allbooks")!=null) {
    allbooks=JSON.parse(localStorage.getItem("allbooks"));
    displardata();
    
}
function adddata() {
    if(vaildationName()==true && vaildationurl()==true){
        var book={
            name:sitName.value,
            url:websiteUrl.value,
        }
        allbooks.push(book);
        localStorage.setItem("allbooks",JSON.stringify(allbooks));
        displardata()
        cleardata()
    }
    
}

function displardata() {
    var cartonna=``
    for(var i=0;i<allbooks.length;i++){
        cartonna+=`
        <tr>
                    <td>${i+1}</td>
                    <td>${allbooks[i].name}</td>
                   
                    <td><a href="${allbooks[i].url}" onclick="viitLink(${i})" target="_blank"><button  class="btn  btnvist " ><i class="fa-solid fa-eye pe-1"></i> visit</button></a></td>
                    <td><button onclick="deletdata(${i})" class="btn btn-danger "><i class="fa-solid fa-trash-can pe-2"></i>delet</button></td>
                </tr>
        `;
    }
    var x=document.getElementById("tablebody").innerHTML=cartonna;
     
}

function cleardata() {
    sitName.value=""
    websiteUrl.value=""
}

function deletdata(idx) {
    allbooks.splice(idx,1)
    localStorage.setItem("allbooks",JSON.stringify(allbooks));
    displardata()
    
    
}

function viitLink(idx) {
   alert("you need visit this link"+" " + allbooks[idx].url )
    
}

function vaildationName() {
    var regex=/^[a-z]{5,15}$/;
    var text=sitName.value;
    console.log(text)
    if(regex.test(text)==true){
        sitName.classList.add("is-valid");
        sitName.classList.remove("is-invalid")
        return true

    }else{
        sitName.classList.remove("is-valid");
        sitName.classList.add("is-invalid")
        return false
    }
    
}

function vaildationurl() {
    var regex=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    var text=websiteUrl.value;
    console.log(text)
    if(regex.test(text)==true){
        websiteUrl.classList.add("is-valid");
        websiteUrl.classList.remove("is-invalid")
        return true

    }else{
        websiteUrl.classList.remove("is-valid");
        websiteUrl.classList.add("is-invalid")
        return false
    }
    
}



