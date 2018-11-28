// TODO: how do we name our mutations?

// TODO: How do we define / export our mutations?
/*

    Like so:

        export const SOME_MUTATION = 'SOME_MUTATION'
        export const SOME_OTHER_MUTATION = 'SOME_OTHER_MUTATION'

    or so:

        export default {
            SOME_MUTATION: 'SOME_MUTATION',
            SOME_OTHER_MUTATION: 'SOME_OTHER_MUTATION'
        }

*/

export default {
  UP_CHANGED: 'SYSTEM_HEALTH__UP_CHANGED',
  DOWN_CHANGED: 'SYSTEM_HEALTH__DOWN_CHANGED',
  PAUSED_CHANGED: 'SYSTEM_HEALTH__PAUSED_CHANGED',
}
