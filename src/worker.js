export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.sdl.hair') {
      url.hostname = 'sdl.hair';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
