export default function URLs(props) {
  return (
    //   Input and generate button for generating a short url
    <div className="generateForm">
      <p>{"{ Shorten your URL below }"}</p>
      <form method="POST" onSubmit={(e) => props.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Long URL"
          name="longurl"
          onChange={(ele) => props.setUrl(ele.target.value)}
        />

        <input type="submit" value="Generate" />
      </form>
    </div>
  );
}
