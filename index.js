const input = document.getElementById("numberOfword");
const container=document.querySelector(".container");

let numberOfwords;

const generateWord=(n)=>{
    let text="";
    const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let index = 0; index < n; index++) {
         let random=(Math.random()*(letter.length-1)).toFixed(0);
         text += letter[random];
        
    }
    
    return text;
    //
}

const generatePara = () => {
  numberOfwords = Number(input.value);

  let data="";
  for(let i=0;i<numberOfwords;i++)
  {
    let randomNumber=(Math.random()*10).toFixed(0);
    data+=generateWord(randomNumber).toLowerCase();
    data+=" ";
  }

  const para=document.createElement("p");

  para.innerText=data;
  para.setAttribute("class","para");
  container.append(para);



}; 
//create a paragraph then create class giving name para and then append
