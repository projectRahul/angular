<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

$data = json_decode(file_get_contents("php://input"));
if($data->name == '' || $data->email == '' || $data->mobile == '' || $data->passwordGroup->password == ''){
	echo json_encode(array("status"=> "unsuccess","message"=> "Fields Cannot be empty"));exit();
}
$stmt = $conn->query("INSERT INTO user SET name='".$data->name."', email='".$data->email."', mobile='".$data->mobile."', password='".$data->passwordGroup->password."', status='1' ");
// $stmt->execute();
echo json_encode(array("status"=> "success","message"=> "Record Added Successfully"));
?>