let count=0;
const value=document.querySelector("#value");
const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(btn) {
    btn.addEventListener("click",function(e){
        const st=e.currentTarget.classList;
        if(st.contains('dec')){
            count --;
        }
       else if(st.contains('inc')){
            count ++
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }
        if(count<0)
    {
        value.style.color="orange";
    }
    if(count==0)
    {
        value.style.color="black";
    }
        value.textContent=count;
    });});