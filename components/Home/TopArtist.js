import Link from 'next/link';

export const TopArtist = ({artists}) => {
  return (
      <div>
        <ul>
          {artists && artists.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/artists/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
};