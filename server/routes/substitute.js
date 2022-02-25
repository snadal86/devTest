const router = require('express').Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Substitute API working' });
 });

/**
 * GET /:id - get an substitute
 * @params {id} - substitute id
 * @returns {substitute} - substitute object
 * @throws {NotFoundError} - if substitute not found
 * @returns {error} - if error
 */
router.get('/:id', async (req, res) => {
	try {
		//search substitute by id in database
		
		//if not found, throw error

	} catch (err) {
		console.error(`Error getting substitute: ${err}`);
		res.status(500).send(`Error getting substitute: ${err}`);
	}
})

/**
 * GET / - get all substitutes
 * @returns {substitute[]} - array of substitutes
 * @returns {error} - error message
 * @throws {NotFoundError} - if substitute not found
 */
router.get('/allSubstitutes', async (req, res) => {
	try {
		//search all substitutes in database

		//if not found, throw error		

	} catch (err) {
		console.error(`Error getting all substitutes: ${err}`);
		res.status(500).send(`Error getting all substitutes: ${err}`);
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