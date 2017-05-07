//var controller : CharacterController = GetComponent(CharacterController);

private var jumpSpeed : float = 20.0;
private var gravity : float = 200.0;
private var moveDirection : Vector3 = Vector3.zero;
private var xStartPosition : float = 0.0;

var counter : int = 0;
var heightLimit = 5.0f;
var floatSpeed : float = 5.0f;
     

var jumpSound : AudioClip;
var sideSound : AudioClip;

moveDirection.x = 0;

function Update ()
{
	if((Input.GetKeyDown(KeyCode.LeftArrow)) && ((transform.position.x * (transform.position.x - 4)) == 0.0) && PlayerBoxCollision.allowMovement)
	{
		moveDirection.x = -40.0;
		xStartPosition = transform.position.x;
		audio.PlayOneShot(sideSound);
	}
	if((Input.GetKeyDown(KeyCode.RightArrow)) && ((transform.position.x * (transform.position.x + 4)) == 0.0) && PlayerBoxCollision.allowMovement)
	{
		moveDirection.x = 40.0;
		xStartPosition = transform.position.x;
		audio.PlayOneShot(sideSound);
	}
			
	if((Input.GetKeyDown(KeyCode.UpArrow)) && (transform.position.y == 2.25) && PlayerBoxCollision.allowMovement)
	{
		counter++;
		moveDirection.y  = jumpSpeed*Counter;//*1.2;
		audio.PlayOneShot(jumpSound);
	}
	
		 if((Input.GetKeyUp(KeyCode.UpArrow)) && PlayerBoxCollision.allowMovement)
		{
		counter=1;
		}
		
	if(transform.position.y>2.25)
	{
		moveDirection.y -= gravity * Time.deltaTime;
	}

	if((transform.position.y + moveDirection.y*Time.deltaTime) <2.25)
	{
		moveDirection.y = 0;
		transform.position.y = 2.25;
	}
	
	if((transform.position.x + moveDirection.x*Time.deltaTime) < xStartPosition - 4)
	{
		moveDirection.x = 0;
		transform.position.x = xStartPosition - 4;
	}
	if((transform.position.x + moveDirection.x*Time.deltaTime) > xStartPosition + 4)
	{
		moveDirection.x = 0;
		transform.position.x = xStartPosition + 4;
	}
	
	transform.Translate(moveDirection.x*Time.deltaTime,moveDirection.y*Counter*Time.deltaTime,0);
	
if (Input.GetKeyDown ("space"))
  counter++;



	
	
}
