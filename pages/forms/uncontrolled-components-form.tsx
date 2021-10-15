import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import styles from './form.module.css'

const UncontrolledComponentsForm = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)
  const ageInputRef = useRef<HTMLInputElement>(null)
  const topicInputRef = useRef<HTMLSelectElement>(null)
  const commentsInputRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    // validation
    // send request (post, put)
    console.log(JSON.stringify({
       name: nameInputRef.current!.value, 
       age: ageInputRef.current!.valueAsNumber, 
       topic: topicInputRef.current!.value, 
       comments: commentsInputRef.current!.value 
    }))
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" ref={ageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="topic">Favorite Topic</label>
            <select id="topic" ref={topicInputRef}>
              <option value="React">React</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Next.js">Next.js</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" ref={commentsInputRef} />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default UncontrolledComponentsForm
