import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hundred-days-of-code-css-ribbon@v0.1.1/100-days-of-code-ribbon.css"/>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <a class="hundred-days-of-code-ribbon" href="https://github.com/narze/100-days-of-code" data-day="16" target="_blank"></a>
    </Layout>
  )
}
