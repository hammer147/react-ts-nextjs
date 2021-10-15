import Link from 'next/link'

const Forms = () => {
  return (
    <div>
      <h1>Forms</h1>
      <ul>
        <li>
          <Link href="/forms/controlled-components-form">
            Controlled Components Form (separate state variable for value of each input component)
          </Link>
        </li>
        <li>
          <Link href="/forms/controlled-components-multi-form">
            Controlled Components Multiple Inputs Form (all values combined in one state variable)
          </Link>
        </li>
        <li>
          <Link href="/forms/uncontrolled-components-form">
            Uncontrolled Components Form (refs)
          </Link>
        </li>
        <li>
          <Link href="/forms/post-request-form">
            A form that sends a POST request to a server (fetch api)
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Forms
