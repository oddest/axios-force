import axios from '../../src/index'

axios({
  method: 'get',
  url: '/basic/get',
  params: {
    a: 1,
    b: 2
  }
})
