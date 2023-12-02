const Projects = [

	{ 
		id: 1, 
		name: "Subway Samurai", 
		images: [
			'/images/subwayimage1.png',
			'/images/subwayimage2.png',
			'/images/subwayimage3.png',
			'/images/subwayimage4.png',
			'/images/subwayimage5.png',
		],
		github: 'https://github.com/Dannycarey23/SubwaySamurai_frontend',
		description: 'Subway Samurai is a comic zombie brawler game set in Glasgow. It was created in a small group in just two weeks for our final CodeClan project. We incorporated music and sound effects, using Howler.js, as well as turn-based combat - with increasing difficulty levels as the player proceeds - as well as a health items utility and mega attacks.',
		techStack: 'React, JavaScript, Java, Spring, Howler.js',
		linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7131990495580319745/'
    },
	{
		id: 2,
		name: "Navigate App",
		images: [
			'/images/navigateimage1.png',
			'/images/navigateimage2.png',
		],
		github: 'https://github.com/markmcgrory/navigate_app',
		description: 'Navigate is an internal, location-data and management application for the social services. We wanted to create an app that could store service users and support services data, allowing the user to add, update and assign users to services around Glasgow. This was built in six days and formed our second CodeClan project.',
		techStack: 'React, JavaScript, MongoDB, Express, ArcGIS'
	},
	{
		id: 3,
		name: "Bookshop Manager",
		images: [
			'/images/pythonimage1.png',
			'/images/pythonimage2.png',
		],
		github: 'https://github.com/markmcgrory/python_project',
		description: "Bookshop Manager was my first full-stack application, which I built from scratch in six days. It's aimed at staff working in a small bookstore. Functionality implemented: show book inventory, add to it or delete from it, show book details, update book details. Ditto with wholesalers, but the user can also filter books by wholesaler.",
		techStack: 'Python, Flask, PostgreSQL'
	}
]

export default Projects;