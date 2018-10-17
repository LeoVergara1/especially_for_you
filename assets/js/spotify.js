window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQDM1L-IsWdEbht9z2SswAdqmGWm-lQZXZkwMeH8rOxGXlomLtJ8l-Lqj-T2sx0nKWRxX7Y0zVFB6koiViglwu4jbzQi6KBdxVGF5eF590_IAbFaOG7VMxOI-tqkvVt6UeiWX8hD0uhppgQJo6S7vRQipVIVkNuZefOd4XavU5aQQkk';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
