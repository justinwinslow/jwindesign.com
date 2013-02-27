<?php
	$name = $_REQUEST['name'] ;
	$email = $_REQUEST['email'] ;
	$msg = $_REQUEST['message'] ;
	$validation_1 = $_REQUEST['math'] ;
	$validation_2 = $_REQUEST['subject'] ;
	
	if (empty($validation_2)){
		if ($validation_1==3){
			mail( "justin@jwindesign.com", "j.winslow design Contact Form | From: $name", "$msg", "From: $email" );
		}else{
			echo "error";
		}
	}else{
		echo "error";
	}
?>