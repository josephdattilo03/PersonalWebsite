import { Octokit } from "@octokit/rest";

interface Track {
    name: string;
    artist: {
        '#text': string;
    };
}

interface RecentTracksResponse {
    recenttracks: {
        track: Track[];
    };
    '@attr': {
        nowplaying: boolean;
    };
}

class ApiService {

    async getRecentSong(): Promise<string | null> {
        const username = 'jadattilo'
        const apiKey = import.meta.env.VITE_SPOTIFY_KEY
        try {
            const url: string = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;
            const response: Response = await fetch(url);

            if (!response.ok) {
                return "can't be found";
            }
            
            const data: RecentTracksResponse = await response.json();
            if (data.recenttracks && data.recenttracks.track.length > 0) {
                return `${data.recenttracks.track[0].name} by ${data.recenttracks.track[0].artist['#text']}`;
            } else {
                return "cant be found";
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return "cant be found";
        }
    }

    async getRecentWork(): Promise<string | null> {
        try {
            const octokit = new Octokit({
                auth: import.meta.env.VITE_GITHUB_KEY
            })

            const events = await octokit.request('GET /users/josephdattilo03/events', {
                username: 'USERNAME',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            const res = events.data[0].repo.name
            return (res.substring(res.indexOf('/') + 1))
        } catch (error) {
            console.error('Error fetching data:', error);
            return null
        }
    }

    async getRecentPost() {
        
    }
}


const service = new ApiService

export default service



