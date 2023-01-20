for (var a=2;a<=10;a++)
{
    var b = 5;
    for(var i=2;i<= a;i++)
    {
        if(a%i==0 && i!==a)
        {b = 9;} 
    }
    if (b == 5)
     {console.log(a);}

}