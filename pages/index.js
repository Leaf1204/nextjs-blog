import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello World!
          <br></br>
        I’m Leanne. I’m a software engineer, ceramic artist, printmaker, jewlery maker, designer and hardest job of all, a mom! I love writing clean code, making things, interacting with quirky people and drinking tea.
        </p>
        <p>
          Feel free to view my online portfolio <a herf="https://leafrisinger.com/">leafrisinger.com </a> 
         or connect with my on professional social networks.</p>
        <div className="socialMedia">
          <a href="https://github.com/Leaf1204"><img src="./images/github-big-logo.png"></img></a>
          <a href="https://www.linkedin.com/in/leannefrisinger/"><img src="./images/linkedin.png"></img></a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}