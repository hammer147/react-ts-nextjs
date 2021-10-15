import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './form.module.css'

const ControlledComponentsForm = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [topic, setTopic] = useState('React')
  const [comments, setComments] = useState('')

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    // validation
    // send request (post, put)
    console.log(JSON.stringify({ name, age, topic, comments }))
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" value={age} onChange={e => setAge(+e.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="topic">Favorite Topic</label>
            <select id="topic" value={topic} onChange={e => setTopic(e.target.value)}>
              <option value="React">React</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Next.js">Next.js</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" value={comments} onChange={e => setComments(e.target.value)} />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlledComponentsForm
