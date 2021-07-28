# Responsive Ecommerce Website Using HTML CSS JAVASCRIPT AND MERN (react, mongodb, nodejs)

## HowTo
https://www.wpcodevo.com/blogs/build-an-ecommerce-website-with-react-mongodb-and-nodejs-or-mern-stack-ecommerce-website
## Video
https://youtu.be/j10ZTzgYNPs
## Github
https://github.com/ziddahedem/mern-yt-clone.git

## create paypal sandbox account
https://developer.paypal.com/docs/api-basics/manage-apps/

## Deploy Heroku
dashboard.heroku.com > signup > new app > rlu-react17-ecommerce
-> download heroku-cli

Before deploying:
- update .env : 
 . remove PORT value : 'process.env.PORT' will be populated automatically by heroku (used in index.js)
 . remove NODE_ENV value : By default NODE_ENV is set to production on heroku server

- add Procfile : 
  web: node backend/server.js
  --> enable heroku to start the backend app as soon as the application is deployed

heroku-cli:
- /usr/bin/heroku -v
- /usr/bin/heroku login > follow the prompts to connect through the browser (SSH key)

Check of Heroku App releases:
- /usr/bin/heroku status --> connected to heroku
- /usr/bin/heroku releases --> shows list of server releases and each deploy previously done

Create Heroku App release (if not exist yet - if previous command returns no releases for this App)
- git init  (not necessary if git repo already initialized for this project)
- /usr/bin/heroku git:remote -a rlu-react17-ecommerce

Add / commit latest changes:
- git add .   --> add updated file since last commit
- git commit -am "c"   --> commit last updated file

Check / Add env variable:
- /usr/bin/heroku config  
- /usr/bin/heroku config:set CONNECTION_URL=mongodb+srv://react17:oaWfhqGW6uldmJgz@cluster0.defgx.mongodb.net/mainDatabase?retryWrites=true&w=majority
- /usr/bin/heroku config:set PAYPAL_CLIENT_ID=AaH0Gsk79ytEgMILos1-COD3sjucqzhsbovEvvxswDxZxDCb5f7QXlFRaF9LQv7cYi9qq_CewRatzV7H
- /usr/bin/heroku config:set JWT_SECRET=JWT_SECRET
- /usr/bin/heroku config:set JWT_EXPIRESIN=3600
- /usr/bin/heroku config  

Deploy to Heroku:
- git push heroku master
- /usr/bin/heroku logs --tail  

### If the package.json has a build script that needs to be customized for Heroku, define a heroku-postbuild script, which will run instead of the build script.

--> server app available from deployed location: https://rlu-react17-ecommerce.herokuapp.com
