import { useState } from "react";
import useModal from "../../hooks/useModal";
import "./style.css";
import Button from "../button";
import { post } from "../../service/apiClient";

const CreatePostModal = (props) => {
  // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
  const { closeModal } = useModal();

  const [message, setMessage] = useState(null);
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const newPost = {
    userId: props.userId,
    user: {
      id: props.userId,
      email: props.user.email,
      role: props.user.role,
      cohortId: props.user.cohort_id,
      profile: {
        id: props.userId,
        userId: props.userId,
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        bio: props.user.biography,
        githubUrl: props.user.githubUrl,
      },
    },
    content: text,
    createdAt: "",
    updatedAt: "",
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  async function onSubmit() {
    const postResult = await post("posts", newPost);
    if (postResult.status === "fail") {
      setIsError(true);
      setMessage("Error : " + postResult.message);
    } else {
      setIsError(false);
      setMessage("Submit button was clicked! Closing modal in 2 seconds...");
    }

    setTimeout(() => {
      setMessage(null);
      closeModal();
    }, 2000);
  }

  const name = `${props.user.firstName} ${props.user.lastName}`;
  const initials = name
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();

  return (
    <>
      <section className="create-post-user-details">
        <div className="profile-icon">
          <p>{initials}</p>
        </div>
        <div className="post-user-name">
          <p>{name}</p>
        </div>
      </section>

      <section>
        <textarea
          onChange={onChange}
          value={text}
          placeholder="What's on your mind?"
        ></textarea>
      </section>

      <section className="create-post-actions">
        <Button
          onClick={onSubmit}
          text="Post"
          classes={`${text.length ? "blue" : "offwhite"} width-full`}
          disabled={!text.length}
        />
      </section>

      {message && <p className={isError ? "error" : "success"}>{message}</p>}
    </>
  );
};

export default CreatePostModal;
