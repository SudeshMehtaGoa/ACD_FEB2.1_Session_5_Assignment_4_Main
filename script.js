/*
    Storing values of employee object in array and printing them in console.
    employeeAddress object in nested in employee object
    All employees are working in Bajaj Puna , so address is same :-)
*/

function firstFunction() {

    /* Employee Array */
    var employeeArray = [];
    
    /* 1st Employee */
    employeeArray[0]=  {
        employeeName : "Rakesh Kumar",
        employeeAge : 20,
        employeeSalary : 20000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

     /* 2nd Employee */
    employeeArray[1]=  {
        employeeName : "John Dsouza",
        employeeAge : 30,
        employeeSalary : 30000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

    /* 3rd Employee */
    employeeArray[2]=  {
        employeeName : "Sunil Korde",
        employeeAge : 35,
        employeeSalary : 35000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

     /* 4th Employee */
    employeeArray[3]=  {
        employeeName : "Ranjan Pandey",
        employeeAge : 40,
        employeeSalary : 40000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

     /* 5th Employee */
    employeeArray[4]=  {
        employeeName : "Akbar Khan",
        employeeAge : 45,
        employeeSalary : 45000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

    /* Printing all employees using for loop in console log */
    for (var loopCounter=0;loopCounter<employeeArray.length;loopCounter++)
    {
        console.log("Employee No :" + (loopCounter+1));
        console.log("Employee Name :" + employeeArray[loopCounter].employeeName);
        console.log("Employee Age :" + employeeArray[loopCounter].employeeAge);
        console.log("Employee Salary :" + employeeArray[loopCounter].employeeSalary);
        console.log("Employee City :" + employeeArray[loopCounter].employeeAddress.employeeCity);
        console.log("Employee State :" + employeeArray[loopCounter].employeeAddress.employeeState);
        console.log("Employee Pin :" + employeeArray[loopCounter].employeeAddress.employeePincode);
    }
   
}