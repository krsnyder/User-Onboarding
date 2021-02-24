/* eslint-disable no-unused-vars */

export default function Form(props) {
  const {values, submit, change, disabled, errors} = props

  const onSubmit = e => {
    e.preventDefault()
    submit()
  }

  const onChange = e => {
    const value = 
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    const { name } = e.target
    change(name, value)
  }

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a member</h2>
        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
        </div>
      </div>
      
      <div className="form-group inputs">
      <h4>General information</h4>

      <label>Name:
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={onChange}
        />
      </label>

      <label>Email:
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={onChange}
        />
      </label>

      <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='lead'>Lead</option>
            <option value='guitar'>Guitar</option>
            <option value='bass'>Bass</option>
            <option value='drums'>Drums</option>
            <option value='vocals'>Vocals</option>
          </select>
        </label>
        </div>
      <div className="form-group checkboxes">
        <h4>What genres can you play?</h4>
      <label>Jam
        <input
            type="checkbox"
            onChange={onChange}
            name="jam"
            checked={values.jam}
            />

      </label>
      <label>Indie
      <input
            type="checkbox"
            onChange={onChange}
            name="indie"
            checked={values.indie}
            />

      </label>
      <label>Funk
      <input
            type="checkbox"
            onChange={onChange}
            name="funk"
            checked={values.funk}
            />

      </label>
      <label>Blues
      <input
            type="checkbox"
            onChange={onChange}
            name="blues"
            checked={values.blues}
            />

      </label>
      <label>Folk
      <input
            type="checkbox"
            onChange={onChange}
            name="folk"
            checked={values.folk}
          />

      </label>

      </div>
      
   </form>
  )
}