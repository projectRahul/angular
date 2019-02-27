<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

$data = json_decode(file_get_contents("php://input"));
if($data->id == '' || $data->name == '' || $data->email == '' || $data->mobile == '' || $data->password == ''){
	echo json_encode(array("status"=> "unsuccess","message"=> "Fields Cannot be empty"));exit();
}
$stmt = $conn->query("UPDATE user SET name='".$data->name."', email='".$data->email."', mobile='".$data->mobile."', password='".$data->password."' WHERE id='".$data->id."' ");
// $stmt->execute();
echo json_encode(array("status"=> "success","message"=> "Record Updated Successfully"));
?>