//1. Write a js program to read and print elements of array.
var arr = [];

 function addArrayElement(value) {

    var value = document.getElementById("arrVal").value;
    
    arr.push(value);  
    var str=arr.toString(); 
    document.getElementById("resulthead").innerHTML="Result : "

    document.getElementById("result").innerHTML = str;
    
    document.getElementById("arrVal").value = "";
}

 //2. Write a js program to print all negative elements in an array.
 
 var arr2 = [];
 var arr2String=[];

 function addNegativeElements(value) 
 {

    var value = document.getElementById("example02").value;
    
   if (parseInt(value)<0) {
       arr2String.push(value);
   }
  
  
   
 
     var str = arr2String.toString();
     document.getElementById("resultprog2").innerHTML="Result : "
     document.getElementById("result2").innerHTML = str;
    document.getElementById("example02").value = "";
    
     
    
}
//3. Write a js program to find sum of all array elements.

var sumOfArray = 0;  
var arr3 = []; 
 
function arraySum(value) {

    var value = document.getElementById("example03").value;
    arr3.push(parseInt(value)); 
    document.getElementById("example03").value="";
 
     
    
}
 
function arrayPrintSum() {
    document.getElementById("resultprog3").innerHTML=`Sum Result of Array: [${arr3.toString()}]`
    arr3.forEach(function myfunction(element) {
        sumOfArray = sumOfArray + element;
        document.getElementById("result3").innerHTML = sumOfArray;
    });
    
}
 
//4. Write a js program to find maximum and minimum element in an array.
 var arr4=[];

 function arrayPushElement(value) {

   var value = document.getElementById("example04").value;
    arr4.push(parseInt(value));

      

  document.getElementById("example04").value="";
}

function printMaximum() {
    arr4.sort((a,b)=> b - a); 
    document.getElementById("resultprog4").innerHTML="Maximum Element in Array : ";
    document.getElementById("result4").innerHTML = arr4[0];
   
    
}

function printMinimum() {
    arr4.sort((a,b)=> a - b); 
    document.getElementById("resultprog4").innerHTML="Minimum Element in Array : ";
    document.getElementById("result4").innerHTML = arr4[0];

    
}
//5. Write a js program to find second largest element in an array.
var arr5 = [];

function getSecondLargeElement() {

      arr5.push(document.getElementById("example05").value);

    
}



function printSecondLargeElement() {
    arr5.sort((a,b)=> b - a); 
    document.getElementById("resultprog5").innerHTML="Second Largest Element in an Array : ";
    document.getElementById("result5").innerHTML = arr5[1];

    
}


//6. Write a js program to count total number of even and odd elements in an array.
var arr6 = [];

function funcExample06() 
{
    arr6.push(document.getElementById("example06").value);
    document.getElementById("example06").value="";
}

function countEvenOdd(arr, arr_size)
{

    var e = 0;
    var o = 0;

    arr = arr6;
    arr_size = arr6.length;

 
    for (var i = 0; i < arr_size; i++) {
         
     
        if (arr[i] % 2 == 0){
            e++;
        }
        else{
            o++;
        }
    }
    document.getElementById("resultprog6").innerHTML="Result : ";
    document.getElementById("result6").innerHTML =  `Number of even Elements : ${e} <br/> Number of odd Elements : ${o}`;
 
}

//7. Write a js program to count total number of negative elements in an array.
 
 
var arr7 = [];
var arr7String=[];
function funcExample07(value) {
    
    value = document.getElementById("example07").value
    arr7.push(value);
    document.getElementById("example07").value = "";

    if ( value<0) {
        arr7String.push(value);
    }
    
}

function totalNegativeElements() 
{
    document.getElementById("resultprog7").innerHTML="Result : "
    var str = arr7String.length;
    document.getElementById("result7").innerHTML = str;
   document.getElementById("example07").value = "";

  }
 
 //8. Write a js program to copy all elements from an array to another array.
  
var arr8 = [];
var arr8Copy = [];

function funcExample08(value) {
  
    value = document.getElementById("example08").value;
    
    arr8.push(value);

   document.getElementById("example08").value = "";
}

function copyArrayElements() 
{
    
for (i = 0; i < arr8.length; i++) 
{
    arr8Copy[i] = arr8[i] ;
}


document.getElementById("resultprog8").innerHTML="Array Copy to another Array :";
var str = arr8Copy.toString();
document.getElementById("result8").innerHTML = `New Array is [${str}]`;



}

//9. Write a js program to insert an element in an array.
var arr9=[];

function funcExample09(value) {
  
    value = document.getElementById("example09").value;
    
    arr9.push(value);

   document.getElementById("example09").value = "";

   document.getElementById("resultprog9").innerHTML="Element Inserted into an Array :";
   var str = arr9.toString();
   document.getElementById("result9").innerHTML = `[${str}]`;
}


//10. Write a js program to delete an element from an array at specified position.
var arr10 =[];
function funcExample10(value) {
  
    value = document.getElementById("example10").value;
    
    arr10.push(value);

   document.getElementById("example10").value = "";
}
 function arrayElementDelete(value) {
    value = document.getElementById("example10a").value;

    document.getElementById("resultprog10").innerHTML=`Original  Array is[${arr10.toString()}]`;

  if (value>=0) {
      arr10.splice(value,value);
      
  }
  document.getElementById("resultprog10a").innerHTML=`After Deleted at index[${value}] Now Array is[${arr10.toString()}]`;
 }   
   
//11. Write a js program to count frequency of each element in an array.


var arr11 =[];
 
 
function funcExample11(value) {
  
    value = document.getElementById("example11").value;
    
    arr11.push(value);

   document.getElementById("example11").value = "";
}


   function countElementSpecified() {
    var cnt = 0;
    arr11.forEach(function myfunction(element){


        if (document.getElementById("example11a").value == element)
        {
          cnt++;    
        }

    });
    document.getElementById("resultprog11").innerHTML=`Result :`;

    document.getElementById("result11").innerHTML=`Frequency of given Element[${document.getElementById("example11a").value}] is ${cnt}`;

     
}
 //12. Write a js program to print all unique elements in the array.

 var arr12 =[];
 
 
function funcExample12(value) {
  
    value = document.getElementById("example12").value;
    
    arr12.push(value);

   document.getElementById("example12").value = "";
}


    
   function getUniqueElements()
   {
        
      

    var uniqueArray = [];
    
    
   
    for(var i=0; i < arr12.length;i++){
        if(uniqueArray.indexOf(arr12[i]) < 0)
        {
            uniqueArray.push(arr12[i]);
        }
        else {
           
             uniqueArray.splice(uniqueArray.indexOf(arr12[i]),1) ;
            }
        }
    document.getElementById("resultprog12").innerHTML=`Unique Elements :`;
    document.getElementById("result12").innerHTML=`[${uniqueArray}]`;
    }

    


 
 //13. Write a js program to count total number of duplicate elements in an array.
 var arr13 =[];
 
 
function funcExample13(value) {
  
    value = document.getElementById("example13").value;
    
    arr13.push(value);

   document.getElementById("example13").value = "";
}

function getTotalDuplicate()
{ 

 var uniqueArray = [];
 

 for(var i=0; i < arr13.length;i++)
 {
    if(uniqueArray.indexOf(arr13[i]) <= -1)
        {
            uniqueArray.push(arr13[i]);
        }
        else {
              
             uniqueArray.splice(uniqueArray.indexOf(arr13[i]),1) ;
            }
        }
     
 document.getElementById("resultprog13").innerHTML=`Duplicate Elements :`;
 document.getElementById("result13").innerHTML=`[${uniqueArray}]`;
 }

 