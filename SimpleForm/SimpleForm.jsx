export default function SimpleForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <br /><br />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </>
  );
}
