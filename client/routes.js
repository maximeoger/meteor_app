import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '../imports/ui/App'
import UserList from '../imports/ui/Views/UserList'
import AddUser from '../imports/ui/Views/AddUser'

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App , {
      content: <UserList />
    })
  }
})

FlowRouter.route('/add-user', {
  name: 'Add User',
  action(){
    mount( App, {
      content: <AddUser />
    })
  }
})
