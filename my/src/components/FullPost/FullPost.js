import classes from "./FullPost.module.css";

const FullPost = ({ id }) => {
  // useState чтобы хранить title, body
  // Axios zapros


  return (
    <main className={classes.FullPost}>
      <h1>title</h1>
      <p>body</p>
    </main>
  );
}
export default FullPost;