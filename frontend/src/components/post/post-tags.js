import React from "react"

export default function PostTags({ tags }) {
  return (
    <>
      {tags.map(tag => (
        <div key={tag.id}>
          <h4>{tag.tag}</h4>
        </div>
      ))}
    </>
  )
}