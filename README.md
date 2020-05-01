# SYNCr

This technology will synchronize multiple browsers by having them follow whatever link is clicked on the web page. The technology simply looks at whatever object you clicked on and gets the href attribute if there is one. If there is then it sends the URL from the href to a server which then relays that to all connected users.

To use this technology, you need to download this repo and unpack it as a chrome extension. You then need to run "node server.js" within the repo. Additionally, ensure that your chrome browser is up to date.

Currently this technology only runs on localhost but could be placed on a remote server so two different computers could synchronize their browsers.
