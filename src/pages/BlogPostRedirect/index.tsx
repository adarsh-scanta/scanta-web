import { useState, useEffect, lazy } from "react";
import { useHistory } from "react-router-dom";
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

function BlogFullPost() {
  const history = useHistory();
  useEffect(() => {
    window.location.pathname.includes("/post") &&
      history.push(window.location.pathname.replace("/post", ""));
    window.location.pathname.includes(".html") &&
      history.push(window.location.pathname.replace(".html", ""));
    window.location.pathname.includes("contactus") &&
      history.push(window.location.pathname.replace("/contactus", ""));
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
    </div>
  );
}
export default BlogFullPost;
