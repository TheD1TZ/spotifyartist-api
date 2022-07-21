Spotify Artist Scraper
==================
With this scraper, you can get the top tracks, albums, and related artists of a Spotify artist with a single command.

All information is stored in a **JSON** file.

## Installation

Add the api to your project:

```
npm i spotify-artist-api
```
Create a **[new app](https://developer.spotify.com/dashboard/applications)** in your Spotify account to get the **Client ID** and **Client Secret**.

And add your **Spotify Client ID** and Client Secret to the **System Variables**!


```
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

## Usage
```
const getAllTracks = require('./index');

const allTracks = getAllTracks(<Artist ID>, 'NL')

console.log(allTracks);
```

Output:

```
{
  href: 'https://api.spotify.com/v1/artists/02Qk9K9AJwyQWcZ5BrSgd7/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on',
  items: [
    {
      album_group: 'single',
      album_type: 'single',
      artists: [Array],
      available_markets: [Array],
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/5idoCzo25wmEPm4zkzSi2H',
      id: '5idoCzo25wmEPm4zkzSi2H',
      images: [Array],
      name: 'Like Blood',
      release_date: '2022-07-17',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5idoCzo25wmEPm4zkzSi2H'
    }
  ],
  limit: 50,
  next: null,
  offset: 0,
  previous: null,
  total: 1
}

```