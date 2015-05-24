<?php
print_r($_SESSION);
?>


<!DOCTYPE html>
<html>
	<head>
		<title>
			NoteToSelfProductions
		</title>
		<link rel="stylesheet" type="text/css" href="\css\index.css"/>
		<script type="text/javascript" src="\js\jquery-1.10.1.js" ></script>
		<script type="text/javascript" src="\js\ajax.js"></script>
		 <script type="text/javascript" src="\js\index.js" ></script>
   <script type="text/javascript" src="\js\signup.js" ></script>
	</head>

	<body>
		<section class="section_header" id="page_header">
		<header>
			<div class="banner" id=""page_banner">
			<img src=""/>
			<span>
				NoteToSelfProductions
			</span>
			</div>
			</header>
			<div class="login_container" id="header_login_container">
				<form action="/php/login.php" method="post" class="login_form" id="header_login_form" >
				<fieldset>

				<label for="username">
				Username:
				</label>
				<input class="login_text_input" id="header_login_username_input" type="text" placeholder="" name="username"/>
    
				<label for="password">
				Password:
				</label>
				<input class="login_text_input" id="header_login_password_input" type="text" placeholder="" name="password"/>
    <button class=	"submit_button" id="header_login_button" type="submit">Login</button>
				</fieldset>
				</form>
				<span>
				<a href="" onClick="signup_form.createSignUpForm(event);">
					Want to join the label? Sign up now.
				</a>
				</span>
			</div>
			<nav class="navigation" id="page_header_nav">  
				<ul>
					<li>
					<a href="\index.php">Home</a>
					</li>
					<li>
					Beats
					<ul class="hidden_list" id="beats">
						<li>
							<a href="">R&B</a>
						</li>
						<li>
							<a href="">Hip Hop </a>
						</li>
						<li>
							<a href="">Rock</a>
						</li>
						<li>
							<a href="">Techno</a>
						</li>
						<li>
							<a href="">Alternative</a>
						</li>
					</ul>
					</li>
					<li>
						<a href="">Artists</a>
					</li>

					<li>
						<a href="">
							Producers
						</a>
					</li>
						<li>
							<a href="">Login</a>
						</li>
						<li>
							<a href="" >Sign Up</a>
						</li>
				</ul>
			</nav>
		</section>
		<section class="section_body" id="page_body" >
		 <article class="" id="">
       
<header class="" id="">
        <hgroup>
        
        </hgroup>
       </header>
       <!-- whats new goes here !-->
   </article>
   <article class="" id="">
      <!-- videos go here !-->
  </article>
  <article class="" id="">
   <!-- audio goes here !-->
  </article>
		</section>
		 <section class="section_footer" id="page_footer" >
		  <nav class="navigation">
      <ul>
         <li>
           <a href=""> Contact Label</a>
         </li>
         <li>
            <a href=""> Affilates</a>
         </li>
        <li>
          <a href="">About The Label</a>
        </li>
      </ul>
    </nav> 
    
    
    <nav class="navigation" id="social_media_nav">
     <ul>
       <li>
         <a href="https://www.facebook.com/notetoselfproductions"> facebook</a>
       </li>
    <li>
     <a href="https://www.youtube.com/notetoselfproductions">
    </li>
    <li>
      <a href="https://www.twitter.com/notetoselfproductions">
    </li>
    </ul>
    </nav>
		</section>
	</body>
</html>