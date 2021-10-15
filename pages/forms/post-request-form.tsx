import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './form.module.css'

const PostRequestForm = () => {

  const [userId, setUserId] = useState(1)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const router = useRouter()

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault()

    // client side validation
    const hasEmptyFields = Object.values({ userId, title, body }).some(element => element === '')
    if (hasEmptyFields) return toast.error('please fill in all fields')

    // post request
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ userId, title, body })
    })

    // when response.status is not 2xx Success
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) return toast.error('authentication or authorization problem')
      return toast.error('Something Went Wrong')
    }

    // do something with response data (optional)
    const data = await response.json()
    console.log(data)

    // navigate to another page (for external URLs use window.location.href = 'https://nextjs.org')
    router.push('/forms')
  }

  return (
    <>
    <ToastContainer/>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="userId">UserId</label>
          <input type="number" id="userId" value={userId} onChange={e => setUserId(+e.target.value)} />
        </div>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className={styles.control}>
          <label htmlFor="body">Body</label>
          <textarea id="body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
      </div>
      <button>Submit</button>
    </form>
    </>
  )
}

export default PostRequestForm
