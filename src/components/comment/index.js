
import { useState } from 'react';
import "../comment/comment.css";
import ProfileCircle from "../profileCircle";
import OptionsIcon from "../optionsIcon";
import ProfileContextMenu from "../ProfileContextMenu";
import { Trans } from 'react-i18next';

const Comment = ({ user, content }) => { 
  const [triggerContextMenu, setTriggerContextMenu] = useState(false);

  const fullName = user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : <Trans>"Anonymous"</Trans>;
  const initials = user && user.firstName && user.lastName ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : "A";

  return (
    <div className="comment-container">
      <ProfileCircle initials={initials} />
      <div className="comment-sub-container">
        <h6 className="name">{fullName}</h6>
        <p className="comment-content">{content}</p>
      </div>
      <div>
        <OptionsIcon trigger={() => setTriggerContextMenu(!triggerContextMenu)} />
        {triggerContextMenu && <ProfileContextMenu user={user} />}
      </div>
    </div>
  );
};

export default Comment;

