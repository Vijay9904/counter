let count=0;
const value=document.querySelector("#value");
const buttons=document.querySelector(".btn");
buttons.forEach(function(btn) {
    btn.addEventlistener("click",function(e){
        const st=e.currentTarget.classList;
        if(st.contains('dec')){
            count --;
        }
        value.textContent=count;
    });
    
});
