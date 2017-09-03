var OAuth = require('oauth-1.0a');
var crypto = require('crypto');
var request = require('request');
var json = require('json');
var oauth = new OAuth({
    consumer: {
      key: '6e83adcc-09b3-4514-bb4f-442cfa21c019!TradeDocsThunderhead@sapient.com.trial',
      secret: 'ab97a83f-bc76-4784-a559-bac258fb7dde'
    },signature_method: 'HMAC-SHA1',
    hash_function: function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
  });

var request_data = {
    url: 'https://na4.smartcommunications.cloud/one/oauth1/cms/v4/folders',
	//url: 'https://na4.smartcommunications.cloud/one/',
	//url: 'https://na4.smartcommunications.cloud/one/',
    method: 'POST',
    data: {
      name: 'Oauthfolder2',
	  parentId: '157622073'	  
    },
};

//var token = {
    //key: 'TradeDocsThunderhead@sapient.com.trial',
   // secret: 'ab97a83f-bc76-4784-a559-bac258fb7dde'
//};
request({
    url: request_data.url,
    method: request_data.method,
    form: request_data.data,
    headers: oauth.toHeader(oauth.authorize(request_data))
}, function(error, response, body) {
    if (error) console.error(error);
    //data1 = JSON.parse(response);
    console.log(body);
});

