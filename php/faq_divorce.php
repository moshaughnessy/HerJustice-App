<?php
require "connectll.php";

$sql = "select Question,Answer from faq where court_type='divorce';";

$result = mysqli_query($con,$sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
array_push($response,array("Question"=>$row[0],"Answer"=>$row[1]));
}

echo json_encode($response);

?>