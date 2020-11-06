install:
	curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash - && sudo apt-get install -y nodejs
	sudo npm install -g forever
	mkdir ~/logs/ 2> /dev/null || true
	npm install

start: install
	forever start forever.json
	
test:
	npm test