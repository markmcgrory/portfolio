const Projects = [
	{
		id: 4, 
		name: "Portfolio website",
		date: "DECEMBER 2023",
		images: [
			'/images/portfolio.png'
		],
		github: 'https://github.com/markmcgrory/portfolio',
		description: "After graduating from CodeClan, I put my efforts into designing and building my own portfolio website.  During this process, I learned about the importance of planning (I should have done more), the challenges of creating a responsive app, and the power and variety of additional libraries — in this case React Reveal and React Image Gallery — to save the developer time and effort.",
		techStack: 'React, Vanilla CSS, HTML'

	},

	{ 
		id: 2, 
		name: "Subway Samurai", 
		date: 'NOVEMBER 2023',
		images: [
			'/images/subwayimage1.png',
			'/images/subwayimage2.png',
			'/images/subwayimage3.png',
			'/images/subwayimage4.png',
			'/images/subwayimage5.png',
		],
		github: 'https://github.com/Dannycarey23/SubwaySamurai_frontend',
		description: 'Subway Samurai is a React zombie brawler game set in Glasgow. In our small team, we designed and built this game from scratch in just under two weeks, and it constituted our CodeClan capstone project. We incorporated music and sound effects, using Howler.js, as well as turn-based combat, with increasing difficulty levels as the player proceeds. The game also features useable "health items" — Tiger Balm, paracetamol, whisky and beer — and a mega attack. ',
		techStack: 'React, Java, Spring, Howler.js',
		linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7131990495580319745/'
    },
	{
		id: 3,
		name: "Navigate App",
		date: 'OCTOBER 2023',
		images: [
			'/images/navigateimage1.png',
			'/images/navigateimage2.png',
		],
		github: 'https://github.com/markmcgrory/navigate_app',
		description: '"Navigate" is an internal management application for social services. Made in a group of four, we wanted to create an app that could store service users and support services data, allowing the user to add, update and assign users to services around Glasgow. This was built in just six days and formed our second CodeClan project.',
		techStack: 'React, MongoDB, Express, ArcGIS'
	},
	{
		id: 4,
		name: "Bookshop Manager",
		date: 'SEPTEMBER 2023',
		images: [
			'/images/pythonimage1.png',
			'/images/pythonimage2.png',
		],
		github: 'https://github.com/markmcgrory/python_project',
		description: "Bookshop Manager was my first ever full-stack Python/Flask application. It was built in six days. It's aimed at staff working in a small bookstore, and allows the user to show book inventory, add to it or delete from it, show book details, update book details. Ditto with wholesalers, but the user can also filter books by wholesaler.",
		techStack: 'Python, Flask, PostgreSQL'
	}
]

export default Projects;