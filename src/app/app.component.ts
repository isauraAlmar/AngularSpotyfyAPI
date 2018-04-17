import { Component } from '@angular/core';

const CLIENT_ID = "d9cf3578ac144a43b8b487c4fc68102d"
const CLIENT_SECRET = "06974658d64e4443908ec9a75269e97f"

enum SearchType {
  Album = "album",
  Artist = "artist",
  PlayList = "playlist",
  Track = "track"
}

const query = "uprising"

function getToken(): Promise<string> {
  return fetch(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://127.0.0.1`)
    .then(response => response.text())
}

function searchTrack(token: string): Promise<{}> {
  return fetch(`https://api.spotify.com/v1/search?type=${SearchType.Track}&q=${query}&market=from_token`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  }).then(response => response.json())
}

getToken().then(console.log)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fluffy kittens';
  localhost = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://locahost:4200`
}

