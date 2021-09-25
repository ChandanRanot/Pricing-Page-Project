function myFunction(){
    var checkBox = document.getElementById("myCheck");

    if(checkBox.checked === true)
    {
        document.getElementById("basic-month").style.display = 'block';
        document.getElementById("pro-month").style.display = 'block';
        document.getElementById("master-month").style.display = 'block';
        document.getElementById("basic-annual").style.display = 'none';
        document.getElementById("pro-annual").style.display = 'none';
        document.getElementById("master-annual").style.display = 'none';
    }
    else{
        document.getElementById("basic-month").style.display = 'none';
        document.getElementById("pro-month").style.display = 'none';
        document.getElementById("master-month").style.display = 'none';
        document.getElementById("basic-annual").style.display = 'block';
        document.getElementById("pro-annual").style.display = 'block';
        document.getElementById("master-annual").style.display = 'block';
    }
}