import {add_comment} from '../types/FakeBookType'

const stateDefault = {
  comments: [
    {name: 'Yin', content:'hello',avatar:'https://i.pravatar.cc/150?u=yin'},
    {name: 'Yang', content:'hello Yang',avatar:'https://i.pravatar.cc/150?u=yang'},
  ],
}


const FakeBookReducer = (state=stateDefault,action) => {
  switch (action.type) {
    case add_comment:{
      state.comments = [...state.comments, action.userComment];


      return { ...state}
    }
  }
  return {...state};
}

export default FakeBookReducer;