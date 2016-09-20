
function Controller(){  

	this.Controller = function() {     
      	this.json = new Employeeservice();   				  //JsonService object
		this.jsonData = json.loadJson();		
		this.view = new View();		         
    }()
  
	this.init=function(){		
		view.loadRow(jsonData);
	}	

	this.loadTable=function(){		
		view.loadTabel(jsonData);
	}
}
