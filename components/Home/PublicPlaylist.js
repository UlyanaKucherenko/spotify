import Link from 'next/link';

export const PublicPlaylist = ({playlists}) => {
  return(
    <div>
      <ul>
        {playlists && playlists.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/playlist/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}