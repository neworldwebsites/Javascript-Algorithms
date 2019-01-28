<?php
$monfichier = fopen('../compteur/projets.txt', 'r+');
$ligne = fgets($monfichier); // On lit la première ligne (nombre de pages vues)
$ligne++;                    // On augmente de 1 ce nombre de pages vues
fseek($monfichier, 0);       // On remet le curseur au début du fichier
fputs($monfichier, $ligne);  // On écrit le nouveau nombre de pages vues
fclose($monfichier);
?>
<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta content="IE=Edge,chrome=1" http-equiv="X-UA-Compatible"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="viewport" content="width=device-width, user-scalable=0, minimal-ui">
<meta name="robots" content="index, follow">
<meta name="keywords" lang="fr" content="portofolio, index, projets">
<meta name="description" content="Créateur de projets web, programmant avec amour et instinct, pour vous fournir un résultat satisfaisant et le tout à un prix raisonnable." /><!-- 200max !=chaque page -->
	<title>portofolio</title>
<!-- 	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <script> (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-9246552101540804", enable_page_level_ads: true }); </script> --> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<style type="text/css">@import url('https://fonts.googleapis.com/css?family=Caveat');
	html{zoom:150%;}
	@media screen and (max-width:1024px){       /* FOR TABLETTE */
		.myNav{margin-top:50px;zoom:1}
		.adver{
			display:none;
		}}
	@media screen and (max-width:767px){       /* FOR MOBILE */
		.selectNav{
			display: block;
		}}
	body{
color:#ecf0f1;font-weight:bold;  font-weight:bold;
width:100%;height:100%;
background: red;
background: -moz-linear-gradient(to right,darkred 0%, red 40%, red 61%, darkred 100%);
background: -webkit-linear-gradient(to right,darkred 0%, red 40%, red 61%, darkred 100%);
background: -o-linear-gradient(to right,darkred 0%, red 40%, red 61%, darkred 100%);
background: -ms-linear-gradient(to right,darkred 0%, red 40%, red 61%, darkred 100%);
background: linear-gradient(to right,darkred 0%, red 40%, red 61%, darkred 100%);
}
	h1{font-family: 'Caveat', cursive;font-size:1.80rem!important;}
	.selectNav{
		position:absolute;
		bottom:0;left:0;
	}
	option,.form-control{color: #fff;background: rebeccapurple;}
  select optgroup{background:#ff0060;color:white;}
	.myNav{
		position:absolute;
		top:50%;left:50%;
		transform:translate(-50%,-50%);
		}
	.myNav li{list-style-type:decimal-leading-zero}/*upper-roman decimal-leading-zero*/
	.myNav li a, h1 a{color:#ecf0f1;text-decoration: none}
	.myNav li a:hover{color:darkred; }/*#9b59b6*/
	h1 a:hover{color:rebeccapurple;text-decoration:none;}
</style>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <script> (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-9246552101540804", enable_page_level_ads: true }); </script>
</head>
<body>
<?php include_once("../fbSdkJS.php") ?>
<?php include_once("../fbPixel.php") ?>
<?php include_once("../analyticstracking.php") ?>
<?php include_once("../googletag.php") ?><!-- &#9664; -->
<div class="container"><h1><a href="https://neworldwebsites.fr/"><i class="fa fa-caret-square-o-left" aria-hidden="true"></i> Portofolio</a></h1>

<div style="display:none" class="selectNav">
	<form class="nav navbar-nav" name="choix">
	<select name="liste" onchange="lienForm()"  class="form-control" id="destinations">
		<option> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MENU</option>
		<option value="dj_junior.php">DJ JUNIOR</option>
		<option value="yt_chapter.php">TUTO VIDEO</option>
<!-- 		<option value="parallax/">PARALLAX</option> -->
		<option value="parallax.php">PHRASEBOOK</option>
		<option value="audiobook.php">AUDIOBBOOK</option>
		<option value="lsapp/public/index">LARAVEL</option>
		<option value="meetup.php">MEETUP</option>
		<option value="colors.php">COLORS</option>
		<option value="movies.php">MOVIE</option>
		<option value="showcase.php">SHOWCASE</option>
<!-- 		<option value="sexy_button.php">SEXY BUTTON</option> -->
		<option value="Text-Effect.php">TEXT EFFECT</option>
<!-- 		<option value="video.php">VIDEO</option> -->
<!-- 		<option value="countdown.php">COUNTDOWN</option> -->
	</select>
</form>
</div>

<div style="zoom:0.7;margin-left:5px" class="adver col-xs-12 col-12 float-left">
	<a href="https://fr.sendinblue.com/?tap_a=32859-ba84ee&tap_s=291916-78791f" target="_BLANK" rel="nofollow"><img class="img-responsive" src="https://static.tapfiliate.com/5abe2975d33e7.jpg?a=32859-ba84ee&s=291916-78791f" border="0"></a>
</div>
<div style="zoom:0.75" class="myNav col-xs-12">
	<ul>
		<li><a href="dj_junior.php">DJ JUNIOR</a></li>
		<li><a href="yt_chapter.php">TUTO VIDEO</a></li>
<!-- 		<li><a href="parallax/">PARALLAX</a></li> -->
		<li><a href="parallax.php">PHRASEBOOK</a></li>
		<li><a href="audiobook.php">AUDIOBOOK</a></li>
		<li><a href="lsapp/public/index">LARAVEL</a></li>
		<li><a href="meetup.php">MEETUP</a></li>
		<li><a href="colors.php">COLORS</a></li>
		<li><a href="movies.php">MOVIE</a></li>
		<li><a href="showcase.php">SHOWCASE</a></li>
<!-- 		<li><a href="sexy_button.php">SEXY BUTTON</a></li> -->
		<li><a href="Text-Effect.php">TEXT EFFECT</a></li>
<!-- 		<li><a href="video.php">VIDEO</a></li>
		<li><a href="countdown.php">COUNTDOWN</a></li> -->
	</ul>
</div>


</div><!-- END container -->
<!-- <footer><small style="color:white;text-align: center">NWServices | <span id="date"></span></small></footer> -->

<p style="color:#cc;font-size:1em;margin-top:10px;position:absolute; right:3%;bottom:0"><?php echo "<span class='badge badge-secondary'>" . $ligne . "</span>" ;?>  </p>
<script type="text/javascript" src="https://use.fontawesome.com/bf1b2d3882.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script type="text/javascript">
  function lienForm() {
	  setTimeout( function() {

    x=document.choix.liste.selectedIndex;
    if(x==0) return;
    url=document.choix.liste.options[x].value;
    parent.location.href=url;

	}, 500);
  };
</script>
<script>
function myFunction() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("date").innerHTML = n;
}
</script>
</body>
</html>
