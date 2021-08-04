import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Khang
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, an athlete, and a university student. I currently read an undergraduate
          degree for mathematics at the National Univerisity of Singapore.
          You’ve found my personal slice of the internet
          –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <Timeline />
      </div>
    </Container>
  );
}
