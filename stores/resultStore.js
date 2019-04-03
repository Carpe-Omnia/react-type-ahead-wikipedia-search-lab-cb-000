'use strict';

import Store from './Store';

class ResultStore extends Store{
  isOld(updated) {
    return (
      this.getState().updated > updated
    )
  }
}

const resultStore = new ResultStore({
  results: [],
  updated: new Date()
});

export default resultStore;
