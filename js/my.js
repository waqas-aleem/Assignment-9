//1. Write a js program to read and print elements of array.
var arr = [];

function addArrayElement(value) {

    var value = document.getElementById("arrVal").value;

    arr.push(value);
    var str = arr.toString();
    document.getElementById("resulthead").innerHTML = "Result : "

    document.getElementById("result").innerHTML = str;

    document.getElementById("arrVal").value = "";
}

//2. Write a js program to print all negative elements in an array.

var arr2 = [];
var arr2String = [];

function addNegativeElements(value) {

    var value = document.getElementById("example02").value;

    if (parseInt(value) < 0) {
        arr2String.push(value);
    }




    var str = arr2String.toString();
    document.getElementById("resultprog2").innerHTML = "Result : "
    document.getElementById("result2").innerHTML = str;
    document.getElementById("example02").value = "";



}
//3. Write a js program to find sum of all array elements.

var sumOfArray = 0;
var arr3 = [];

function arraySum(value) {

    var value = document.getElementById("example03").value;
    arr3.push(parseInt(value));
    document.getElementById("example03").value = "";



}

function arrayPrintSum() {
    document.getElementById("resultprog3").innerHTML = `Sum Result of Array: [${arr3.toString()}]`
    arr3.forEach(function myfunction(element) {
        sumOfArray = sumOfArray + element;
        document.getElementById("result3").innerHTML = sumOfArray;
    });

}

//4. Write a js program to find maximum and minimum element in an array.
var arr4 = [];

function arrayPushElement(value) {

    var value = document.getElementById("example04").value;
    arr4.push(parseInt(value));



    document.getElementById("example04").value = "";
}

function printMaximum() {
    arr4.sort((a, b) => b - a);
    document.getElementById("resultprog4").innerHTML = "Maximum Element in Array : ";
    document.getElementById("result4").innerHTML = arr4[0];


}

function printMinimum() {
    arr4.sort((a, b) => a - b);
    document.getElementById("resultprog4").innerHTML = "Minimum Element in Array : ";
    document.getElementById("result4").innerHTML = arr4[0];


}
//5. Write a js program to find second largest element in an array.
var arr5 = [];

function getSecondLargeElement() {

    arr5.push(document.getElementById("example05").value);


}



function printSecondLargeElement() {
    arr5.sort((a, b) => b - a);
    document.getElementById("resultprog5").innerHTML = "Second Largest Element in an Array : ";
    document.getElementById("result5").innerHTML = arr5[1];


}


//6. Write a js program to count total number of even and odd elements in an array.
var arr6 = [];

function funcExample06() {
    arr6.push(document.getElementById("example06").value);
    document.getElementById("example06").value = "";
}

function countEvenOdd(arr, arr_size) {

    var e = 0;
    var o = 0;

    arr = arr6;
    arr_size = arr6.length;


    for (var i = 0; i < arr_size; i++) {


        if (arr[i] % 2 == 0) {
            e++;
        }
        else {
            o++;
        }
    }
    document.getElementById("resultprog6").innerHTML = "Result : ";
    document.getElementById("result6").innerHTML = `Number of even Elements : ${e} <br/> Number of odd Elements : ${o}`;

}

//7. Write a js program to count total number of negative elements in an array.


var arr7 = [];
var arr7String = [];
function funcExample07(value) {

    value = document.getElementById("example07").value
    arr7.push(value);
    document.getElementById("example07").value = "";

    if (value < 0) {
        arr7String.push(value);
    }

}

