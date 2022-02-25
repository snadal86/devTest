const router = require('express').Router();
const fs = require('fs');

const data = require('../../database/DB.json');

/**
 * GET / - get all expedients
 * @returns {expedient[]} - array of expedients
 * @returns {error} - error message
 * @throws {NotFoundError} - if expedient not found
 */
 router.get('/', async (req, res) => {
	try {
		//search all expedients in database
		const expedients = data.expedients;
		//return expedients
		if (expedients) {
			res.status(200).send(expedients);
		} else {
			throw new Error('Expedients not found');
		}
		//if not found, throw error		

	} catch (err) {
		// console.error(`Error getting all expedients: ${err}`);
		res.status(500).send(`Error getting all expedients: ${err}`);
	}
})

/**
 * GET /:id - get an expedient
 * @params {id} - expedient id
 * @returns {expedient} - expedient object
 * @throws {NotFoundError} - if expedient not found
 * @returns {error} - if error
 */
router.get('/:id', async (req, res) => {
	// console.log('Searching expedient with id: ' + req.params.id);
	try {
		//search expedient by id in database
		const expedient = data.expedients.find(expedient => expedient.id == req.params.id);
		//return expedient
		if (expedient) {
			res.status(200).send(expedient);
		} else {
			throw new Error('Expedient not found');
		}	
	} catch (err) {
		// console.error(`Error getting expedient: ${err}`);
		res.status(500).send(`${err}`);
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