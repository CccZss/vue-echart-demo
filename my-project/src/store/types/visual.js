// 加了这个的作用主要是为了弄一个 命名空间 

import namespace from '@/utils/namespace'

export default namespace('visual', {
    actions: [
        'getLineChartData',
    ],
    mutations: [
        'setInfo',
    ]
})