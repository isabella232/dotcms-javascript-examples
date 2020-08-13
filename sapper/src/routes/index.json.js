import { initDotCMS } from 'dotcms';

const api = initDotCMS({
    host: 'https://demo.dotcms.com',
    /*
        This token is for DEMO purpouses in prodction use enviromental variables

        To get a new token, just run:

        curl -k -H "Content-Type:application/json"  -X POST -d  '{ "user":"admin@dotcms.com", "password":"admin", "expirationDays": 10 }' https://demo.dotcms.com/api/v1/authentication/api-token
    */
    token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcGk5ZGRlOWI3Ni1iNTZlLTRlNDMtOGQ3MC0yYTg0NDNlYTJkMmIiLCJ4bW9kIjoxNTk2OTQ1ODY4MDAwLCJuYmYiOjE1OTY5NDU4NjgsImlzcyI6ImZkN2RkZDZmZTgiLCJleHAiOjE1OTc4MDk4NjgsImlhdCI6MTU5Njk0NTg2OCwianRpIjoiMDAwNDQzOWItZmUyYy00YTc2LThlMTUtMDdjM2RjMjczZWQzIn0.sCLWfGrNz7PUJ8oUyw0_T21vBGskuWBK8hGPzBfOMm0',
});

export async function get(req, res) {
    const render = await api.page.get({
        url: '/',
    });

    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(render));
}
