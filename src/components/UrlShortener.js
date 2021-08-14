import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function URLs(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.login) {
      history.push("/login");
    }
  });
  return (
    //   Input and generate button for generating a short url
    <div className="generateForm aligned">
      <p>{"{ Shorten your URL below }"}</p>
      <form
        className="aligned"
        method="POST"
        onSubmit={(e) => props.handleSubmit(e)}
      >
        <div className="b-border">
          <input
            type="text"
            placeholder="Long URL"
            name="longurl"
            onChange={(ele) => props.setUrl(ele.target.value)}
          />
        </div>

        <input type="submit" value="Generate" />
      </form>
    </div>
  );
}
