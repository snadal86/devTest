const router = require('express').Router();
const fs = require('fs');

const data = require('../../database/DB.json');

/**
 * GET / - get all substitutes
 * @returns {substitute[]} - array of substitutes
 * @returns {error} - error message
 * @throws {NotFoundError} - if substitute not found
 */
 router.get('/', async (req, res) => {
	try {
		//search all substitutes in database
		const substitutes = data.substitutes;
		//return substitutes
		if (substitutes) {
			res.status(200).send(substitutes);
		} else {
			throw new Error('substitutes not found');
		}
		//if not found, throw error		

	} catch (err) {
		// console.error(`Error getting all substitutes: ${err}`);
		res.status(500).send(`Error getting all substitutes: ${err}`);
	}
})

/**
 * GET /:id - get an substitute
 * @params {id} - substitute id
 * @returns {substitute} - substitute object
 * @throws {NotFoundError} - if substitute not found
 * @returns {error} - if error
 */
router.get('/:id', async (req, res) => {
	// console.log('Searching substitute with id: ' + req.params.id);
	try {
		//search substitute by id in database
		const substitute = data.substitutes.find(substitute => substitute.id == req.params.id);
		//return substitute
		if (substitute) {
			res.status(200).send(substitute);
		} else {
			throw new Error('substitute not found');
		}	
	} catch (err) {
		// console.error(`Error getting substitute: ${err}`);
		res.status(500).send(`${err}`);
	}
})

/**	
 * POST / - create an substitute
 * @params {formData} - substitute data to be created
 * @returns {substitute} - new substitute object
 * @returns {error} - error if substitute can't be created
 */

//? If substitute already exists, throw error or update substitute?

router.post('/', async (req, res) => {
	try {
		//create substitute in database

	} catch (err) {
		console.error(`Error creating substitute: ${err}`);
		res.status(500).send(`Error creating substitute: ${err}`);
	}
})

//TODO: update substitute using router.PUT
//TODO: delete substitute using router.DELETE

module.exports = router