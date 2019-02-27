<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

$data = json_decode(file_get_contents("php://input"));

if($data == ''){
	echo json_encode(array("status"=> "unsuccess","message"=> "Fields Cannot be empty"));exit();
}
$stmt = $conn->query("UPDATE user SET status='2' WHERE id='".$data."' ");
// $stmt->execute();
echo json_encode(array("status"=> "success","message"=> "Record Updated Successfully"));
?>