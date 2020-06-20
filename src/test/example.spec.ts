import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User('Will', 'will@email.com')

  expect(user.name).toEqual('Will')
})
