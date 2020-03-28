import { useState, useEffect } from 'react'
import { firestore, getComments } from '../firebase/firebase.utils'

export const useComments = articleId => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      const snapshot = await firestore
        .collection('comments')
        .where('articleId', '==', articleId)
        .orderBy('createdAt', 'desc')
        // .limit(2)
        .get()

      const fetchedComments = await getComments(snapshot)
      setComments(fetchedComments)
    }

    fetchComments()
  }, [articleId])

  return comments
}
