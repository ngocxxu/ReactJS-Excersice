import {add_comment} from '../types/FakeBookType'

export const addCommentAction = (userComment) => ({
  type: add_comment,
  userComment
  
})