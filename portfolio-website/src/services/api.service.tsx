
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
        const apiKey = 'e76b40dae6c89c2e389907c6674795e3'
        try {
            const url: string = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;
            const response: Response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data: RecentTracksResponse = await response.json();
            if (data.recenttracks && data.recenttracks.track.length > 0) {
                return `${data.recenttracks.track[0].name} by ${data.recenttracks.track[0].artist['#text']}`;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}


const service = new ApiService

export default service



