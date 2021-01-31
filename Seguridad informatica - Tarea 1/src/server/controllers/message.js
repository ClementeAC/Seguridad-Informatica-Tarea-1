const rsa = require('../RSA/rsa');
const messageCtrl = {};

messageCtrl.get = async (req, res) => {
    res.send('Pagina del Servidor');
    console.log('Pagina abierta en el Navegador');
}

messageCtrl.post = async (req, res) => {
	const { message } = req.body;
    res.send('Enviado a consola del servidor');

    //decrypt
    rsa.decryp(message);
    console.log('\n'+'message: ' + message);
}

module.exports = messageCtrl;