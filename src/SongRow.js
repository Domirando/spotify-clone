import './SongRow.css'
export default function SongRow({track}) {
    return (
        <div className='songRow'>
            <img className='songRow_album' src={track.album.images[0].url}/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}
