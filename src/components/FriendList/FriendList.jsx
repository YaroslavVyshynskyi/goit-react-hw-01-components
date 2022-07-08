import css from "./FriendList.module.css";
import friends from "./friends.json";
import PropTypes from "prop-types";

export const FriendsList = (friends) => { 
    console.log(friends);
    const { avatar, name, isOnline, id } = friends;
    return <ul className={css.friend_list}>
                <li className={css.item}>
                    <span className={css.status}></span>
                    <img className={css.avatar} src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png" alt="User avatar" width="48" />
                    <p className={css.name}>Mango</p>
                </li>
                <li className={css.item}>
                    <span className={css.status}></span>
                    <img className={css.avatar} src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png" alt="User avatar" width="48" />
                    <p className={css.name}>Mango</p>
                </li>
            </ul>
        }