var fs = require('fs');
var path ='./monDossier';
if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}else{
	console.log('Directory already exist')
}
