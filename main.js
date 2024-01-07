// find simple interest

function si()
{
    var p=document.getElementById("pname").value;
    var r=document.getElementById("roi").value;
    var y=document.getElementById("yname").value;
    var pry=p*r*y/100;
    document.getElementById("pny").innerHTML="simple intrest ammount is :"+pry;
}

// square of number

function sq()
{
    var Num=document.getElementById("Numbers").value;
    var res=Math.pow(Num,2);
    document.getElementById("ans").innerHTML="square of numbers is :"+res;
}

// compaund interest 

function ci()
{
    var f=document.getElementById("fname").value;
    var s=document.getElementById("sroi").value;
    var t=document.getElementById("tyname").value;
    var ansr=f*(Math.pow((1+s/100),t));
    document.getElementById("cpi").innerHTML="your compound interest :"+ansr;
}

// find age for eligibility for votting  short 

function ag_ter()
  {
      var og=document.getElementById("umar").value;
      var vm=og>=18?"i am eligible for voting":"i am not eligible for voting";
      document.getElementById("javab").innerHTML=vm;
  }

// <!-- do the Subtract (badbaki)-->

function sm()
{
    var x=document.getElementById("cname").value;
    var z=document.getElementById("ron").value;
    var prm=x-z;
    document.getElementById("pnm").innerHTML=`Answer your Subtract :${prm}`;
}

// multiply 

function ply()
{
    var cd=document.getElementById("jname").value;
    //alert(cd);
    var ef=document.getElementById("ppname").value;
    //alert(ef);
    var ofj=cd*ef;
    //alert(ofj);
    document.getElementById("oft").innerHTML="your multiplay is :"+ofj;
}

// <!-- ------ Sum up (sarvala) ------  --> 

function ansplus()
{
    var pk=parseInt(document.getElementById("pgname").value)
    var ck=parseInt(document.getElementById("pfsname").value)
    var fc=pk+ck;
    document.getElementById("plus").innerHTML="your Sum up is :"+fc;
}

// ---------- check in Average marks ---------- 

function pcmce()
{
    var gh=parseInt(document.getElementById("physics").value)
    var ij=parseInt(document.getElementById("chemistry").value)
    var kl=parseInt(document.getElementById("math").value)
    var mn=parseInt(document.getElementById("computer").value)
    var op=parseInt(document.getElementById("english").value)
    var gikmo=(gh+ij+kl+mn+op)/5;
    document.getElementById("cam").innerHTML="Your Average Marks :"+gikmo;
}

// ---------- Print Your Name ---------- 

function dnmp()
{
    var nt=document.getElementById("entrynm").value;
    document.getElementById("pymn").innerHTML="My name is :"+nt;
}

// ----------- onmouseover / onmouseout ----------- 

function display1()
{
  document.getElementById("imggek").src="https://wallpapercave.com/wp/wp5086229.jpg";
}

function display2()
{
  document.getElementById("imggek").src="https://static.autox.com/uploads/2022/08/Mahindra-Scorpio-Classic-Left-Front-Three-Quarter.jpg";
}

// ----------- onmouseover / onmouseout Name ----------- 

function mitesh()
{
    document.getElementById("zm").innerHTML="Parmar Mitesh";
    
}

function parmar()
{
    
    document.getElementById("zm").innerHTML="Hello Everyone";   
}

// ---------- Greater than and less than (if) ---------- 

function ok()
{
    var bavaliya=parseInt(document.getElementById("abig").value)
    var dharmesh=parseInt(document.getElementById("bsmall").value)
    var bharat=bavaliya>dharmesh;

if (bavaliya>dharmesh)
{
    document.getElementById("meet").innerHTML="A is greater than B";
}

else if (bavaliya<dharmesh)
{
    document.getElementById("meet").innerHTML="A is less than B";
}

else 
{
    document.getElementById("meet").innerHTML="A and B both are same"; 
}

}

// ----------- Login Mail ---------- 

function lgn()
{
    var bholo=document.getElementById("dhamo").value
    var jadav=document.getElementById("mitha").value

    if(bholo=='mymail@gmail.com' && jadav=='password')
    {
        alert('You are Logged in successfully')
        window.location='https://www.mercedes-benz.co.in/';
    }

    else 
    {
   
        alert('Your email and Password are Incorrect try again')
         window.location='index.html';
   
    }
}

// ---------- Check Your Grade ---------- 

function okg()
{
    var rahul=document.getElementById("yourg").value
    switch(rahul)
    {
        case 'A':
        document.getElementById("yourgrade").innerHTML="I am Topper students &#9786";
            break;
        case 'B':
        document.getElementById("yourgrade").innerHTML="I am average students &#9786";
            break;
        case 'C':
        document.getElementById("yourgrade").innerHTML="You are failed students &#9785";
            break;

        default: 
            document.write("Your grade is not found anywhere please contact to admin");
            break;
    }
}

// ----- Filter age check enter age and check and show age ----- 

// ========== loader start ==========

var MyLoader;
function MainFunction()
{
    MyLoader=setTimeout("Test()",1000);
}

function Test()

{
    document.getElementById("loadimg").style="display:none !important";
    document.getElementById("load").style="display:block !important";
}

// =========== loader end ========== 