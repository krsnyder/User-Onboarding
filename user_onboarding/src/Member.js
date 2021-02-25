export default function Member({details}) {
  const { name, email, role } = details
  
  return (
    <div className="container">
      <div className="form-group">
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}