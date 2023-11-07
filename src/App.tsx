import { Header } from "./components/Header";

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// author: { avatar_url, name, role }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/manoelvieira0.png",
      name: "Manoel Vieira",
      role: "Web Developer"
    },
    publishedAt: new Date("2023-11-04 10:00:00"),
    content: [
      { type: 'paragraph', content: "Fala galera 🤚🏽" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "jane.design/doctorcare" },
    ]
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat"
    },
    publishedAt: new Date('2023-11-03 10:00:00'),
    content: [
      { type: 'paragraph', content: "Fala galera 🤚🏽" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteLab 🚀" },
      { type: 'link', content: "jane.design/ignitelab" },
    ]
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


