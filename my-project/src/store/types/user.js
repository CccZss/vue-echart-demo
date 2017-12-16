import namespace from '@/utils/namespace'

export default namespace('user', {
    actions: [
    	'getMyInfo',
        'exit'
    ],
    mutations: [
        'setInfo',
    ]
})