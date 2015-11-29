
import UnityEngine.UI;

private var rb: Rigidbody;
private var count:int;

public var speed: float;
public var countText:Text;
public var winText:Text;

function Start(){
	count = 0;
	rb = GetComponent.<Rigidbody>();
	winText.text = "";
	setCountText();
	
};

function Update () {
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	
	rb.AddForce(Vector3(moveHorizontal,0.0f,moveVertical)*speed);
		
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.CompareTag("Pick Up")){
		other.gameObject.SetActive(false);
		count += 1;
		setCountText();
 	}
}

function setCountText(){

	countText.text = "Count: " + count.ToString();
	if(count >= 10){
	winText.text = "You win!";
	}
}

