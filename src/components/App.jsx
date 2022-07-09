import { Profile } from 'components/Profile/Profile';
// import user from "./user.json";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'

// function App() {
//   return (
//     <div className="App">
//       {/* <p>lorem</p> */}
//       <Profile />
//     </div>
//   );
// }

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </div>
  );
};
