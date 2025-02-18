import css from './styles/friends.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? css.online : css.offline;
  
    return (
      <li className={css.item}>
        <span className={`status`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={statusClass}>{name}</p>
      </li>
    );
  };

  const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id} 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  };
  
  export {FriendList};