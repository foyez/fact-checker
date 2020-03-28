import React, { useEffect, useState } from 'react'
import Comments from '../../components/Comments/Comments'
import { useArticle } from '../../utils/useComments'
import {
  auth,
  createUserProfileDocument,
  createComment,
  likeArticle,
} from '../../firebase/firebase.utils'

const ArticlePage = ({ match }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [comment, setComment] = useState({
    body: '',
    articleId: '',
    authorId: '',
  })
  const [likes, setLikes] = useState(0)
  const { articleContent, comments } = useArticle(match.params.id)

  useEffect(() => {
    setLikes(articleContent.likesCount)
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
  }, [articleContent.likesCount])

  const handleLikeClick = () => {
    likeArticle(match.params.id, currentUser).then(article => {
      if (article) {
        setLikes(article.likesCount)
      }
      // console.log(likes)
    })
  }

  // useEffect(() => {
  //   setNewLikes(likes)
  // }, [likes])

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
      // console.log(comment)
      setComment(comment)
    })
    // e.target.comment = ''
    // setComment()
  }

  return !articleContent || !comments ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>
        <h3>{articleContent.title}</h3>
        <p>{articleContent.body}</p>
        <button onClick={handleLikeClick}>Likes {likes}</button>
      </div>
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
      <Comments comment={comment} comments={comments} />
    </div>
  )
}

export default ArticlePage
