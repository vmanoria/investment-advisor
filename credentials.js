/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {

  // MongoDB
  database: {
    url : "mongodb://ebad3f2f-43fb-4f3b-97b3-dfafff785842:0d8506b2-b3ea-4b97-a983-2d0ce2d91061@192.155.243.53:10304/db"
  },

  tradeoff_analytics : {
    username : '2f2e29c7-23c3-4226-afc6-419ae9ab752c',
    password : 'IUuSWiclR3B6',
    version  : 'v1'
  },

  personality_insights : {
    username : 'efd10e5c-429b-4e6d-b6fb-6e2455b976d5',
    password : 'u3DzvZGutCNX',
    version  : 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: [
    {
      consumer_key :        'JF4OmlNEAPNUn01rY30w4x9wH',
      consumer_secret  :    'jdibb2CSK3b5iA19zA13mTIpqL7uScRVLokesqLwpRWRXuksBl',
      access_token_key :    '246254900-uiZF4MW2zUMs4tYDpTf60yvrkXZkVz9Yn5mKHcgR',
      access_token_secret : 'UbX3F9HwEgLZdcew5wAqiMeoe19KDR9ouxDMD70mHh5bY',
      enabled : true // Disabled since this is just an example
    }
  ]
};
