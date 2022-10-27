/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'mm14.eu', // the auth0 domain prefix
    audience: 'coffee_shop_api', // the audience set for the auth0 app
    clientId: 'dEj6bwrd1ogQQopB5Ujf8DX74Smivom4', // the client id generated for the auth0 app
    callbackURL: 'https://localhost:8100', // the base url of the running ionic application. 
  }
};
