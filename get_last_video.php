<?php
    $user = $_GET['username'];
    $files = glob("../videos/$user/*.*");
    $files = array_combine($files, array_map('filectime', $files));
    arsort($files);
    echo key($files);
