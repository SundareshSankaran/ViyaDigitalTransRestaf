let rafServer = require('restaf-server');
rafServer.icli(getCustomHandler());


function getCustomHandler(){
    let handler = [
        {
            method: [ 'GET' ],
            path  : `/userenv`,
            config: {
                auth   : false,
                cors   : true,
                handler: getCustomAppEnv
            }
        },
        {
                method: [ 'GET' ],
                path: `/download/{param*}`,
                config: {
                    auth: false,
                    cors: true,
                    handler: download
                }
        }
        
       

    ];
    return handler;
};

async function getCustomAppEnv(req,h){
    let env = `let note = 'this is the custom env';`;
    return env;
}

async function download(req, h) {
    let name  = req.params.param;
    console.log(name);
    img = `<html><body>Hello world</body></html>`;
    return img;
}
