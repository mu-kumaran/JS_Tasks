function StringReverse()
{
    var name = document.getElementById("StrRev").value;
    var str_rev = ""
    for(i=name.length-1;i>=0;i--){
        str_rev += name[i]
    } 
    document.getElementById("str1").innerHTML = "Reverse of given string: "+str_rev;
}