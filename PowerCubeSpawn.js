var waitTimeRandomMin2 : float;
var waitTimeRandomMax2 : float;

private var waitTime2 : float = 0.0;
private var moveDirection2 : Vector3 = Vector3.zero;
private var zStartCoordinate2 : float;

function Start () {
	zStartCoordinate2 = transform.position.z;
	objRandomMove();
}

function Update () {
	if (this.transform.position.z <= zStartCoordinate2 && this.transform.position.z > zStartCoordinate2 - 10){
		objRandomMove();
	}
	if (this.transform.position.z > zStartCoordinate2){
		this.transform.Translate(0,0,PlayerBoxCollision.moveSpeedStatic*Time.deltaTime);
	}
  //Adjust Spawn Rate Based On Score
	if(ScoreUpdater.playerScore >=500) {
	  waitTimeRandomMin2 = waitTimeRandomMin2 - 10;
	  waitTimeRandomMax = waitTimeRandomMax2 - 10;
	
	}
	
	
}
//Object Movement
function objRandomMove() {
	this.transform.position.z = (zStartCoordinate2 - 10000000);
	waitTime = (CamSwitch.spawnRateMultiplier*Random.Range(waitTimeRandomMin2,waitTimeRandomMax2));
	this.transform.position.x = (4*Random.Range(-1,2));
	yield WaitForSeconds(waitTime);
	this.transform.position.z = 310;
}
