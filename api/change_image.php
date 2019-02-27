<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE'); 
header('Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept'); 


include './config.php';

if(!isset($_POST) || $_POST['id'] == '' || !isset($_FILES)){
	echo json_encode(array("status"=> "unsuccess","message"=> "Fields Cannot be empty"));exit();
}
$file_path ="Your File Path".$_POST['id'].".jpg";
if(move_uploaded_file($_FILES['image']['tmp_name'], $file_path) ){
	$stmt = $conn->query("UPDATE user SET image='".$_POST['id'].".jpg' WHERE id='".$_POST['id']."'");
	$stmt->execute();
	echo json_encode(array("status"=> "success","message"=> "Image Updated Successfully"));
}
?>