const model = require('../models/index');
const	User = model.users;

exports.getData = (req, res) => {
	res.status(200).json({
		message: 'User found',
		users: {
			firstName: 'user.firstName',
			lastName: 'user.lastName',
			email: 'user.email',
			customer_id: 'user.customer_id',
		}
	});
};


exports.getUser = (req, res) => {
	User.find({
		where: { customer_id: req.params.id }
	})
		.then(user => {
			if(!user) res.status(400).json({
				message: 'User not found'
			});
			else res.status(200).json({
				message: 'User found',
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				customer_id: user.customer_id,
			});
		})
		.catch((err) => console.log('getUser failed: ' + err.message));
};

exports.updateUser = (req, res) => {
	const updateData = req.body;
	User.find({
		where: {customer_id: req.params.id}
	}).then(user => {
		return user.updateAttributes(updateData);
	})
		.then(updatedUser => {
			res.status(200).json({
				message: 'User updated',
				firstName: updatedUser.firstName,
				lastName: updatedUser.lastName,
				email: updatedUser.email,
				customer_id: updatedUser.customer_id,
			});
		})
		.catch((err) => console.log('updatedUser failed: ' + err));
};

exports.deleteUser = (req, res) => {
	User.find({
		where: {customer_id: req.params.id}
	})
		.then((user) => {
			return user.destroy();
		})
		.then(() => {
			res.status(200).json({
				message: 'User deleted'
			});
		})
		.catch((err) => console.log('deleteUser failed: ' + err.message));
};
