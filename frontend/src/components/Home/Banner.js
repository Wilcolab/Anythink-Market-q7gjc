import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  // const {title, setTitle} = useState("");
  function handleChange(e) {
    e.preventDefault();
    let title = e.target.value;
    if (title.length >= 3) {
      console.log(title);
      props.onChangeTitle(
        title,
        (page, title) => agent.Items.byTitle(page, title),
        agent.Items.byTitle(0, title)
      );
      // console.log(props.items);
      // props.items=[];
    }
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            type="text"
            id="search-box"
            onChange={handleChange}
            placeholder="hmmm"
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
