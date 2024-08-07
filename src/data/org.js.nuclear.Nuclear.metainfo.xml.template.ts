export default `<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
    <id>org.js.nuclear.Nuclear</id>
    <metadata_license>FSFAP</metadata_license>
    <project_license>AGPL-3.0-only</project_license>
    <name>nuclear music player</name>
    <summary>A electron based music player</summary>
    <developer id="org.js.nuclear">
        <name>Nuclear team</name>
    </developer>
    <content_rating type="oars-1.1" />
    <description>
    <p>nuclear is a free music streaming program that pulls content from free sources all over the internet.</p>

    <p>If you know mps-youtube, this is a similar music player but with a GUI.
    It's also focusing more on audio. Imagine Spotify which you don't have to pay for and with a bigger library.</p>

    <p>Features</p>
    <ul>
        <li> Searching for and playing music from YouTube (including integration with playlists), Jamendo, and SoundCloud</li>
        <li> Searching for albums (powered by Last.fm and Discogs), album view, automatic song lookup based on artist and track name (in progress, can be dodgy sometimes)</li>
        <li> Song queue, which can be exported as a playlist</li>
        <li> Loading saved playlists (stored in json files)</li>
        <li> Scrobbling to last.fm (along with updating the 'now playing' status)</li>
        <li> Newest releases with reviews - tracks and albums</li>
        <li> Browsing by genre</li>
        <li> Radio mode (automatically queue similar tracks)</li>
        <li> Unlimited downloads (powered by youtube)</li>
        <li> Realtime lyrics</li>
        <li> Browsing by popularity</li>
        <li> List of favorite tracks</li>
        <li> Listening from local library</li>
    </ul>
    </description> 
    <launchable type="desktop-id">org.js.nuclear.Nuclear.desktop</launchable>
    <screenshots>
        <screenshot type="default">
        <caption>Album Search</caption>
        <image>https://i.imgur.com/idFVnAF.png</image>
        </screenshot>
        <screenshot>
            <caption>Album Display</caption>
        <image>https://i.imgur.com/Kvzo3q7.png</image>
        </screenshot>
        <screenshot>
            <caption>Dashboard Best New Music</caption>
            <image>https://i.imgur.com/bMDrR4M.png</image>
        </screenshot>
        <screenshot>
            <caption>Dashboard Genres</caption>
            <image>https://i.imgur.com/g0aCmKx.png</image>
        </screenshot>
        <screenshot>
            <caption>Playlist View</caption>
            <image>https://i.imgur.com/2VMXHDC.png</image>
        </screenshot>
        <screenshot>
            <caption>Lyrics View</caption>
            <image>https://i.imgur.com/7e3DJKJ.png</image>
        </screenshot>
        <screenshot>
            <caption>Equalizer View</caption>
            <image>https://i.imgur.com/WreRL0w.png</image>
        </screenshot>
    </screenshots>
    <url type="homepage">https://nuclear.js.org</url>
    <project_group>Nuclear</project_group>
    <releases>
        <release version="{{tag}}" date="{{date}}">
        <description>
            <p>See release notes on Github</p>
        </description>
        </release>
    </releases>
</component>
`;
