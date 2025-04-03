function check()
{
	var name = document.getElementById("palindrome").value;
	var pal = ""
	for(i=name.length-1;i>=0;i--)
	{
		pal += name[i]
	}
	if(pal === name)
	{
		document.getElementById("palcheck").innerHTML = "Its a palindrome";
	}
	else{
		document.getElementById("palcheck").innerHTML = "Its not a palindrome";
	}
	
	console.log("given name = ",name)
	console.log("reverse = ",pal)
}