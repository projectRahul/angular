<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

// $jsondata = json_decode(file_get_contents("php://input"));

if(isset($_GET['id']) && $_GET['id'] != '' ){
	$stmt = $conn->query("SELECT * FROM user WHERE id='".$_GET['id']."'");
	if($stmt->rowCount() == 1){
		$data = $stmt->fetch(PDO::FETCH_OBJ);
		echo json_encode(array("status"=> "success","data"=> $data));exit();
	}
	echo json_encode(array("status"=> "success","data"=> ""));exit();
}else{
	$stmt = $conn->query("SELECT * FROM user WHERE status='1'");
	if($stmt->rowCount() > 0){
		$data = $stmt->fetchAll(PDO::FETCH_OBJ);
		echo json_encode(array("status"=> "success","data"=> $data));exit();
	}
	echo json_encode(array("status"=> "success","data"=> ""));exit();
}
?>