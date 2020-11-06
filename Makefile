install:
	sudo npm install -g forever
	mkdir ~/logs/ 2> /dev/null || true
	npm install

start: install
	forever start forever.json

test:
	npm test