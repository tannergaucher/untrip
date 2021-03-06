import React from "react"
import { Link } from "gatsby"

import { PostCard } from "."
import { useAllSanityPost } from "../hooks"

export default function posts() {
  const { edges } = useAllSanityPost()

  return (
    <>
      {edges.map(edge => (
        <Link
          to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
          key={edge.node.id}
          style={{ textDecoration: `none`, color: `inherit` }}
        >
          <PostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </>
  )
}
