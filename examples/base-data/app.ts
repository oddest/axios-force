import axios from '../../src/index'

axios({
  method: 'POST',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'POST',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])

axios({
  method: 'POST',
  url: '/base/buffer',
  data: arr
})

const searchParams = new URLSearchParams('q=URLUtils.searchParams&topic=api')
axios({
  method: 'POST',
  url: '/base/post',
  data: searchParams
})
