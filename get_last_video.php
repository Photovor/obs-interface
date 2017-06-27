<?php
    /*
     * A quick script that is called via a GET request that will echo out the last video recorded
     * by looking at the timestamps in the directory
     */

    $user = $_GET['username'];
    $files = glob("../videos/$user/*.*");
    $files = array_combine($files, array_map('filectime', $files));
    arsort($files);
    echo key($files);
