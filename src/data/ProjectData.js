const Projects = [
	{
		id: 4, 
		name: "Portfolio website",
		date: "DECEMBER 2023",
		images: [
			'/images/portfolioimage.png'
		],
		github: 'https://github.com/markmcgrory/portfolio',
		description: "Upon graduating from CodeClan, I put my efforts into using React to build myself a portfolio website to showcase my work. I leveraged various React libraries, including React Reveal and React Image Gallery, to give it a nice finish. In putting this together, I learned about the importance of design planning (I didn't do enough), the challenges of building a fully responsive app, and the power and variety of additional libraries to save you time and effort.",
		techStack: 'React, CSS, HTML'

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
		description: 'Subway Samurai is a comic zombie brawler game set in Glasgow, using React for the front-end and Java for the back-end. In our small team, we incorporated music and sound effects, using Howler.js, as well as turn-based combat - with increasing difficulty levels as the player proceeds. The game also features useable "health items" - Tiger Balm, paracetamol, whisky and beer -  and a mega attack. We designed and built this from scratch in just under two weeks.',
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
		description: 'Navigate is an internal management application for social services. We wanted to create an app that could store service users and support services data, allowing the user to add, update and assign users to services around Glasgow. This was built in just six days and formed our second CodeClan project.',
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
		description: "Bookshop Manager was my first full-stack application, incorportating a front-end and back-end with PostgreSQL database. It was built in six days. It's aimed at staff working in a small bookstore, and allows the user to show book inventory, add to it or delete from it, show book details, update book details. Ditto with wholesalers, but the user can also filter books by wholesaler.",
		techStack: 'Python, Flask, PostgreSQL'
	}
]

export default Projects;