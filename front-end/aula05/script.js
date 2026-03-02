document.addEventListener("keydown", function (e){
    if(e.key=== "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key ==="p"){
        document.body.style.backgroundColor = "purple"
    }else{
          document.body.style.backgroundColor = "pink"
    }
})