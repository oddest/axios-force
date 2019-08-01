import axios from '../../src/index'

axios({
  method: 'POST',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr =new Int32Array([21, 31])

axios({
  method: 'POST',
  url: '/base/buffer',
  data: arr
})
