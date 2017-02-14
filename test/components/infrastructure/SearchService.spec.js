/**
 * Created by rob on 9/23/16.
 */


const should = require('chai').should()

/**
 * Preferred module structure can't be tested :(
 */

//import {default as instance,  clazz} from '../../../src/app/infrastructure/SearchService'

describe.skip('SearchService helpers', () => {

  it('builds a search request', ()=>{
    let res = SearchService.createESQuery('some text', 'site')
    res.should.deep.equal({
      index: 'firebase-global',
      q: 'some text',
      size: 20,
      type: 'site'
    })
  })

  let _in = {
    '.priority': 1.474657921949E12,
    'hits': [ {
      '_id': '-KRYIK_aMyF4IZRn2wn8',
      '_index': 'firebase-global',
      '_score': 1,
      '_source': {
        'address': {
          'city': 'Woodland',
          'state': 'MI',
          'street': '441 E. Broadway Street',
          'zip': '488979795'
        },
        'clientId': '-KRYI8sBzZ_ZJXWzzfUF',
        'createdAt': 1473766142652,
        'lastModified': 1473766142652,
        'legacyId': '12',
        'name': 'A & L Properties',
        'notes': [ {
          'content': 'Broadway Street / 441 E.'
        }, {
          'content': 'GR'
        } ],
        'phoneNumber': '61636749610000'
      },
      '_type':'site'
    }, {
      '_id': '-KRYIK_iQLW2c-zKpq4B',
      '_index': 'firebase-global',
      '_score': 1,
      '_source': {
        'address': {
          'city': 'Detroit',
          'state': 'MI',
          'street': '18420 James Couzens Fwy.',
          'zip': '482352505'
        },
        'clientId': '-KRYI8sCVDQeu2hBXNO3',
        'createdAt': 1473766142652,
        'lastModified': 1473766142652,
        'legacyId': '16',
        'name': 'Marathon Service Station',
        'notes': [ {
          'content': 'James Couzens / Schaefer'
        }, {
          'content': 'CL'
        } ],
        'phoneNumber': '31334542680000'
      },
      '_type': 'site'
    } ],
    'max_score': 1,
    'total': 13201
  }

  it('extracts the site ids from the search results', ()=> {
    SearchService.extractEntityIds(_in).should.deep.equal(['-KRYIK_aMyF4IZRn2wn8', '-KRYIK_iQLW2c-zKpq4B'])
  })
})
