import Layout from '../components/Layout'
import Feed from '../components/Feed'
import Suggestions from '../components/Suggestions'

function Index({ posts }) {
  console.log('🚀 ~ posts', posts);
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          '/images/avatar.jpg',
        name: 'Mary Stefany',
        username: 'mary_stefany',
      },
      description: '',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
      videoUrl:
        'https://v16-webapp.tiktok.com/e75e307d2b35f46b823f73cc47a7f969/61f9abc8/video/tos/useast2a/tos-useast2a-ve-0068c001/88903352089c41d9a893939e107b7819/?a=1988&br=2186&bt=1093&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=XOQ9-3._nz7ThoTk.lXq&l=202202011552540102230650360CBFE67C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajM3dzc6Zjg7OjMzNzczM0ApNTc7OWc4ODw5NzU2Zjc1O2cvMG5hcjRnamZgLS1kMTZzczBeXjVhLS41MmI2L2AxL2E6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          '/images/avatar.jpg',
        name: 'Mary Stefany',
        username: 'mary_stefany',
      },
      description: 'Vídeo teste para clone de interface',
      tags: [{ title: '#youtube' }, { title: '#clone' }],
      songName: 'Tampa Curhat Beat - TampaCurhat',
      videoUrl:
        'https://v16-webapp.tiktok.com/e75e307d2b35f46b823f73cc47a7f969/61f9abc8/video/tos/useast2a/tos-useast2a-ve-0068c001/88903352089c41d9a893939e107b7819/?a=1988&br=2186&bt=1093&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=XOQ9-3._nz7ThoTk.lXq&l=202202011552540102230650360CBFE67C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajM3dzc6Zjg7OjMzNzczM0ApNTc7OWc4ODw5NzU2Zjc1O2cvMG5hcjRnamZgLS1kMTZzczBeXjVhLS41MmI2L2AxL2E6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: data,
    },
  }
}

export default Index;