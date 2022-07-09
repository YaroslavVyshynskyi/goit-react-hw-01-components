import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendsList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            const statusColor = isOnline ? "green" : "red";
            return (<li key={id} className={css.item}>
                <span className={css.status} style={{backgroundColor: statusColor}} ></span>
                <img className={css.avatar}
                    src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>)
        })}
    </ul>
};
        
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
