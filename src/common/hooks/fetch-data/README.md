Refactored Example from React DOCS

```
import React, { useEffect, useState } from 'react';

const useFriendStatus = (friendId: string): boolean | null => {
  const [isOnline, setIsOnline] = useState(false);

  const handleStatusChange = (status: { isOnline: boolean }): void => setIsOnline(status.isOnline);

  useEffect(() => {
    someAPI.subscribeToFriendStatus(friendId, handleStatusChange);
    return () => {
      someAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  });

  return isOnline;
};
```
