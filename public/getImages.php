<?php
header("Access-Control-Allow-Origin: *");

$dir=array_key_exists('dir',$_GET) ? $_GET['dir'] : false;
if($dir){
  $files = glob($dir."*.jpg");
  echo json_encode($files);
}else{
  die(header("HTTP/1.0 404 Not Found"));
}
?>
