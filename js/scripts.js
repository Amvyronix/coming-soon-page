/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

		//It will count from current time to 2 minutes
		let countDownDate = Date.parse("March 12, 2025");


		// Update the countdown every 1 second
		let x = setInterval(function () {
			// Get the current date and time
			let now = new Date().getTime();

			// Calculate the remaining time
			let distance = countDownDate - now;
           
            // Calculate minutes, and seconds and days

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60));
            
			let minutes = Math.floor((distance % (1000 * 60 * 60))
									/ (1000 * 60));


			let seconds = Math.floor((distance % (1000 * 60))
									/ 1000);

            document.getElementById("days").innerText = days ;
            document.getElementById("hours").innerText = hours ;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;

                        
		}, 1000);

