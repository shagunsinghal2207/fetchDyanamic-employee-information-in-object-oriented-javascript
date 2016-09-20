
function View(){	
	
	this.View = function() {     
       this.employeeName=document.getElementById('employeeTxt').value;	   
	   this.employeeTable=document.getElementById("employeeTabel");    
    }()

	var headerTemplate="<tr>"+
   						"<th class='header'>Name</th>"+
   						"<th class='header'>Designation</th>"+
   						"<th class='header'>Salary</th>"+
   						"<th class='header'>Band</th>"+
   						"<th class='header'>Project</th>"+
  						"</tr>";    
	var rowTemplate = "<tr>"+				      
                      "<td><input type='text' name='empName' value='NameValue' >"+" </td>"+	
                      "<td><input type='text' name='empDesignation' value='DesignationValue' >"+" </td>"+	
                      "<td><input type='text' name='empSalary' value='SalaryValue' >"+" </td>"+	
                      "<td><input type='text' name='empBand' value='BandValue' >"+" </td>"+
                      "<td><input type='text' name='empProject' value='ProjectValue' >"+" </td>"+				     			      				     			      
				      "</tr>";	

	//Loading Tabel
	this.loadTabel=function(employeeData){
		employeeTable.innerHTML='';
		employeeTable.innerHTML = headerTemplate;
		for (var i = 0; i < employeeData.length; i++){
			var newRowtemplate = rowTemplate.replace("NameValue", employeeData[i].name);
				newRowtemplate = newRowtemplate.replace("DesignationValue", employeeData[i].Designation);
				newRowtemplate = newRowtemplate.replace("SalaryValue", employeeData[i].Salary);
				newRowtemplate = newRowtemplate.replace("BandValue", employeeData[i].Band);
				newRowtemplate = newRowtemplate.replace("ProjectValue", employeeData[i].Project);		
				employeeTable.innerHTML += newRowtemplate;
		}
	}

	// Loading Employee Row
	this.loadRow = function(rowData){			
		this.loadEmprow(rowData);				
	}

	this.loadEmprow = function(employeeData){		
		employeeTable.innerHTML='';
		employeeTable.innerHTML = headerTemplate;
		var newRowtemplate = rowTemplate.replace("NameValue", this.getEmployeeName(employeeData));
			newRowtemplate = newRowtemplate.replace("DesignationValue", this.getEmployeedesignation(employeeData));
			newRowtemplate = newRowtemplate.replace("SalaryValue", this.getEmployeesalary(employeeData));
			newRowtemplate = newRowtemplate.replace("BandValue", this.getEmployeeband(employeeData));
			newRowtemplate = newRowtemplate.replace("ProjectValue", this.getEmployeeproject(employeeData));		
			employeeTable.innerHTML += newRowtemplate;	
	}

	//Get Employee Name
	this.getEmployeeName = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].name;
			}					 
		}
	}

	//Get Employee Band
	this.getEmployeeband = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Band;
			}
			 
		}
	}

	//Get Employee Designation
	this.getEmployeedesignation = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Designation;
			}
		}
	}

	//Get Employee Salary
	this.getEmployeesalary = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Salary;
			}
		}
	}

	//Get Employee Project
	this.getEmployeeproject = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Project;
			}
		}
	}	
}


