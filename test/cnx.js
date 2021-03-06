import test from 'ava';
import {macro} from './_helpers';

test.serial(macro, 'http://cnx.org',           'Discover learning materials in an Open Space');
test.serial(macro, 'https://cnx.org',          'Discover learning materials in an Open Space');
test.serial(macro, 'https://cnx.org/browse',   'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/contents', 'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/tos',      'OpenStax CNX Service and Repository User Agreement');
test.serial(macro, 'https://cnx.org/about',    'How it works');
test.serial(macro, 'https://cnx.org/donate',   'Your donation makes a difference');
test.serial(macro, 'https://cnx.org/license',  'Legal');
test.serial(macro, 'https://cnx.org/search',   'Advanced Search');

test.serial(macro, 'http://cnx.org/search?q={searchText}', 'results found', {searchText: 'SELENIUM_NO_RESULTS'});
test.serial(macro, 'https://cnx.org/search?q={searchText}', 'results found', {searchText: 'SELENIUM_NO_RESULTS'});
test.serial(macro, 'https://cnx.org/contents/{uuid}', 'Introduction to Science and the Realm of Physics, Physical Quantities, and Units',
  {uuid: '031da8d3-b525-429c-80cf-6c8ed997733a'}
);
test.serial(macro, 'http://archive.cnx.org/specials/',           'OpenStax Simulations');
test.skip.serial(macro, 'http://cnx.org/users/role-acceptance');
test.skip.serial(macro, 'http://cnx.org/workspace');
