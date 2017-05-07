//var cam1 : Camera;
//var cam2 : Camera;
//var cam3 : Camera;
var bc : BoxCollider;
var light1 : Light;
var light2 : Light;
var cams : Camera[];
var cam1 : Camera;
var cam2 : Camera;
var cameraText : GUIText;
var cube : GameObject;
private var currentCam : Camera;

static var spawnRateMultiplier : float = 1;

function Start() {

    cam1.enabled = true;
    
     //Disable all Cameras 
    for(var curCam in cams){
		  curCam.enabled = false;
	  }
  currentCam = cams[0]; //Set Camera to default
  currentCam.enabled = false; 
    
}
 
function OnTriggerEnter(collision : Collider) {
 
    if (collision.gameObject.name == "Camera Cube") {
     	
		  currentCam.enabled = false;
    	currentCam = cam2; //cams[Random.Range(0, cams.Length)]; //Only using 1 additional camera
    	currentCam.enabled = true;
    	cam1.enabled = false;
			
		if(cams[0].active == true){
			bc.size = Vector3(15,1,1); //Make Player take up entire width of floor
		}
		
    //Adjust in game settings
		PlayerBoxCollision.moveSpeedStatic /= 1.5;
		spawnRateMultiplier = 2;
		for(var timeCounterC = 10.0; timeCounterC > 0; timeCounterC -= 0.1){
			cameraText.text = "Camera switch: " + timeCounterC.ToString ("0.0");
			yield WaitForSeconds(0.1);
		}
		
    //Camera Switch done 
		cameraText.text = "";
		bc.size = Vector3(1,1,1);
		
		cam2.enabled = false;
		cam1.enabled = true;
		
		currentCam.enabled = false;
		
		PlayerBoxCollision.moveSpeedStatic *= 1.5;
		spawnRateMultiplier = 1;
    }else { 
  		bc.size = Vector3(1,1,1);//Readjust size player
  	}
		 
}
