require(['jquery', 'modules/createModule'], function(){
	//console.log('create modules loaded');
	$(document).ready(function(event){

		jw.createModule('popUps', {
			title: 'SolarWinds Win32 Application Design',
			content: '<img src="images/work_sw_freeTool_full01.png" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' + 
					'<p>This is an example of the new layout I developed for SolarWinds\' free tool marketing campaigns. The interface is for WPF built Win32 applications.</p>' +
				'</div>',
			target: document.getElementById('popUp_sw')
		});

		jw.createModule('popUps', {
			title: 'Pittsburgh Jewish Music Festival',
			content: '<img src="images/work_pjmf_full01.jpg" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' +
					'<p><strong>PJMF.net</strong> is a promotional site for the Pittsburgh Jewish Music Festival with an integrated content management system.</p>' +
					'<a href="http://www.pjmf.net" title="Pittsburgh Jewish Music Festival" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_pjmf')
		});

		jw.createModule('popUps', {
			title: 'Central Texas Justices of the Peace &amp; Constables Association',
			content: '<img src="images/work_ctjpca_full01.png" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' +
					'<p><strong>ctjpca.com</strong> is a simple layout complete with content management system to allow association employees to easily update content and layout.</p>' +
					'<a href="http://www.ctjpca.com" title="Central Texas Justices of the Peace &amp; Constables Association" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_ctjpca')
		});

		jw.createModule('popUps', {
			title: 'Texas.gov Live Chat',
			content: '<img src="images/work_txgov_chat_full01.jpg" class="img_work_lrg" alt=" " title=""> ' +
				'<div class="popUp_content">' +
					'<p>Texas Online recently rebranded to Texas.gov with a complete new look. This gave me the opportunity to revisit the visual and interaction design on a number of products including this chat application.</p>' +
					'<a href="http://www.texas.gov/en/Ask/Pages/live-chat.aspx" title="Texas.gov Live Chat" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_chat')
		});

		jw.createModule('popUps', {
			title: 'The Savvy Musician',
			content: '<img src="images/work_savvy_full01.jpg" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' +
					'<p><strong>The Savvy Musician</strong> is designed to be striking and interesting while also being completely flexible for integration with a content management system. Initial content design was was aimed at sending users to the book page and drive acquisition. Also, the footer is flexible to be one full width column, two half width columns or collapse down if no content is entered.</p>' +
					'<a href="http://www.savvymusician.com" title="Savvy Musician Website" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_savvy')
		});

		jw.createModule('popUps', {
			title: 'USAA Career Center',
			content: '<img src="images/work_usaacc_full01.jpg" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' +
					'<p><strong>The Career Center</strong> was an interesting project given the amount of people who had a vested interest in the project, and the fact that in the end the design had to be integrated with third party job search software. </p>' +
					'<p>Successes included bringing greater prominence to job search by elevating it to the home page, moving non-essential content out of the direct path of the user and aligning the design to more closely emulate the brand standards of usaa.com.</p>' +
					'<a href="http://www.usaa.com/careers" title="USAA Career Center" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_cc')
		});
	
		jw.createModule('popUps', {
			title: 'Back and Forth',
			content: '<img src="images/work_bandf_full01.jpg" class="img_work_lrg" alt=" " title="">' +
				'<div class="popUp_content">' +
					'<p><strong>Back and Forth</strong> is my personal blog. The most recent redesign was based on 2 years of analytics data identifying what areas of the site are useful to readers and what added unnecessary complication. This design guides users to the most important aspect of the site: the content. Relevant information not directly pertaining to a specific article is included in the footer.</p>' +
					'<a href="http://www.backandforthblog.com" title="Back and Forth Blog" class="extLink">View Site</a>' +
				'</div>',
			target: document.getElementById('popUp_bf')
		});

		jw.createModule('popUps', {
			title: 'Business Card Design - 5th Avenue Sound',
			content: '<img src="images/work_bizCard_naus_full01.png" class="img_work_lrg" alt=" " title="">',
			target: document.getElementById('popUp_jn')
		});

		jw.createModule('popUps', {
			title: 'Business Card Design - Jaya Varma',
			content: '<img src="images/work_bizCard_varma_full01.png" class="img_work_lrg" alt=" " title="">',
			target: document.getElementById('popUp_jv')
		});

		jw.createModule('formValidation', {
			target: document.getElementById('form_contact')
		});
	});
});