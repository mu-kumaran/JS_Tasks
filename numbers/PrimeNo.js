function prime()
{
    var n = parseInt(document.getElementById("prime").value)
    if(n<=1){
        document.getElementById("primecheck").innerHTML = "It's not a prime number"
        var res = false; 
    }
    else{
        res = true;
        for(var i=2;(i**2)<=n;i++)
        {
            if(n%i === 0){
                document.getElementById("primecheck").innerHTML = "It's not a prime number. It is divisible by "+i;
                res = false;
                break;
            }
        }
    }
    if(res){
        document.getElementById("primecheck").innerHTML = "It's a prime number"
    }
}