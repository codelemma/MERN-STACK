/*
4. Create a function Employee, having id, name, basic_Salary as arguments.

Compute HRA, DA, TA, GS, NS.

HRA is 30% of Basic Salary.
DA is 10% of Basic Salary.
TA is 20% of Basic Salary.

GS = Basic Salary + HRA + DA + TA;

TAX DEDUCTION is 10% of GS.

NS = GS - TAX DEDUCTION.

NOte : Use Basic Salary in Lexical Scope 
Print salary slip of the employee.
*/
function Employee(basic_Salary){
    var Net_Salary = function(basic_Salary){
        var Gross_Salary =basic_Salary + (basic_Salary * (.30))+ (basic_Salary * (.10)) + (basic_Salary * (.20));
        var TDS = Gross_Salary * (.10);
        return Gross_Salary - TDS;
    }
    return {Net_Salary};   
}

function employee(Empid,EmpName,basic_Salary){
    var emp= Employee(basic_Salary);
    console.log("Emp ID : "+Empid+"\n"+"Emp Name : "+EmpName+"\n"+"Net Salary : "+emp.Net_Salary(basic_Salary));
}
employee(102,"Ram",100);
/*
OUTPUT
Emp ID : 102
Emp Name : Ram
Net Salary : 144
 */