# TwitterSearchServer
nodejs server host react web app twitter-search-app.
visit https://github.com/YosiZiv/twiiter-search-app for client reposetory.
IMPORTENT on the root folder add .env and add TOKEN = <YOUR_TWITTER_DEVELOPER_TOKEN> - replace this with your own token , please visit 
https://developer.twitter.com/ for your info about twitter api token on twitter developer doc. 

PROJECT START 

1. on root folder add .env with TOKEN=<YOUR_TOKEN>
2. run npm i
3. run npm start to start local server at port 4000

open http://localhost:4000 to visit the web app host on the build folder.

OPEN POSTMAN and run POST http://localhost:4000/api/tweeter/hashtag open the body tab and enter key: hashtag and value: test,
if result if ok the server is up and runing 
ENJOY
