const counterElement = document.querySelector('.timer');
let initial_count = 10;
let counter = 0;
setInterval(()=>{
    
    if(counter < 1)
    {
        counter = initial_count;
         counterElement.textContent = "Happy Independence day";
    }
    else
    {
        console.log(counter)
        counterElement.textContent = counter;
        counter -= 1;
    }
        
}
,1000)