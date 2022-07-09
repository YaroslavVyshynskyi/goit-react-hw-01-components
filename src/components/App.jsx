import { Profile } from 'components/Profile/Profile';
import user from "./Profile/user.json";
import stats from "./Statistics/data.json";
import friends from "./FriendList/friends.json"
import transactions from "./TransactionHistory/transaction.json"
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={ friends } />
      <TransactionHistory items={ transactions } />
    </div>
  );
};
