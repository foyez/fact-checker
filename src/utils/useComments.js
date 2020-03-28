import { useState, useEffect } from 'react'
import { getComments, getUrlArticleById } from '../firebase/firebase.utils'

export const useArticle = articleId => {
  const [article, setArticle] = useState({
    articleContent: '',
    comments: [],
  })

  useEffect(() => {
    const fetchArticle = async () => {
      // const snapshot = await firestore
      //   .collection('comments')
      //   .where('articleId', '==', articleId)
      //   .orderBy('createdAt', 'desc')
      //   // .limit(2)
      //   .get()
      const [articleContent, comments] = await Promise.all([
        getUrlArticleById(articleId),
        getComments(articleId),
      ])
      // console.log(articleContent)

      // const fetchedComments = await getComments(articleId)
      setArticle({ ...article, articleContent, comments })
    }

    fetchArticle()
  }, [articleId])

  return article
}
