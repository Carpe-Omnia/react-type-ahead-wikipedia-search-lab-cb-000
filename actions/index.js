'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if(resultStore.isOld(requested)) {
      return;
    }
    var query = data.query ;
    var headlines = data.titles ;
    var bodies = data.descriptions ;
    var links = data.links ;
    var search = headlines.map(function(headline, i){
      return (
        {
          title: headline,
          description: bodies[i],
          link: links[i]
        }
      )
    })
    resultStore.setState({
      results: search,
      updated: requested
    })
  });
};

export default { search };
