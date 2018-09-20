const request = require('request-promise-native')

const api_url = `http://localhost:666/api`
exports.getData = async (req, res, next) => {
    
    const user = await request(api_url)
    data = JSON.parse(user);
    data.gateway = 'Best regards -Gateway';
    res.json(data);
}; 