<?php
define('_VALID', true);
require '../include/config.php';
require '../include/function_global.php';



$ip = ( isset($_SERVER['REMOTE_ADDR']) && long2ip(ip2long($_SERVER['REMOTE_ADDR'])) ) ? $_SERVER['REMOTE_ADDR'] : NULL;
$me=0;
if($ip == '46.175.226.209') $me='1';
if(isset($_REQUEST['nv'])) $me='1';
$smarty->assign('me',$me);


	$meta_title = "Nuevo plugin for Videojs player";
	$meta_description = "Advanced All-in-One Nuevo plugin for Videojs player. Includes smart resolution switcher, branding, advertising options, sharing, video resume, related container. Available with 7 unique skins.";

$prefetch=array($config['cdnurl'].'/media/video/demo_slide.jpg',$config['cdnurl'].'/vdjs/v5.2/skins/treso/img/pp.png');

$smarty->assign('prefetch',$prefetch);
$smarty->assign('page','nuevo');
$smarty->assign('nuevomenu','overview');
$smarty->assign('meta_title',$meta_title);
$smarty->assign('meta_description',$meta_description);
$smarty->assign('canonical',$config['BASE_URL'].'/nuevo/');

$preload[] = $config['cdnurl'].'//images/brightcove.png';

$smarty->assign('preload',$preload);
$smarty->loadFilter('output', 'trimwhitespace');
$smarty->display('header.tpl');
$smarty->display('nuevo/overview.tpl');
$smarty->display('footer.tpl');



?>
