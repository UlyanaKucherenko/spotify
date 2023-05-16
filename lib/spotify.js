import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  // 'user-read-recently-played',
].join(',');

// const scopes = [
//   'ugc-image-upload',
//   'user-read-playback-state',
//   'user-modify-playback-state',
//   'user-read-currently-playing',
//   'app-remote-control',
//   'playlist-read-private',
//   'playlist-read-collaborative',
//   'playlist-modify-private',
//   'playlist-modify-public',
//   'user-follow-modify',
//   'user-follow-read',
//   'user-read-playback-position',
//   'user-top-read',
//   'user-read-recently-played',
//   // 'user-library-modify',
//   'user-library-read',
//   'user-read-email',
//   'user-read-private',
//   'user-soa-link',
//   'user-soa-unlink',
//   'user-manage-entitlements',
//   'user-manage-partner',
//   'user-create-partner',
// ].join(',');

const params = {
  scope: scopes,
};

// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true
// const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${ process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REDIRECT_URI}&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true`;

const queryParamsString = new URLSearchParams(params);
const LOGIN_URL = `https://accounts.spotify.com/authorize?${ queryParamsString.toString() }`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI
});


export default spotifyApi;
export { LOGIN_URL };