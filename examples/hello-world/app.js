/**
 * @author muwoo
 * Date: 2018/7/2
 */
Vue.use(window.RenderCanvas)

new Vue({
  el: '#app',
  data: {
    msg: 'hello world',
    renderWidth: 'full',
    renderHeight: 'full',
    left: 120,
    dataJSON: [
      {
        title: '标题这是一个标题呢？还是什么',
        desc: '描述',
        img: 'https://avatars3.githubusercontent.com/u/21073039?s=460&v=4'
      },
      {
        title: '标题',
        desc: '描述',
        img: 'https://placekitten.com/360/420'
      },
      {
        title: '标题这是一个标题呢？还是什么',
        desc: '描述',
        img: 'https://placekitten.com/360/421'
      },
      {
        title: '标题',
        desc: '描述',
        img: 'https://placekitten.com/360/422'
      }
    ]
  },
  canvasOptions: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  methods: {
    getStyle (type, i) {
      return {
        img: {
          left: 10,
          top: 10 + 110 * i,
          width: 100,
          height: 100,
          fill: '#000',
          fontSize: 18
        },
        title: {
          left: 120,
          top: 10 + 110 * i,
          fill: '#000',
          fontSize: 18,
          width: 150,
          ellipse: true
        },
        desc: {
          left: 120,
          top: 50 + 110 * i,
          fill: '#999'
        },
        date: {
          left: 120,
          top: 80 + 110 * i,
          fill: '#999'
        }
      }[type]
    }
  },
  renderCanvas(h) {
    return h('view', this.dataJSON.map((item, i) => {
      return h('view', [
        h('image', {
          props: {
            src: item.img
          },
          style: this.getStyle('img', i)
        }),
        h('text', {
          style: this.getStyle('title', i),
          on: {
            click: (e, item) => {
              console.log(e, item)
            }
          },
        }, item.title),
        h('text', {
          style: this.getStyle('desc', i)
        }, item.desc),
        h('text', {
          style: this.getStyle('date', i)
        }, new Date().toLocaleDateString())
      ])

    }))
  }
})
