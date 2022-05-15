let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        let val=e.target.innerHTML;
        if(string.length===0 &&(val==='+' || val==='-' || val==='/' || val==='*' || val==='%') ){
            alert("Invalid Expression");
            document.querySelector('input').value="";
        }
        else if(val=== 'x' || val=='y'){
            alert("functionality not added yet");
            string="";
            document.querySelector('input').value=string;
        }
        else if(string.length==0 && val=='c'){
            alert("put some expressions first");
        }
        else if(val=='c'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(val==='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        string=string+val;
        document.querySelector('input').value=string;
        }
    })
})