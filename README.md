# [Oakland Hills Astronomy Club: Picture of the Day](https://oakland-hills-astronomy-club.netlify.app/)
This site is for the Oakland Hills Astronomy Club. It has a Picture of the Day feature where users can get an astronomy-themed picture or video by searching for a specific date or clicking a button that will randomize a date for them.
![APOD feature in action](https://github.com/XiaoLGrant/fwac-apod/blob/main/images/fwAPOD.gif)

## How It's Made:
#### Tech used:
<p>
  <img src="https://img.shields.io/static/v1?label=|&message=HTML5&labelColor=42494F&color=213a59&style=for-the-badge&logo=HTML5&logo-color=white"/>
  <img src="https://img.shields.io/static/v1?label=|&message=CSS3&labelColor=42494F&color=213a59&style=for-the-badge&logo=CSS3&logoColor=2862e9&logo-color=white"/>
  <img src="https://img.shields.io/static/v1?label=|&message=JavaScript&labelColor=42494F&color=3d607e&style=for-the-badge&logo=JavaScript&logo-color=white"/>
  <a href="https://html5up.net/" target="_blank"><img src="https://img.shields.io/static/v1?label=|&message=HTML5Up Template&color=213a59&style=for-the-badge&logo=sitepoint&logo-color=white"/></a>
  <a href="https://api.nasa.gov/" target="_blank"><img src="https://img.shields.io/static/v1?label=|&message=NASA APOD API&color=213a59&style=for-the-badge&logo=NASA&logo-color=white"/></a>
</p>
I built out the basic skeleton and the functionality for the APOD feature of this site with HTML, JavaScript, CSS, and NASA's Astronomy Picture of the Day API first, then ported everything into a template from HTML5Up for faster styling.

## Optimizations:
There are a couple of lingering items I would like to resolve:
- If a user selects a random date, the date information won't populate the first time.
- Style the APOD background image without using overrides
- Update the built-in font awesome library

## Lessons Learned:
This was one of my first builds using an API, so it was very cool to play around with the API data and pull out what I needed. I also let a lot more comments in my JavaScript code, which was extremely helpful while I was fixing bugs. 
