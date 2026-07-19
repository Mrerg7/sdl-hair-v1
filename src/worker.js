export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.sdl.hair') {
      url.hostname = 'sdl.hair';
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    if (url.hostname.endsWith('.pages.dev')) {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    return response;
  },
};
