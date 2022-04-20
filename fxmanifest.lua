fx_version 'cerulean'
game 'gta5'

author 'Gubner'
description 'Decrypt-o-matic ATM Hacking'
version '1.0'

ui_page 'client/html/index.html'

client_scripts {
	'client/client.lua',
}

server_scripts {
	'server/server.lua',
}

shared_script {
	'config.lua'
}

files {
	'client/html/index.html',
	'client/html/style.css',
	'client/html/script.js',
	'client/html/reset.css',
	'client/html/images/*.png'
}
