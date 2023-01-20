import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header'
import Footer from './Footer'
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import { Box } from '@mui/system';
import { useLocation } from "react-router-dom";
import { memo } from 'react';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '测试---测试---测试1',
  description:
    "测试---测试---测试1",
  image: 'http://www.jiahuan.tech:8000/static/default_avatar.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: '测试---测试---测试2',
    date: 'Nov 12',
    description:
      '测试---测试---测试2',
    image: 'http://www.jiahuan.tech:8000/static/default_avatar.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: '测试---测试---测试3',
    date: 'Nov 11',
    description:
      '测试---测试---测试3',
    image: 'http://www.jiahuan.tech:8000/static/default_avatar.jpg',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];
console.log(posts)
const sidebar = {
  title: '测试---测试---测试4',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();



const Blog = memo((props) => {
  let { currentuser } = props
  const location = useLocation();
  console.log(location.state)
  if (location.state) {
    currentuser = location.state.currentuser;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="div" display="block">
        <Container maxWidth="lg">
          <Header title="JiaHuan’s Blog" sections={sections} currentuser={currentuser} />

          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
      </Box>
      <Footer
        title="End."
        description="Geek Nerd or what else"
      />
    </ThemeProvider>
  );
})

export default Blog