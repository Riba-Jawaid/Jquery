$(document).ready(function(){

var updateScreen= (displayValue)=>{

    var displayValue= displayValue.toString();
    $('.screen').html(displayValue.substring(0,10));
};


var result=0;
var preEntry=0;
var currentEntry='0';
var operation= null;
updateScreen(result);



    $('.button').on('click', function(evt){
        var buttonPressed= $(this).html();
        console.log(buttonPressed);

    if( buttonPressed==='C')
    {
        result=0; currentEntry='0';
    }
    else if (buttonPressed==='CE')
    {
        currentEntry='0';
    }
    else if(buttonPressed==='back')
    {
        currentEntry= currentEntry.substring(0, currentEntry.length-1);
    }
    else if(buttonPressed==='+/-')
    {
        currentEntry*=-1;
    }
    else if(buttonPressed === '.') {
        if (!currentEntry.includes('.')) {
            currentEntry += '.';
        }
    }
    
    else if (isNumber(buttonPressed))
    {
        if(currentEntry==='0')
        {
            currentEntry= buttonPressed;
        }
        else
        {
            currentEntry=currentEntry+buttonPressed;
        }
    }
    else if(isOperator(buttonPressed)){
        preEntry=parseFloat(currentEntry);
        operation=buttonPressed;
        currentEntry=' ';
    }
    else if( buttonPressed==='%')
    {
        currentEntry = parseFloat(currentEntry) / 100;

    }
    else if(buttonPressed === 'sqrt') {
        currentEntry = Math.sqrt(parseFloat(currentEntry));
    }
    else if(buttonPressed === '1/x') {
        currentEntry = 1 / parseFloat(currentEntry);
    }
    
    else if( buttonPressed==='pi')
    {
        currentEntry=Math.PI;
    }
    else if(buttonPressed==='=')
    {
        currentEntry= operate(preEntry, currentEntry, operation);
        operation= null;
    }
    
    updateScreen(currentEntry);

});





var isNumber= (value)=>
{
 return !isNaN(value);
};

var isOperator= (value)=>
{
    return value ==='/' || value ==='*' || value ==='+' || value ==='-';
};

var operate= (a,b,operation)=>
{
    a=parseFloat(a);
    b=parseFloat(b);
    console.log(a,b,operation);

    if (operation==='+')
        return a+b;
    else if (operation==='-')
        return a-b;
    else if (operation==='*')
        return a*b;
    else if (operation === '/') {
            if (b === 0) {
                return 'Error'; // Or handle it in a way suitable for your app
            }
            return a / b;
        }
        
}
   
});
