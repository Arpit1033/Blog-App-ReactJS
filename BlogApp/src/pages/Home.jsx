import { useEffect, useState } from "react"
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((post) => {
            if(post){
                setPosts(post.documents)
            }
        })
    }, [])

    if(posts.length === 0){
        return 
    }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
            {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
