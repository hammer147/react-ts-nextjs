import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './form.module.css'

const ControlledComponentsMultiForm = () => {

  const [values, setValues] = useState({
    name: '',
    age: 0,
    topic: 'React',
    comments: ''
  })

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.name === 'age' ? +e.target.value : e.target.value // age is of type number !!
    })
  }

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()
    // validation
    // send request (post, put)
    console.log(JSON.stringify(values))
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
          </div>
          <div className={styles.control}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={values.age} onChange={handleChange} />
          </div>
          <div className={styles.control}>
            <label htmlFor="topic">Favorite Topic</label>
            <select id="topic" name="topic" value={values.topic} onChange={handleChange}>
              <option value="React">React</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Next.js">Next.js</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" value={values.comments} onChange={handleChange} />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlledComponentsMultiForm
