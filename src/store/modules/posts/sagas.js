import {
  takeLatest, call, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import types from './types';
import {
  listPostsSuccessful,
  listPostsFailed,
} from './actions';

export function* list() {
  try {
    const posts = [
      {
        id: 1,
        title: 'Ajuda com CSS no React.js',
        created_at: '1min atrás',
        user: {
          name: 'Kenzo Ymagawa',
          avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
        },
        description: 'Boa tarde, gostaria de ajuda oara aplicar CSS no React.js',
        categories: [
          {
            id: 1, name: 'React,js', type: 'reactJs', color: '#61dbfb',
          },
          {
            id: 1, name: 'CSS', type: 'css', color: '#264de4',
          },
        ],
      },
      {
        id: 2,
        title: 'Ajuda com CSS no React.js',
        created_at: '1min atrás',
        user: {
          name: 'Kenzo Ymagawa',
          avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
        },
        description: 'Boa tarde, gostaria de ajuda oara aplicar CSS no React.js',
        categories: [
          {
            id: 1, name: 'React,js', type: 'reactJs', color: '#61dbfb',
          },
          {
            id: 1, name: 'CSS', type: 'css', color: '#264de4',
          },
        ],
      },
      {
        id: 3,
        title: 'Ajuda com CSS no React.js',
        created_at: '1min atrás',
        user: {
          name: 'Kenzo Ymagawa',
          avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
        },
        description: 'Boa tarde, gostaria de ajuda oara aplicar CSS no React.js',
        categories: [
          {
            id: 1, name: 'React,js', type: 'reactJs', color: '#61dbfb',
          },
          {
            id: 1, name: 'CSS', type: 'css', color: '#264de4',
          },
        ],
      },
      {
        id: 4,
        title: 'Ajuda com CSS no React.js',
        created_at: '1min atrás',
        user: {
          name: 'Kenzo Ymagawa',
          avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
        },
        description: 'Boa tarde, gostaria de ajuda oara aplicar CSS no React.js',
        categories: [
          {
            id: 1, name: 'React,js', type: 'reactJs', color: '#61dbfb',
          },
          {
            id: 1, name: 'CSS', type: 'css', color: '#264de4',
          },
        ],
      },
      {
        id: 5,
        title: 'Ajuda com CSS no React.js',
        created_at: '1min atrás',
        user: {
          name: 'Kenzo Ymagawa',
          avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
        },
        description: 'Boa tarde, gostaria de ajuda oara aplicar CSS no React.js',
        categories: [
          {
            id: 1, name: 'React,js', type: 'reactJs', color: '#61dbfb',
          },
          {
            id: 1, name: 'CSS', type: 'css', color: '#264de4',
          },
        ],
      },
    ];

    yield delay(2000);

    yield put(listPostsSuccessful(posts));
  } catch (err) {
    Alert('Erro');
    yield put(listPostsFailed());
  }
}

export default all([
  takeLatest(types.LIST.REQUEST, list),
]);
