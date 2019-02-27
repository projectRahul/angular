<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

$jsondata = json_decode(file_get_contents("php://input"));

$stmt = $conn->query("SELECT * FROM user WHERE email='".$jsondata->email."' AND password='".$jsondata->password."' ORDER BY id DESC LIMIT 1");
if($stmt->rowCount() > 0){
	$data = $stmt->fetch(PDO::FETCH_OBJ);
	echo json_encode(array("status"=> "success","data"=> $data));exit();
}
echo json_encode(array("status"=> "unsuccess","message"=> "Wrong Credential"));exit();
?>