import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

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
    </div>
  );
};
