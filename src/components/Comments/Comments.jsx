import React from 'react'
import moment from 'moment-timezone'

import './Comments.scss'

const Comments = ({ comments, comment }) => {
  // console.log(comments)
  // const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  // console.log(tz)
  if (comment.createdAt) {
    comments.unshift(comment)
  }

  return (
    <div>
      {comments.map(comment => {
        let createdAt = comment.createdAt.toDate()
        createdAt = moment(createdAt).format('DD MMMM')

        return (
          <div key={comment.id}>
            <div className="d-flex justify-content-between align-content-center w-50 comment-box">
              <h5>{comment.body}</h5>
              <span className="created-at">{createdAt}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
