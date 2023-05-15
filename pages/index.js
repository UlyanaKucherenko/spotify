import { PageHeader } from '@/components/PageHeader';
import { TopArtist } from '@/components/Home/TopArtist';
import { ContentSection } from '@/components/ContentSection';
import { PublicPlaylist } from '@/components/Home/PublicPlaylist';
import playlist from '@/pages/playlist';
// import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await responseUsers.json();

  if (!usersData) {
    return {
      notFound: true,
    };
  }

  const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await responsePosts.json();

  // if (!postsData) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {
      artists: usersData,
      playlists: postsData,
    },
  };
};

const Home = ({ artists,playlists }) => {
  // const [posts, setPosts] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await response.json();
  //     console.log('data', data);
  //     setPosts(data)
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <PageHeader title="User Name" category="Profile"/>
      <ContentSection title="Top artists this month" path="/">
        <TopArtist artists={artists}/>
      </ContentSection>
      <ContentSection title="Top tracks this month" path="/">
        <PublicPlaylist playlists={playlists}/>
      </ContentSection>
    </>
  );
};

export default Home;
