const router = require('express').Router();

// let database = require('../database/DB.json');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Expedient API working' });
 });
 

/**
 * GET /:id - get an expedient
 * @params {id} - expedient id
 * @returns {expedient} - expedient object
 * @throws {NotFoundError} - if expedient not found
 * @returns {error} - if error
 */
router.get('/:id', async (req, res) => {
	try {
		//search expedient by id in database
		// console.log(database)
		//if not found, throw error

	} catch (err) {
		console.error(`Error getting expedient: ${err}`);
		res.status(500).send(`Error getting expedient: ${err}`);
	}
})

/**
 * GET / - get all expedients
 * @returns {expedient[]} - array of expedients
 * @returns {error} - error message
 * @throws {NotFoundError} - if expedient not found
 */
router.get('/allExpedients', async (req, res) => {
	try {
		//search all expedients in database

		//if not found, throw error		

	} catch (err) {
		console.error(`Error getting all expedients: ${err}`);
		res.status(500).send(`Error getting all expedients: ${err}`);
	}
})

/**	
 * POST / - create an expedient
 * @params {formData} - expedient data to be created
 * @returns {expedient} - new expedient object
 * @returns {error} - error if expedient can't be created
 */

//? If expedient already exists, throw error or update expedient?

router.post('/', async (req, res) => {
	try {
		//create expedient in database

	} catch (err) {
		console.error(`Error creating expedient: ${err}`);
		res.status(500).send(`Error creating expedient: ${err}`);
	}
})

//TODO: update expedient using router.PUT
//TODO: delete expedient using router.DELETE

module.exports = router