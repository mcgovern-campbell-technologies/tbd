//add comment
export function createTestAction(something) {
  console.log('creating test action of type TEST_ACTION')
  return {
    type: 'TEST_ACTION',
    something
  }
}

export const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

export const authFail = () => ({
    type: 'AUTH_FAIL'
})