function totalNegativeElements() {
    document.getElementById("resultprog7").innerHTML = "Result : "
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

function copyArrayElements() {

    for (i = 0; i < arr8.length; i++) {
        arr8Copy[i] = arr8[i];
    }


    document.getElementById("resultprog8").innerHTML = "Array Copy to another Array :";
    var str = arr8Copy.toString();
    document.getElementById("result8").innerHTML = `New Array is [${str}]`;



}

//9. Write a js program to insert an element in an array.
var arr9 = [];

function funcExample09(value) {

    value = document.getElementById("example09").value;

    arr9.push(value);

    document.getElementById("example09").value = "";

    document.getElementById("resultprog9").innerHTML = "Element Inserted into an Array :";
    var str = arr9.toString();
    document.getElementById("result9").innerHTML = `[${str}]`;
}


//10. Write a js program to delete an element from an array at specified position.
var arr10 = [];
function funcExample10(value) {

    value = document.getElementById("example10").value;

    arr10.push(value);

    document.getElementById("example10").value = "";
}
function arrayElementDelete(value) {
    value = document.getElementById("example10a").value;

    document.getElementById("resultprog10").innerHTML = `Original  Array is[${arr10.toString()}]`;

    if (value >= 0) {
        arr10.splice(value, value);

    }
    document.getElementById("resultprog10a").innerHTML = `After Deleted at index[${value}] Now Array is[${arr10.toString()}]`;
}

//11. Write a js program to count frequency of each element in an array.


var arr11 = [];


function funcExample11(value) {

    value = document.getElementById("example11").value;

    arr11.push(value);

    document.getElementById("example11").value = "";
}


function countElementSpecified() {
    var cnt = 0;
    arr11.forEach(function myfunction(element) {


        if (document.getElementById("example11a").value == element) {
            cnt++;
        }

    });
    document.getElementById("resultprog11").innerHTML = `Result :`;

    document.getElementById("result11").innerHTML = `Frequency of given Element[${document.getElementById("example11a").value}] is ${cnt}`;


}
//12. Write a js program to print all unique elements in the array.

var arr12 = [];


function funcExample12(value) {

    value = document.getElementById("example12").value;

    arr12.push(value);

    document.getElementById("example12").value = "";
}



function getUniqueElements() {



    var uniqueArray = [];



    for (var i = 0; i < arr12.length; i++) {
        if (uniqueArray.indexOf(arr12[i]) < 0) {
            uniqueArray.push(arr12[i]);
        }
        else {

            uniqueArray.splice(uniqueArray.indexOf(arr12[i]), 1);
        }
    }
    document.getElementById("resultprog12").innerHTML = `Unique Elements :`;
    document.getElementById("result12").innerHTML = `[${uniqueArray}]`;
}





//13. Write a js program to count total number of duplicate elements in an array.
var arr13 = [];


function funcExample13(value) {

    value = document.getElementById("example13").value;

    arr13.push(value);

    document.getElementById("example13").value = "";
}

function getTotalDuplicate() 
  
{    
    var uniqueArray = [];
     var dupplicateArray = [];
    
     for (let i = 0; i < arr13.length; i++) 
     {
           var cnt = 0;
          for (let j = 0; j < arr13.length; j++) 
          {
                if (arr13[i] == arr13[j])
                 {
                   cnt = cnt+1;
                    
                }
                  
          }
          if (cnt > 1 ) 
          {
                
                    dupplicateArray.push(arr13[i]);     

              
          }
            
     }  
      
     var uniqueArray = [];



    for (var i = 0; i < dupplicateArray.length; i++) {
        if (uniqueArray.indexOf(dupplicateArray[i]) == -1) {
            uniqueArray.push(dupplicateArray[i]);
        }
        // else {

        //     uniqueArray.splice(uniqueArray.indexOf(dupplicateArray[i]), 1);
        // }
    }

 

    
    document.getElementById("resultprog13").innerHTML = `Duplicate Elements in Array:[${arr13}]`;
    document.getElementById("result13").innerHTML = `${uniqueArray.length}`;
}

//14. Write a js program to delete all duplicate elements from an array.

var arr14 = [];


function funcExample14(value) {

    value = document.getElementById("example14").value;

    arr14.push(value);

    document.getElementById("example14").value = "";
}



function getUniqueElements2() {



    var uniqueArray = [];
    var duplicateArray = [];


    for (var i = 0; i < arr14.length; i++) {
        if (uniqueArray.indexOf(arr14[i]) < 0) 
        {
            uniqueArray.push(arr14[i]);
        }
        else {
            duplicateArray.push(arr14[i]);

            uniqueArray.splice(uniqueArray.indexOf(arr14[i]), 1);
        }
    }
    document.getElementById("resultprog14").innerHTML = `Duplicate Elements Which Removed :[${duplicateArray}] From Array [${arr14}]`;
    document.getElementById("result14").innerHTML = `[${uniqueArray}]`;
}
//15. Write a js program to merge two array to third array.
  function  mergeArray() 
  {
        var arr1 = [1,2,3];
        var arr2 = [4,5,6,7];
        var arr3 = arr1.concat(arr2);


    document.getElementById("resultprog15").innerHTML = `Result of Merge Arrays below [${arr1}] and [${arr2}]`;

    document.getElementById("result15").innerHTML = `[${arr3}]`;




    
  }
  //16. Write a js program to find reverse of an array.
  function  reverseArray() 
  {
        var arr1 = [1,2,3];
         


    document.getElementById("resultprog16").innerHTML = `Original Array [${arr1}]`;

    document.getElementById("result16").innerHTML = `[${arr1.reverse()}]`;




    
  }

  //17. Write a js program to put even and odd elements of array in two separate array.

      var evenArray = [];
      var oddArray = [];
        var arra17 = [];
    function funcExample17(value) {

    value = document.getElementById("example17").value;

    arra17.push(value);

    document.getElementById("example17").value = "";
}
 function getEvenOdd() 
{   
      arra17.forEach(function (element) 
      {
            if ((element%2)==0)
             {
                 evenArray.push(element);

             }
             else {
                 oddArray.push(element);
             }
      })

      document.getElementById("resultprog17").innerHTML = `Result :`;

    document.getElementById("result17").innerHTML = `Odd Array is [${oddArray.toString()}] <br/>
                                                     Even Array is [${evenArray.toString()}]`;


     
 }
 //18. Write a js program to search an element in an array.

      var arr18 = [];
    function funcExample18(value) {

    value = document.getElementById("example18").value;

    arr18.push(value);

    document.getElementById("example18").value = "";
}

function searchElement(element)
{
         element = document.getElementById("example18a").value;
        
          if(arr18.lastIndexOf(element)==-1)
          {
            
            document.getElementById("resultprog18").innerHTML = `Result :`;
            document.getElementById("result18").innerHTML = `Element not Found`;
            
        
          }
          else {
            document.getElementById("resultprog18").innerHTML = `Result :`;
            document.getElementById("result18").innerHTML = `Element Found`;
            
          }
          
         
}

//19. Write a js program to sort array elements in ascending or descending order.

var arr19 = [];
function funcExample19(value) {

value = document.getElementById("example19").value;

arr19.push(value);

document.getElementById("example19").value = "";
}
function  arrayOrder() 
{
    document.getElementById("resultprog19").innerHTML = `Original Array [${arr19.toString()}]:`;
    document.getElementById("result19").innerHTML = `Ascending Order of Array [${arr19.sort(function (a,b) 
        {
         return a -b;
    })}] <br/> Descending Order of Array[${arr19.sort(function (a,b) 
        {
         return b -a;
    })}]    `; 

    
}

//20. Write a js program to sort even and odd elements of array separately.

var arr20 = [];
var oddArray20=[];
var evendArray20=[];

function funcExample20(value) 
{

value = document.getElementById("example20").value;

arr20.push(value);

document.getElementById("example20").value = "";
}

function sortArray20() 
{
        arr20.forEach(function (element) 
        {
             if (element%2===0){
                 evendArray20.push(element);
             }
             else {
                oddArray20.push(element);
             }
            
        });
        document.getElementById("resultprog20").innerHTML = `Original Array [${arr20.toString()}]:`;

        document.getElementById("result20").innerHTML = `Even Number Order [${evendArray20.sort(function (a,b) 
        {
          return a - b;    
        })} ]<br/> Odd Number Order  [${oddArray20.sort(function (a,b) 
        {
          return a - b;    
        })}]`;
}

