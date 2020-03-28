import React, { useEffect, useState } from 'react'
import Comments from '../../components/Comments/Comments'
import { useComments } from '../../utils/useComments'
import { auth, createUserProfileDocument, createComment } from '../../firebase/firebase.utils'

const ArticlePage = ({ match }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [comment, setComment] = useState({
    body: '',
    articleId: '',
    authorId: '',
  })

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // setCurrentUser(user)
      // console.log(user)
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(user)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  const fetchedComments = useComments(match.params.id)

  const handleChange = e => {
    const { value } = e.target

    setComment(value)
  }

  const handleCommentSubmit = e => {
    e.preventDefault()

    createComment({
      body: comment,
      authorId: currentUser.id,
      articleId: match.params.id,
    }).then(comment => {
      console.log(comment)
      setComment(comment)
    })
    // e.target.comment = ''
    // setComment()
  }

  return (
    <div>
      <div>Article Page: {match.params.id}</div>
      <hr />
      {currentUser && (
        <form className="d-flex mb-5" onSubmit={handleCommentSubmit}>
          <input
            className="mr-3 form-control w-50"
            type="text"
            name="comment"
            onChange={handleChange}
          />
          <button className="btn btn-primary">comment</button>
        </form>
      )}
      <Comments comment={comment} comments={fetchedComments} />
    </div>
  )
}

export default ArticlePage
