//const Alexa = require(`ask-sdk-core`);
const skillBuilder = Alexa.SkillBuilders.custom();
//const skillEventHandler = require('./src/handlers/skillEventHandler');

exports.handler = skillBuilder
  .addRequestHandlers(
    //skillEventHandler
  )
  .lambda();

exports.handler = function (request, context) {
  if (request.directive.header.namespace === 'Alexa.Authorization' && request.directive.header.name === 'AcceptGrant') {
      console.log("DEBUG:", "Authorization request",  JSON.stringify(request));
      handleAcceptGrant(request, context);
  }

function handleAcceptGrant(request, context) {
    var response = {
        event: {
            header: {
                "namespace": "Alexa.Authorization",
                "name": "AcceptGrant.Response",
                "messageId": request.directive.header.messageId,
                "payloadVersion": "3"
            },
            payload: {}
        }
    };
    console.log("DEBUG", "Alexa.Authorization ", JSON.stringify(response));
    //context.succeed(response);
    return response;
}}
