import React from "react";
import styles from "./post.module.scss";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export const Post = ({ post }) => {
  // const { user } = useSelector((store) => store["logIn"]);

  return (
    <>
      <div className={`${styles.post} mt-4 `}>
        <div>
          <div>
            <img src={post.imageURL} alt={post.title} className={styles.img} />
          </div>

          <div className={styles["post-title"]}>
            <h1>
              <Link to={`/post/${post._id}`}>{post.title}</Link>
            </h1>

            <p>{new Date(post.createdAt).toDateString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};
