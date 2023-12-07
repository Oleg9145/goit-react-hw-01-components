
import {Profile} from './Profile.jsx';
import {Statistics} from './Statistics.jsx';
import user from '../user.json';
import data from '../data.json';
 import friends from '../friends.json'
import {FriendList} from './FriendList.jsx';
import {TransactionHistory} from './TransactionHistory.jsx';
import transactions from '../transactions.json';
export const App = () => {
  return (
    <div>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
       <Statistics data={data} />
       
       <FriendList friends={friends} />;
       <TransactionHistory items={transactions} />;
    </div>
  );
};
