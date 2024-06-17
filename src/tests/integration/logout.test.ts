import { renderBlock } from '../utils'
import { step } from '../utils'
// import { getByTestId, queryByTestId, waitFor } from '@testing-library/dom'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import { fields } from '../../mock/fields'
import { USER_STUB } from '../stubs'

describe('pages/Profile', () => {
  it('should logout from profile and redirect to onboarding', async () => {
    await step('render profile page to dom', () => {
      renderBlock({
          Block: ProfilePage,
          props: { fields: fields, testId: 'profile' },
          state: { user: USER_STUB }
        }
      )
    })

    // TODO: Разобраться с интеграционными тестами на каникулах

    // await step('click to logout btn', () => {
    //   const logoutBtn = getByTestId(document.body, 'logout-btn')
    //   logoutBtn.click()
    // })

    // await step('wait opening login page', async () => {
    //   await waitFor(() => {
    //     expect(queryByTestId(document.body, 'login-page')).toBeInTheDocument()
    //   })
    // })

    // await step('check global state', () => {
    //   expect(window.store.getState().user.data).toEqual(null)
    // })
  })
})
