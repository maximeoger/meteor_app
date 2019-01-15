import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App';
import UserList from '../imports/ui/Views/UserList';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App , {
      content: <UserList />
    })
  }
});