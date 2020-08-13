import styles from "../styles/Home.module.css"

import Head from 'next/head'
import { GetStaticProps } from 'next'
import { initDotCMS } from 'dotcms'

export default function Home({ render }) {
    const containers = Object.values(render.containers).map(({ container, contentlets }) => {
        const con = Object.values(contentlets);
        return <li key={container.identifier}>
            <h3>{container.name}</h3>
            <ul>
                {con.map((contentlets: []) => {
                    return contentlets.map(({ inode,
                        contentType,
                        title }) => {
                        return <li key={inode}>{contentType} : {title}</li>
                    })
                })}
            </ul>
        </li>
    })

    return <div className={styles.container}>
        <Head>
            <title>{render.page.seoTitle}</title>
        </Head>
        <header>
            <img src="/dotcms-logo.png" width="300" alt="DotCMS" />
            <h1 className="title">
                {render.page.seoTitle}
            </h1>
        </header>

        <h2>Containers</h2>
        <ul>
            {containers}
        </ul>

    </div>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const api = initDotCMS({
        host: 'https://demo.dotcms.com',
        /*
            This token is for DEMO purpouses in prodction use enviromental variables

            To get a new token, just run:
            
            curl -k -H "Content-Type:application/json"  -X POST -d  '{ "user":"admin@dotcms.com", "password":"admin", "expirationDays": 10 }' https://demo.dotcms.com/api/v1/authentication/api-token

        */
        token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcGk2ZWI3Yzg5Mi0zNjQxLTQwYmQtODIzNC0xYTQ2NTUyNGE0ODYiLCJ4bW9kIjoxNTk3MDA1MTQyMDAwLCJuYmYiOjE1OTcwMDUxNDIsImlzcyI6ImE5YjQ4ZjFlY2MiLCJleHAiOjE1OTc4NjkxNDIsImlhdCI6MTU5NzAwNTE0MiwianRpIjoiYjcyOTU5MTQtZDMxNi00MTkzLTgzY2UtOGRkM2EwYTMwNmU0In0.Z-fe_0J_RLDjb6zpj09RVs4Iy8-pZromrbgEZ3xjlHI',
    })

    const render = await api.page.get({ url: '/' })

    return {
        props: {
            render
        },
    }
}

