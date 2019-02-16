import Response from 'ember-cli-mirage/response'
import config from '../config/environment'

const TOKEN = 'abcdefghijklmnopqrstuvwxyz'

function getQueryVariable(query, item) {
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == item) {
      return decodeURIComponent(pair[1]);
    }
  }

  return;
}

function responseError(error, msg, code = 422) {
  return new Response(code, { 'Content-Type': 'application/json' }, {
    error: error,
    message: msg
  })
}

export default function () {

  this.passthrough();

  this.urlPrefix = config.APP.apiHost
  this.timing = 300

  this.post('/oauth/token', (schema, request) => {
    const query = request.requestBody;
    let username = getQueryVariable(query, 'username');
    let password = getQueryVariable(query, 'password');

    if (!username || username === 'undefined') {
      return responseError('invalid_credentials', 'username cannot be blank');
    }

    if (!password || password === 'undefined') {
      return responseError('invalid_credentials', 'password cannot be blank');
    }

    return new Response(200, { 'Content-Type': 'application/json' }, {
      access_token: TOKEN,
      token_type: 'Bearer',
      expires_in: new Date().getTime(),
      refresh_token: TOKEN,
      scope: '*'
    });
  });

  this.get('/users', ({ users }, request) => {
    const query = request.queryParams;
    return users.all().slice(query['page[offset]'] || 0, query['page[limit]'] || 5);
  });

  this.get('/user/me', ({ users }, request) => {
    return users.find(1);
  });

  this.resource('user', { except: ['index'], path: '/users' });

  this.resource('post', { path: '/posts' });
  this.put('posts/:id/kokoro', ({ posts }, request) => {
    let post = posts.find(request.params.id)
    post.kokoro_count++
    post.save()
  })

  this.resource('comment', { path: '/comments' });
  this.resource('group', { path: '/groups' });
  this.resource('group-type', { path: '/group-types' });
  // this.resource('group-member', { path: '/group' })

}
