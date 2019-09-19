<template>
	<div class="mainBody">
		<firstnav />
		<div class="abt-banner-area">
			<h1 class="h1-abt-banner"><b>About Us</b></h1>
		</div>
		<div class="rest-page">
			<div class="abt-article">
				<h4 class="h4-abt-article"><strong><i>{{ abtArticle }}</i></strong></h4>
				<hrdesign />
				<div class="abt-article-main">
					<p>lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectanglelorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle. lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectanglelorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle. lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectanglelorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle. lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectanglelorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
					<p>lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectanglelorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle. lorep isum It shows four elements: a red rectangle lorep isum It shows four elements.</p>
				</div>
			</div>
			<div class="transparent-area">
				
			</div>
			<div class="abt-article1">
				<h4 class="h4-abt-article"><strong><i>{{ abtArticle1 }}</i></strong></h4>
				<hrdesign />
				<div class="abt-article1-main">
					<div class="row">
						<div class="col-md-4 lg-4 sm-6" id="team-area">
							<div>
								<img src="../assets/team/pic01.jpg" class="img-round">
							</div>
						</div>
						<div class="col-md-4 lg-4 sm-6">
							<div>
								<img src="../assets/team/pic02.jpg" class="img-round">
							</div>
						</div>
						<div class="col-md-4 lg-4 sm-6">
							<div>
								<img src="../assets/team/pic03.jpg" class="img-round">
							</div>
						</div>
					</div>

				<!-- 	another row -->

					<div class="row">
						<div class="col-md-4 lg-4 sm-6" id="team-area">
							<div>
								<img src="../assets/team/pic01.jpg" class="img-round">
							</div>
						</div>
						<div class="col-md-4 lg-4 sm-6">
							<div>
								<img src="../assets/team/pic02.jpg" class="img-round">
							</div>
						</div>
						<div class="col-md-4 lg-4 sm-6">
							<div>
								<img src="../assets/team/pic03.jpg" class="img-round">
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<footercompo />
	</div>
</template>

<script>
import firstnav from '../components/navbar/firstnav'
import hrdesign from '../components/horizontalLine/hr'
import footercompo from '../components/footer/footer'

export default {
  components: {
    firstnav,
    hrdesign,
    footercompo
  },
  data () {
    return {
    	abtArticle: 'About PinEventz...',
    	abtArticle1: 'Meet Our Team'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.abt-banner-area {
		background-image: url('../assets/about/a3.jpg');
		background-size: cover;
		width: 100%;
		height: 350px;
	}

	.h1-abt-banner {
		padding-top: 150px;
		text-align: center;
		color: #047a6d;
		font-family: 'Open Sans';
		font-size: 50px;
		letter-spacing: 0.1em;
	}

	.rest-page {
		background-image: url('../assets/about/banner.jpg');
	}

	.abt-article {
		background-color: #fff;
		text-align: center;
	}

	.abt-article1 {
		background-color: #fff;
		text-align: center;
	}

	.h4-abt-article {
		padding-top: 30px;
		font-size: 25px;
	}

	.abt-article-main {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		font-family: 'Open Sans' sans-serif;
		padding-bottom: 30px;
	}

	.abt-article1-main {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		font-family: 'Open Sans' sans-serif;
		padding-bottom: 30px;
	}

	.team-area {
		background: whitesmoke;
		border-radius: 90px;
	}

	.transparent-area {
		height: 100px;
	}

	.row {
		margin-top: 20px;
	}
</style>
